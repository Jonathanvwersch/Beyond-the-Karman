import React from "react"
import Loader from "../../images/loader.svg"

function ComponentLoadingSpinner() {
  return (
    <div className="btk-container">
      <div className="btk-container-inner items-center justify-center">
        <object
          data-testid="loading spinner"
          type="image/svg+xml"
          data={Loader}
        >
          svg-animation
        </object>
      </div>
    </div>
  )
}

export default ComponentLoadingSpinner
