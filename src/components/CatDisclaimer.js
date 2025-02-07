import React from "react"
import ItemsList from "../components/ItemsList"
import "../styles/winbox.scss"
import "../styles/mainTerminalWindow.scss"
// import DarkModeToggle from "./DarkModeToggle"

const CatDisclaimer = ({ text }) => {
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
        {"All $MPLX prizes will be subject to a 1-year lockup period from the date winners are announced. To be eligible for a Prize, entrants must comply with the cHack Terms and Conditions, which includes successfully passing KYC."}
      </p>
      <div>
        {""}
      </div>
    </div>
  )
}

export default CatDisclaimer