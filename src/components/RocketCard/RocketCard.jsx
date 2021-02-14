import React from "react"

function RocketCard({ image, name, description, specs }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-white text-3xl mb-6 max-sm:text-2xl">Rocket</h2>
      <div className="flex">
        <div className="p-4 md:p-8 flex flex-col lg:flex-row bg-card items-center w-full mb-16">
          <div className="flex-1 lg:flex-1/3 lg:max-w-1/3 mb-4 lg:mb-0 relative">
            <img
              className="h-56 md:h-full  max-h-96 w-full object-cover"
              src={image}
              alt={name}
            ></img>
          </div>
          <div className="flex flex-1 lg:flex-2/3 lg:max-w-2/3 flex-col items-center h-56 md:h-full">
            <h3 className="text-white text-xl md:text-2xl display-inline mb-4">
              {name}
            </h3>
            <p className="text-white text-xs sm:text-sm w-full lg:w-4/5">
              {description}
            </p>
            <h4 className="text-white text-md md:text-lg mt-4 mb-2 items-start flex">
              Specifications
            </h4>
            <div className="flex flex-col sm:flex-row text-sm w-4/5 mb-4">
              <table className="text-white flex-1">
                <tr className="flex justify-between ">
                  <th>Height:</th>
                  <td className="font-mono">{specs.length} m</td>
                </tr>
                <tr className="flex justify-between ">
                  <th>Diameter:</th>
                  <td className="font-mono">{specs.diameter} m</td>
                </tr>
                <tr className="flex justify-between ">
                  <th>Launch Mass:</th>
                  <td className="font-mono">{specs.launch_mass} tonnes</td>
                </tr>
              </table>
              <span className="max-sm:hidden sm:visible bg-white w-0.25 h-16 ml-4 mr-4"></span>
              <table className="text-white flex-1">
                <tr className="flex justify-between ">
                  <th>Liftoff Thrust</th>
                  <td className="font-mono">{specs.to_thrust} kN</td>
                </tr>
                <tr className="flex justify-between ">
                  <th>Max Stages:</th>
                  <td className="font-mono">{specs.max_stage} m</td>
                </tr>
                <tr className="flex justify-between ">
                  <th>Mass to LEO:</th>
                  <td className="font-mono">{specs.leo_capacity} kg</td>
                </tr>
              </table>
            </div>
            <h4 className="text-white text-md md:text-lg mt-4 mb-2 items-start flex">
              Launches
            </h4>
            <div className="flex flex-col lg:flex-row text-sm w-4/5">
              <table className="text-white flex-1">
                <tr className="flex justify-between ">
                  <th>Successful:</th>
                  <td className="font-mono">{specs.successful_launches}</td>
                </tr>
                <tr className="flex justify-between ">
                  <th>Failures:</th>
                  <td className="font-mono">{specs.failed_launches}</td>
                </tr>
              </table>
              <span className="max-lg:hidden lg:visible bg-white w-0.25 h-16 ml-4 mr-4"></span>
              <table className="text-white flex-1">
                <tr className="flex justify-between ">
                  <th>Consecutive Successes</th>
                  <td className="font-mono">
                    {specs.consecutive_successful_launches}
                  </td>
                </tr>
                <tr className="flex justify-between ">
                  <th>Maiden Flight:</th>
                  <td className="font-mono">{specs.maiden_flight}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RocketCard
