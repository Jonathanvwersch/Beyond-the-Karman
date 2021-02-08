import React from "react"
import PropTypes from "prop-types"

import Footer from "../Footer/Footer"
import Header from "../Header/header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main
        className="btk-container bg-launch-image bg-contain mt-24 mb-36"
        style={{ flex: "1 0 auto" }}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
