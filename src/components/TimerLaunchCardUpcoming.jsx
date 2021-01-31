import React from "react"
import CardButtons from "./CardButtons"
import Timer from "./Timer"

const TimerLaunchCardUpcoming = ({ data }) => {
  return (
    <div
      key={data.id}
      className="p-4 md:p-8 sm:mr-2 sm:ml-2 bg-card flex flex-col mb-10 rounded-xl shadow-lg"
      style={{ flex: "48%" }}
    >
      <div className="w-full h-3/4 mb-4 relative">
        <img
          className="object-cover w-full h-56 z-0 rounded-xl md:h-96"
          src={data.image}
          alt={data.name}
        ></img>
        <div
          className="flex text-white bg-green-500 px-2 md:px-4 font-bold items-center rounded z-10 absolute right-2 top-2"
          style={{
            backgroundColor: `${
              data.status.name === "Go"
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
      <div className="flex flex-col items-center w-full">
        <h3 className="text-white mb-2 md:text-xl lg:text-2xl text-center font-bold">
          {data.name}
        </h3>
        <h4 className="text-white text-center mb-4 text-sm lg:text-lg">
          {data.launch_service_provider.name}
        </h4>
        {data.status.name === "Success" ? null : <Timer time={data.net} />}
        <CardButtons watchLink={data.vidURLs} />
      </div>
    </div>
  )
}

export default TimerLaunchCardUpcoming
