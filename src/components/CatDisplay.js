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
      <div>
        {"A compression focused hackathon for developers building the future of Solana NFTs and NFT tooling."}
      </div>
      <div>
        <b>{"Prize Pool: "}</b>
        {"1,000,000 $MPLX Tokens"}
      </div>
      <div>
        {"All $MPLX prizes will be subject to a 1-year lockup period from the date winners are announced."}
      </div>
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
        {"Each cHack track will have one winner that will be awarded 100,000 $MPLX."}
      </div>
      <div>
        {"To be eligible for a Prize, entrants must comply with the cHack Terms and Conditions, which includes successfully passing KYC."}
      </div>
    </div>
  )
}

export default CatDisplay
