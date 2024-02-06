import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import LsDisplay from "../components/LsDisplay"
import CatDisplay from "../components/CatDisplay"
import Header from "../components/header"

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
    </Layout>
  </>
)

export default IndexPage
