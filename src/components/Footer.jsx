import React from "react"

function Footer() {
  return (
    <footer className="btk-container py-2 w-full flex items-center text-sm justify-end text-white z-100">
      © {new Date().getFullYear()} Beyond the Kármán
    </footer>
  )
}

export default Footer
