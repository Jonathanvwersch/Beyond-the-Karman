import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
  if (launches) console.log(launches[0])
  return (
    <Layout>
      <SEO title="Launches" />
      {launches ? (
        <div className="py-28">
          <h1 className="text-white text-4xl mb-6 max-sm:text-2xl">
            Next Launch
          </h1>
          <div className="border border-white p-2 flex mb-8 max-lg:flex-col">
            <div className="w-1/2 max-lg:w-full max-lg:mb-4">
              <img src={launches[0].image} alt={launches[0].name}></img>
            </div>
            <div className="flex flex-col w-1/2 items-center max-lg:w-full">
              <h3 className="text-white text-2xl mb-2 max-sm:text-lg text-center font-bold">
                {launches[0].name}
              </h3>
              <h4 className="text-white text-lg text-center max-sm:text-sm">
                {launches[0].launch_service_provider.name}
              </h4>
              <div></div>
            </div>
          </div>
          <h1 className="text-white text-4xl mb-6 max-sm:text-2xl">
            Upcoming Launches
          </h1>

          {launches.slice(1).map(launch => {
            return (
              <div className="border border-white p-2 flex w-1/2 flex-wrap">
                <div className="w-full mb-4">
                  <img src={launch.image} alt={launch.name}></img>
                </div>
                <div className="flex flex-col items-center w-full">
                  <h3 className="text-white text-2xl mb-2 max-sm:text-lg text-center font-bold">
                    {launch.name}
                  </h3>
                  <h4 className="text-white text-lg text-center max-sm:text-sm">
                    {launch.launch_service_provider.name}
                  </h4>
                  <div></div>
                </div>
              </div>
            )
          })}
        </div>
      ) : null}
    </Layout>
  )
}

export default Launches
