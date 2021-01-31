import React from "react"
import Timer from "../components/Timer"
import CardButtons from "./CardButtons"

function TimerLaunchCardNext({ data }) {
  return (
    <div className="p-4 md:p-8 flex bg-card w-full mb-16 flex-col rounded-xl lg:flex-row">
      <div className="flex-1 mb-4 lg:mb-0 relative">
        <img
          className="h-56 md:h-96 w-full object-cover z-0 rounded-xl"
          src={data.image}
          alt={data.name}
        ></img>
        <div
          className="flex text-white bg-green-500 font-bold px-2 md:px-4 items-center rounded z-10 absolute right-2 top-2"
          style={{
            backgroundColor: `${
              data.status.name === "Go" || data.status.name === "Success"
                ? "green"
                : data.status.name === "TBD"
                ? "orange"
                : "red"
            }`,
          }}
        >
          {data.status.name}
        </div>
      </div>
      <div className="flex flex-col items-center flex-1">
        <h3 className="text-white mb-2 text-md md:text-xl lg:text-2xl text-center font-bold">
          {data.name}
        </h3>
        <h4 className="text-white text-lg text-center mb-4 max-sm:text-sm">
          {data.launch_service_provider.name}
        </h4>
        {data.status.name === "Success" ? null : <Timer time={data.net} />}
        <CardButtons />
      </div>
    </div>
  )
}

export default TimerLaunchCardNext
