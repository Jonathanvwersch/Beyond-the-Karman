import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import LoadingSpinner from "../components/LoadingSpinner"
import SEO from "../components/seo"
import TimerCard from "../components/TimerCard"

const Launches = () => {
  const [launches, setLaunches] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(
          `https://ll.thespacedevs.com/2.0.0/launch/upcoming`
        )
        const launchData = await response.json()
        setLaunches(launchData.results)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <Layout>
      <SEO title="Launches" />
      {!loading ? (
        <div className="mt-14 mb-100 btk-container bg-launch-image bg-contain">
          <h1 className="text-white mt-10 text-2xl mb-6 md:text-4xl">
            Next Launch
          </h1>
          <TimerCard
            name={launches[0].name}
            time={launches[0].net}
            image={launches[0].image}
            status={launches[0].status.name}
            subText={launches[0].launch_service_provider.name}
            next={true}
          />
          <h2 className="text-white text-3xl mb-6 max-sm:text-2xl">
            Upcoming Launches
          </h2>
          <div className="w-full flex flex-wrap">
            {launches.slice(1).map(launch => {
              return (
                <TimerCard
                  name={launch.name}
                  time={launch.net}
                  image={launch.image}
                  status={launch.status.name}
                  subText={launch.launch_service_provider.name}
                />
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
