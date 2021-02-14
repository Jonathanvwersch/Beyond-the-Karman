import React from "react"

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="btk-container absolute bottom-0 left-0 right-0 bg-transparent text-xs text-white flex-shrink-0"
    >
      <div className="btk-container-inner items-center justify-center">
        © {new Date().getFullYear()} Beyond the Karman
      </div>
    </footer>
  )
}

export default Footer
