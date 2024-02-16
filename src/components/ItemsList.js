import React from "react"
import ReactDOM from "react-dom"
import { useStaticQuery, graphql, Link } from "gatsby"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import "winbox/dist/css/winbox.min.css"
import Konami from "react-konami-code"
import PopupTerminalWindow from "../components/PopupTerminalWindow"

export default function ItemsList({ showTracks, showResources, showJudges, showFAQ }) {
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
      judges: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//judges/[^/]+$/" } }
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
      other: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//other/[^/]+$/" } }
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
      faq: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "//faq/[^/]+$/" } }
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

  let track, trackMobile;
  if (showTracks) {
    track = data.tracks.edges.map(item => (
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

    trackMobile = data.tracks.edges.map(item => (
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
  }

  let resources, resourcesMobile;
  if (showResources) {
    resources = data.resources.edges.map(item => (
      <li
        key={item.node.frontmatter.title}
        className={item.node.frontmatter.nameOfClass}
        style={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <button
          className="popupWindowLinkButton"
          style={{ cursor: "pointer", width: "30%" }}
          // onClick={() => createWinboxInstance(item)}
          onClick={() => window.open(item.node.frontmatter.popupGithubLink)}
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

    resourcesMobile = data.resources.edges.map(item => (
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
  }

  let judges, judgesMobile;
  if (showJudges) {
    judges = data.judges.edges.map(item => (
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

    judgesMobile = data.judges.edges.map(item => (
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
  }

  const other = data.other.edges.map(item => (
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

  const otherMobile = data.other.edges.map(item => (
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

  let faq, faqMobile;
  if (showFAQ) {
    faq = data.faq.edges.map(item => (
      <li
        key={item.node.frontmatter.title.replace(" ", "_")}
        className={item.node.frontmatter.nameOfClass}
        style={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <button
          className="popupWindowLinkButton"
          style={{ cursor: "pointer", width: "100%" }}
          onClick={() => createWinboxInstance(item)}
        >
          {item.node.frontmatter.listName}
        </button>
      </li>
    ))

    faqMobile = data.faq.edges.map(item => (
      <li
        key={item.node.frontmatter.title}
        className={item.node.frontmatter.nameOfClass}
      >
      </li>
    ))
  }

  const mappedItems = () => {
    return (
      <>
        {showTracks && (<li>→ Tracks:</li>)}
        {showTracks && track}
        {showResources && (<li>→ Resources:</li>)}
        {showResources && resources}
        {showJudges && (<li>→ Judges:</li>)}
        {showJudges && judges}
        {showFAQ && faq}
        <Konami>
          <li>→ What's This?:</li>
          {other}
        </Konami>
      </>
    )
  }

  const mappedItemsMobile = () => {
    return (
      <>
        {showTracks && (<li>→ Tracks:</li>)}
        {showTracks && trackMobile}
        {showResources && (<li>→ Resources:</li>)}
        {showResources && resourcesMobile}
        {showJudges && (<li>→ Judges:</li>)}
        {showJudges && judgesMobile}
        {showFAQ && faqMobile}
        <Konami>
          <li>→ What's This?:</li>
          {otherMobile}
        </Konami>
      </>
    )
  }

  return (
    <ul className="mappedItemsList">
      {checkScreenWidthMobile() ? mappedItemsMobile() : mappedItems()}
    </ul>
  )
}
