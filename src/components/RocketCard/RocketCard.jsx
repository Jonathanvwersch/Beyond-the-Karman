import React from "react"

function RocketCard({ image, name }) {
  return (
    <div>
      <h2 className="text-white text-3xl mb-6 max-sm:text-2xl">Rocket</h2>
      <div className="flex flex-col md">
        <div className="p-4 md:p-8 flex bg-card  items-center w-full mb-16 flex-col md:flex-row">
          <img
            className="w-3/4 md:w-full md:pr-4 mb-8 lg:mb-0 h-full flex md:max-w-1/3 md:flex-1/3"
            src={image}
            alt={name}
          ></img>
          <div className="flex flex-col w-full items-center h-full md:max-w-2/3 md:flex-2/3">
            <h3 className="text-white text-xl md:text-2xl display-inline mb-4">
              {name}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RocketCard
