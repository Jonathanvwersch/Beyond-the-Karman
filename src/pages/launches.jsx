import React from "react"
import Layout from "../components/Layout/layout"
import { Router } from "@reach/router"
import LaunchInfo from "../components/LaunchInfo/LaunchInfo"
import AllLaunches from "../components/AllLaunches/AllLaunches"

const Launches = () => {
  return (
    <Layout>
      <Router>
        <AllLaunches path="/launches" />
        <LaunchInfo path="/launches/:slug" />
      </Router>
    </Layout>
  )
}

export default Launches
