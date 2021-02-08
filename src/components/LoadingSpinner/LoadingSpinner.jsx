import React from "react"
import Loader from "../../images/loader.svg"

function LoadingSpinner() {
  return (
    <div className="absolute h-full w-full bg-black inset-0 flex items-center justify-center z-100">
      <object
        data-testid="loading spinner"
        className="bg-black"
        type="image/svg+xml"
        data={Loader}
      >
        svg-animation
      </object>
    </div>
  )
}

export default LoadingSpinner
