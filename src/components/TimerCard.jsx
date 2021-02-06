import React from "react"
import Timer from "./Timer"
import CardButtons from "./CardButtons/CardButtons"
import StatusButton from "./StatusButton"

function TimerCard({ image, name, status, subText, time, watchLink, next }) {
  return (
    <div className="p-4 md:p-8 flex bg-card w-full mb-16 flex-col lg:flex-row">
      <div className="flex-1 mb-4 lg:mb-0 relative">
        <img
          className={`h-56 w-full object-cover z-0  ${
            next ? "md:h-96" : "md:h-64"
          }`}
          src={image}
          alt={name}
        ></img>
        {status ? <StatusButton status={status} /> : null}
      </div>
      <div className="flex flex-col items-center flex-1">
        <h3 className="text-white mb-2 text-md md:text-xl lg:text-xl text-center font-bold">
          {name}
        </h3>
        {subText ? (
          <h4 className="text-white text-md text-center mb-4 max-sm:text-sm">
            {subText}
          </h4>
        ) : null}
        <Timer time={time} />
        <CardButtons watchLink={watchLink} />
      </div>
    </div>
  )
}

export default TimerCard
