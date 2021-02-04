import React, { useState } from "react"
import Logo from "../../images/Logo.jsx"
import { Link } from "gatsby"

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="btk-container w-full cursor-pointer fixed z-50 bg-black select-none top-0 left-0 right-0 flex justify-between items-center">
      <Link to="/" data-testid="logo-link">
        <Logo />
      </Link>
      <div className="flex sm:items-center">
        <div
          className="text-white max-sm:pt-6 bg-black font-mono text-md max-sm:fixed max-sm:pb-6 max-sm:top-20 max-sm:justify-center max-sm:w-full max-sm:left-0  flex max-sm:flex-col transition-all items-center justify-between"
          style={
            open
              ? { opacity: "100", filter: "blur(0px)" }
              : { opacity: "0", display: "none", filter: "blur(20px)" }
          }
          data-testid="header-links"
        >
          <Link to="/" className="p-3 max-sm:mr-0 hover:text-gray-400">
            Home
          </Link>
          <Link to="/news" className="p-3 max-sm:mr-0 hover:text-gray-400">
            News
          </Link>
          <Link to="/launches" className="p-3 max-sm:mr-0 hover:text-gray-400">
            Launches
          </Link>
          <Link
            to="/events"
            className="p-3 max-sm:mr-0 md:p-3 hover:text-gray-400"
          >
            Events
          </Link>
        </div>
        <div
          className="group flex sm:mr-3 sm:ml-3 flex-col h-6 w-6 justify-center items-end"
          onClick={() => setOpen(prevState => !prevState)}
          role="button"
          aria-label="menu button"
          tabIndex="0"
          onKeyDown={e => {
            if (e.key === "Enter") {
              setOpen(prevState => !prevState)
            }
          }}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span
            className={
              !open
                ? "w-4 h-0.5 bg-white transition-width duration-500 ease-in-out mt-3 group-hover:w-6"
                : "hidden"
            }
          ></span>
        </div>
      </div>
    </header>
  )
}

export default Header
