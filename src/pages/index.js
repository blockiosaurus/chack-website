import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LsDisplay from "../components/LsDisplay"
import CatDisplay from "../components/CatDisplay"
import CatDisclaimer from "../components/CatDisclaimer"
import Header from "../components/header"
import FloatingButton from "../components/FloatingButton"

const IndexPage = () => (
  <>
    <Seo title="Metaplex cHack" />
    <Layout>
      <Header />
      <div className="container">
        <CatDisplay text="~ $cat README" delay="natural"></CatDisplay>
      </div>
      <div className="container">
        <LsDisplay showTracks={true} text="~ $ls -al ./Tracks" delay="natural"></LsDisplay>
      </div>
      <div className="container">
        <LsDisplay showResources={true} text="~ $ls -al ./Resources" delay="natural"></LsDisplay>
      </div>
      <div className="container">
        <LsDisplay showJudges={true} text="~ $ls -al ./Judges" delay="natural"></LsDisplay>
      </div>
      <div className="container">
        <LsDisplay showFAQ={true} text="~ $cat ./FAQ.txt" delay="natural"></LsDisplay>
      </div>
      <div className="container">
        <CatDisclaimer text="~ $cat DISCLAIMER.md" delay="natural"></CatDisclaimer>
      </div>
    </Layout>
    <FloatingButton text={"Sign Up"} link={"https://docs.google.com/forms/d/e/1FAIpQLSdZYLzp10iAO7CpWte9rc8cYH5T2LZnMk0R0sHx2IsgwqPNzQ/viewform?pli=1"} />
  </>
)

export default IndexPage
