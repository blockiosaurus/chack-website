import React, { useState } from "react"
import PropTypes from "prop-types"
import Typewriter from "typewriter-effect"

import "react-toggle/style.css"

const Header = ({ siteTitle }) => {
  const [isLoaded, setIsLoaded] = useState(
    typeof window !== "undefined"
      ? sessionStorage.getItem("isLoaded") || false
      : false
  )

  return (
    <header>
      <div>
        <div style={{ display: "flex" }}>
          <h1>{">"}</h1>
          <h1>
            Metaplex cHack
          </h1>
        </div>
        <div style={{ display: "flex" }}>
          <h2>
            <Typewriter
              style={{ marginTop: 0, paddingTop: 0 }}
              options={{
                deleteSpeed: "natural",
              }}
              onInit={typewriter => {
                typewriter
                  .typeString("February 1st - 29th")
                  .start()
              }}
            />
          </h2>
        </div >
      </div>
    </header >

  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
