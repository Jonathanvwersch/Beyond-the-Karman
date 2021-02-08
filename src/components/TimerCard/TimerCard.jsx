import React from "react"
import Timer from "../Timer/Timer"
import CardButtons from "../CardButtons/CardButtons"
import StatusButton from "../StatusButton/StatusButton"

function TimerCard({
  image,
  name,
  status,
  subText,
  time,
  watchLink,
  next,
  slug,
  data,
  cardButtons = true,
  description,
  pad,
  location,
}) {
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
          <h4 className="text-white text-md text-center mb-2 max-sm:text-sm">
            {subText}
          </h4>
        ) : null}
        {pad ? <p className="text-white text-center text-sm">{pad}</p> : null}
        {location ? (
          <p className="text-white text-center mb-6 text-sm">{location}</p>
        ) : null}
        {description ? (
          <p className="text-white text-center mb-6 text-sm w-full sm:w-3/4">
            {description}
          </p>
        ) : null}
        <Timer time={time} />
        {cardButtons ? (
          <CardButtons data={data} watchLink={watchLink} slug={slug} />
        ) : null}
      </div>
    </div>
  )
}

export default TimerCard
