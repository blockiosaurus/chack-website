import React from "react"
import ItemsList from "../components/ItemsList"
import "../styles/winbox.scss"
import "../styles/mainTerminalWindow.scss"
// import DarkModeToggle from "./DarkModeToggle"

const LsDisplay = ({ text, showTracks, showResources, showJudges, showFAQ }) => {
  const isBrowser = typeof window !== "undefined"

  return (
    <div className="LsDisplayWindow">
      <div className="LsDisplayTaskbar">
        <span>CMD</span>
        {/* <div style={{ position: "absolute", right: "10px", bottom: "-2px" }}>
          <DarkModeToggle />
        </div> */}
      </div>
      <h2>
        {text}
        {isBrowser && window.innerWidth > 1024 ? "" : ""}
        <div className="break"></div>
      </h2>
      {isBrowser ?
        <ItemsList
          showTracks={showTracks}
          showResources={showResources}
          showJudges={showJudges}
          showFAQ={showFAQ}
        /> : ""}
    </div>
  )
}

export default LsDisplay
