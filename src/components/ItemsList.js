import React from "react"
import ReactDOM from "react-dom"
import { useStaticQuery, graphql, Link } from "gatsby"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import "winbox/dist/css/winbox.min.css"

import Contact from "./Contact"
import PopupTerminalWindow from "../components/PopupTerminalWindow"

export default function ItemsList() {
  const data = useStaticQuery(graphql`
    query {
      all: allMarkdownRemark(
        sort: { fields: [frontmatter___added, frontmatter___title], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              listName
              nameOfClass
              popupGithubLink
              popupImageAlt
              popupImageSrc
              popupLiveLink
              techIcons
              title
              slug
              video
              added
            }
            html
            fileAbsolutePath
          }
        }
      }
      resources: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//resources/[^/]+$/" } }
        sort: {
          fields: [frontmatter___added, frontmatter___title]
          order: DESC
        }
      ) {
        edges {
          node {
            frontmatter {
              listName
              nameOfClass
              popupGithubLink
              popupImageAlt
              popupImageSrc
              popupLiveLink
              techIcons
              title
              slug
              video
              added
            }
            html
            fileAbsolutePath
          }
        }
      }
      tracks: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//tracks/[^/]+$/" } }
      ) {
        edges {
          node {
            frontmatter {
              listName
              nameOfClass
              popupGithubLink
              popupImageAlt
              popupImageSrc
              popupLiveLink
              techIcons
              title
              slug
              video
              added
            }
            html
            fileAbsolutePath
          }
        }
      }
    }
  `)
  const checkScreenWidth = () => {
    return window.screen.width > 1000 ? "75%" : "100%"
  }

  const checkScreenWidthMobile = () => {
    return window.screen.width < 1024 ? true : false
  }

  const createWinboxInstance = item => {
    const win = new WinBox({
      title: item.node.frontmatter.title,
      width: checkScreenWidth(),
      height: checkScreenWidth(),
      x: "center",
      y: "center",
      onfocus: function () {
        this.removeClass("wb-no-focus")
        this.addClass("wb-focus")
      },
      onblur: function () {
        this.removeClass("wb-focus")
        this.addClass("wb-no-focus")
      },
    })
    ReactDOM.render(
      React.createElement(PopupTerminalWindow, {
        title: item.node.frontmatter.title,
        popupImageSrc: item.node.frontmatter.popupImageSrc,
        popupImageAlt: item.node.frontmatter.popupImageAlt,
        video: item.node.frontmatter.video,
        popupGithubLink: item.node.frontmatter.popupGithubLink,
        popupLiveLink: item.node.frontmatter.popupLiveLink,
        techIcons: item.node.frontmatter.techIcons,
        html: item.node.html,
      }),
      win.body
    )
  }

  const track = data.tracks.edges.map(item => (
    <li key={item.node.frontmatter.title} className="trackItem">
      <button
        className="popupWindowLinkButton"
        style={{ cursor: "pointer" }}
        onClick={() => createWinboxInstance(item)}
      >
        {item.node.frontmatter.listName}
      </button>
    </li>
  ))

  const trackMobile = data.tracks.edges.map(item => (
    <li key={item.node.frontmatter.title} className="trackItem">
      <Link
        className="popupWindowLinkButton"
        style={{ cursor: "pointer" }}
        to={item.node.frontmatter.slug}
      >
        {item.node.frontmatter.listName}
      </Link>
    </li>
  ))

  const resources = data.resources.edges.map(item => (
    <li
      key={item.node.frontmatter.title}
      className={item.node.frontmatter.nameOfClass}
      style={{ display: "flex", alignItems: "center", width: "100%" }}
    >
      <button
        className="popupWindowLinkButton"
        style={{ cursor: "pointer", width: "30%" }}
        onClick={() => createWinboxInstance(item)}
      >
        {item.node.frontmatter.listName}
      </button>
      <span
        style={{
          fontSize: "x-small",
          paddingLeft: "0.5rem",
          textJustify: "right",
          width: "70%",
        }}
      >
        {`lrwxr-xr-x 1 chacker admin ${item.node.frontmatter.added} ${item.node.frontmatter.slug} -> `}
        <a href={item.node.frontmatter.popupGithubLink}>
          {item.node.frontmatter.popupGithubLink}
        </a>
      </span>
    </li>
  ))

  const resourcesMobile = data.resources.edges.map(item => (
    <li
      key={item.node.frontmatter.title}
      className={item.node.frontmatter.nameOfClass}
    >
      <Link
        className="popupWindowLinkButton"
        style={{ cursor: "pointer" }}
        to={item.node.frontmatter.slug}
      >
        {item.node.frontmatter.listName}
      </Link>
    </li>
  ))

  const contactItem = (
    <li className="infoItem">
      <button
        className="popupWindowLinkButton"
        style={{ cursor: "pointer" }}
        onClick={() => {
          const win = new WinBox({
            title: "Contact me",
            width: checkScreenWidth(),
            height: checkScreenWidth(),
            x: "center",
            y: "center",
            onfocus: function () {
              this.removeClass("wb-no-focus")
              this.addClass("wb-focus")
            },
            onblur: function () {
              this.removeClass("wb-focus")
              this.addClass("wb-no-focus")
            },
          })

          ReactDOM.render(
            React.createElement(Contact, {
              close: () => win.close(),
            }),
            win.body
          )
        }}
      >
        <span role="img" aria-label="e-mail">
          📧
        </span>{" "}
        /Contact
      </button>
    </li>
  )

  const mappedItems = () => {
    return (
      <>
        <li>→ Tracks:</li> {track} <li>→ Resources:</li>
        {resources}
      </>
    )
  }

  const mappedItemsMobile = () => {
    return (
      <>
        <li>→ Tracks:</li> {trackMobile}{" "}
        <li className="trackItem">
        </li>{" "}
        <li>→ Resources:</li>
        {resourcesMobile}
      </>
    )
  }

  return (
    <ul className="mappedItemsList">
      {checkScreenWidthMobile() ? mappedItemsMobile() : mappedItems()}
    </ul>
  )
}
