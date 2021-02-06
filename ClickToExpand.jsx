import React, { useState } from "react"

function ClickToExpand({ text }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className="flex-col flex items-center cursor-pointer"
      onClick={() => setOpen(prevState => !prevState)}
    >
      <div className="w-full text-gray-200 mt-4 text-sm">
        <p
          style={
            open
              ? { opacity: "100", visibility: "visible" }
              : {
                  opacity: "0",
                  display: "none",
                }
          }
        >
          {text}
        </p>
      </div>

      <div className="flex flex-col items-center">
        <svg
          style={open ? { transform: "rotate(180deg)" } : {}}
          className="mt-6"
          width="26"
          height="26"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.94 5.72656L8 8.7799L11.06 5.72656L12 6.66656L8 10.6666L4 6.66656L4.94 5.72656Z"
            fill="white"
          />
        </svg>
        <h4 className="text-white text-sm">
          {!open ? "Click to expand" : "Click to close"}
        </h4>
      </div>
    </div>
  )
}

export default ClickToExpand
