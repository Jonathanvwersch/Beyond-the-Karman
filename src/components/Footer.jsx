import React from "react"

function Footer() {
  return (
    <footer className="btk-container w-full flex items-center text-sm justify-end text-white z-100">
      © {new Date().getFullYear()} Beyond the Karman
    </footer>
  )
}

export default Footer
