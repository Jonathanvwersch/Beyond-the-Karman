import React from "react"
import Loader from "../images/loader.svg"

function LoadingSpinner() {
  return (
    <div className="absolute h-screen w-screen bg-transparent inset-0 flex items-center justify-center">
      <object className="bg-black" type="image/svg+xml" data={Loader}>
        svg-animation
      </object>
    </div>
  )
}

export default LoadingSpinner
