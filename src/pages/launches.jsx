import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
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
        <div className="py-28">
          <h1 className="text-white text-4xl mb-6 max-sm:text-2xl">
            Next Launch
          </h1>
          <div className="p-4 flex w-full mb-16 border border-transparent hover:border-white flex-col lg:flex-row">
            <div className=" flex-1 mb-4 lg:pr-4 lg:mb-0">
              <img
                className=" object-cover"
                src={launches[0].image}
                alt={launches[0].name}
              ></img>
            </div>
            <div className="flex flex-col items-center flex-1 lg:pl-4 ">
              <h3 className="text-white text-2xl mb-2 max-sm:text-lg text-center font-bold">
                {launches[0].name}
              </h3>
              <h4 className="text-white text-lg text-center mb-4 max-sm:text-sm">
                {launches[0].launch_service_provider.name}
              </h4>
              <Timer time={launches[0].window_start} />
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
                  className="border border-transparent hover:border-white p-4 flex flex-col"
                  style={{ flex: "50%" }}
                >
                  <div className="w-full h-3/4 mb-4">
                    <img
                      className="object-cover h-full w-full max-h-96"
                      src={launch.image}
                      alt={launch.name}
                    ></img>
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <h3 className="text-white text-lg mb-2 lg:text-2xl text-center font-bold">
                      {launch.name}
                    </h3>
                    <h4 className="text-white text-center mb-4 text-sm lg:text-lg">
                      {launch.launch_service_provider.name}
                    </h4>
                    <Timer time={launch.window_start} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : null}
    </Layout>
  )
}

export default Launches
