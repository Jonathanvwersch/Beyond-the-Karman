import React from "react"
import Loader from "../images/loader.svg"

function LoadingSpinner() {
  return (
    <div className="absolute h-screen w-screen bg-white inset flex items-center justify-center">
      <Loader />
    </div>
  )
}

export default LoadingSpinner
