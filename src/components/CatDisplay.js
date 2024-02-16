import React from "react"
import ItemsList from "../components/ItemsList"
import "../styles/winbox.scss"
import "../styles/mainTerminalWindow.scss"
// import DarkModeToggle from "./DarkModeToggle"

const CatDisplay = ({ text }) => {
  const isBrowser = typeof window !== "undefined"

  return (
    <div className="CatDisplayWindow">
      <div className="CatDisplayTaskbar">
        {/* <span>CMD</span> */}
        {/* <div style={{ position: "absolute", right: "10px", bottom: "-2px" }}>
          <DarkModeToggle />
        </div> */}
      </div>
      <h2>
        {text}
        {isBrowser && window.innerWidth > 1024 ? "" : ""}
        <div className="break"></div>
      </h2>
      <p>
        {"A compression-focused hackathon for developers building the future of Solana NFTs and NFT tooling with 1 million $MPLX up for grabs."}
      </p>
      <div>
        <b>{"First Place – "}</b>
        {"250,000 $MPLX"}
      </div>
      <div>
        <b>{"Second Place – "}</b>
        {"100,000 $MPLX"}
      </div>
      <div>
        <b>{"Third Place – "}</b>
        {"50,000 $MPLX"}
      </div>
      <div>
        {""}
      </div>
      <div>
        <b>{"Individual Tracks - "}</b> 100,000 $MPLX each
      </div>
    </div>
  )
}

export default CatDisplay