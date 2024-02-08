import React from "react"
import ReactDOM from "react-dom"
//importing winbox https://github.com/nextapps-de/winbox/issues/1
import WinBox from "winbox/src/js/winbox"
import { Link } from "gatsby"
import ToC from "./ToC"

const checkScreenWidthMobile = () => {
  if (typeof window !== `undefined`) {
    return window.screen.width < 1024 ? true : false
  }
}

const desktopButton = (
  <button
    className="popupWindowLinkButton"
    style={{ cursor: "pointer" }}
    onClick={() => {
      const win = new WinBox({
        title: "Terms and Conditions",
        width: "80%",
        height: "80%",
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
        React.createElement(ToC, {
          close: () => win.close(),
        }),
        win.body
      )
    }}
  >
    Terms and Conditions
  </button>
)

const Footer = () => {
  return (
    <footer
      style={{ display: "flex", flexDirection: "column", margin: "auto" }}
    >
      <div style={{ margin: "auto" }}>
        <Link to="/">Home</Link> {" | "}
        <a
          href="https://github.com/metaplex-foundation"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        {" | "}
        {checkScreenWidthMobile() ? (
          <Link to="/toc">Terms and Conditions</Link>
        ) : (
          desktopButton
        )}
      </div>
      <span
        style={{
          margin: "auto",
          fontSize: "xx-small",
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        Forked from <a href="https://github.com/Kielx/terminal-portfolio">terminal-portfolio</a> by Krzysztof Pantak {" | "} Source code
        distributed under MIT License
      </span>
    </footer>
  )
}

export default Footer
