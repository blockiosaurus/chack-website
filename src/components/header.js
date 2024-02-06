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
      <div style={{ display: "inline-flex" }}>
        <h1>{">"}</h1>
        <h1>
          {isLoaded ? (
            "Metaplex cHack"
          ) : (
            <Typewriter
              style={{ marginTop: 0, paddingTop: 0 }}
              options={{
                deleteSpeed: "natural",
              }}
              onInit={typewriter => {
                typewriter
                  .typeString("Dev Tools")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Social")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Mobile")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Gaming")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("RWAs")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("DePIN")
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("Compression")
                  .callFunction(() => {
                    setIsLoaded(true)
                  })
                  .start()
              }}
            />
          )}
        </h1>
      </div >
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
