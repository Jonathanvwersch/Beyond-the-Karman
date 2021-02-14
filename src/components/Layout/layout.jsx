import React from "react"
import PropTypes from "prop-types"
import Footer from "../Footer/Footer"
import Header from "../Header/header"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="bg-black mt-24 mb-36">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
