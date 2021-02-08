import React from "react"

function Footer() {
  return (
    <footer
      data-testid="footer"
      className="btk-container absolute bottom-0 left-0 bg-transparent py-4 w-full flex items-center text-xs justify-end text-white z-0 flex-shrink-0"
    >
      © {new Date().getFullYear()} Beyond the Karman
    </footer>
  )
}

export default Footer
