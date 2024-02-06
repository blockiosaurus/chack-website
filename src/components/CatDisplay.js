import React from "react"
import ItemsList from "../components/ItemsList"
import "../styles/winbox.scss"
import "../styles/mainTerminalWindow.scss"
import DarkModeToggle from "./DarkModeToggle"

const CatDisplay = ({ text }) => {
  const isBrowser = typeof window !== "undefined"

  return (
    <div className="CatDisplayWindow">
      <div className="CatDisplayTaskbar">
        <span>CMD</span>
        <div style={{ position: "absolute", right: "10px", bottom: "-2px" }}>
          <DarkModeToggle />
        </div>
      </div>
      <h2>
        {text}
        {isBrowser && window.innerWidth > 1024 ? "" : ""}
        <div className="break"></div>
      </h2>
      <div>{"February 1st - 29th"}</div>
      <div>{"A compression focused hackathon for developers building the future of Solana NFTs and NFT tooling. "}</div>
    </div>
  )
}

export default CatDisplay
