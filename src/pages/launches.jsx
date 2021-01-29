import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import LoadingSpinner from "../components/LoadingSpinner"
import SEO from "../components/seo"
import Timer from "../components/Timer"

const Launches = () => {
  const [launches, setLaunches] = useState()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(
          `https://ll.thespacedevs.com/2.0.0/launch/upcoming`
        )
        const launchData = await response.json()
        setLaunches(launchData.results)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <Layout>
      <SEO title="Launches" />
      {launches ? (
        <div className="mt-24 mb-100 btk-container bg-launch-image bg-contain">
          <h1 className="text-white mt-10 text-2xl mb-6 md:text-4xl">
            Next Launch
          </h1>
          <div className="p-4 md:p-8 flex bg-card w-full mb-16 flex-col rounded-xl lg:flex-row">
            <div className="flex-1 mb-4 lg:mb-0 relative">
              <img
                className="h-56 md:h-96 w-full object-cover z-0 rounded-xl"
                src={launches[0].image}
                alt={launches[0].name}
              ></img>
              <div
                className="flex text-white bg-green-500 font-bold px-2 md:px-4 items-center rounded z-10 absolute right-2 top-2"
                style={{
                  backgroundColor: `${
                    launches[0].status.name === "Go" ||
                    launches[0].status.name === "Success"
                      ? "green"
                      : launches[0].status.name === "TBD"
                      ? "orange"
                      : "red"
                  }`,
                }}
              >
                {launches[0].status.name}
              </div>
            </div>
            <div className="flex flex-col items-center flex-1">
              <h3 className="text-white mb-2 text-md md:text-xl lg:text-2xl text-center font-bold">
                {launches[0].name}
              </h3>
              <h4 className="text-white text-lg text-center mb-4 max-sm:text-sm">
                {launches[0].launch_service_provider.name}
              </h4>
              <Timer time={launches[0].net} />
            </div>
          </div>

          <h1 className="text-white text-4xl mb-6 max-sm:text-2xl">
            Upcoming Launches
          </h1>

          <div className="w-full flex flex-wrap">
            {launches.slice(1).map(launch => {
              return (
                <div
                  key={launch.id}
                  className="p-4 md:p-8 mr-2 ml-2 bg-card bg-green-50 flex flex-col mb-10 rounded-xl shadow-lg"
                  style={{ flex: "48%" }}
                >
                  <div className="w-full h-3/4 mb-4 relative">
                    <img
                      className="object-cover w-full h-56 z-0 rounded-xl md:h-96"
                      src={launch.image}
                      alt={launch.name}
                    ></img>
                    <div
                      className="flex text-white bg-green-500 px-2 md:px-4 font-bold items-center rounded z-10 absolute right-2 top-2"
                      style={{
                        backgroundColor: `${
                          launch.status.name === "Go"
                            ? "green"
                            : launch.status.name === "TBD"
                            ? "orange"
                            : "red"
                        }`,
                      }}
                    >
                      {launch.status.name}
                    </div>
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <h3 className="text-white mb-2 md:text-xl lg:text-2xl text-center font-bold">
                      {launch.name}
                    </h3>
                    <h4 className="text-white text-center mb-4 text-sm lg:text-lg">
                      {launch.launch_service_provider.name}
                    </h4>
                    <Timer time={launch.net} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </Layout>
  )
}

export default Launches
