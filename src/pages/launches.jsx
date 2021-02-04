import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import LoadingSpinner from "../components/LoadingSpinner"
import SEO from "../components/seo"
import TimerLaunchCardNext from "../components/TimerLaunchCardNext"
import TimerLaunchCardUpcoming from "../components/TimerLaunchCardUpcoming"

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
        <div className="mt-24 mb-100 btk-container bg-launch-image bg-contain">
          <h1 className="text-white mt-10 text-2xl mb-6 md:text-4xl">
            Next Launch
          </h1>
          <TimerLaunchCardNext data={launches[0]} />
          <h1 className="text-white text-4xl mb-6 max-sm:text-2xl">
            Upcoming Launches
          </h1>

          <div className="w-full flex flex-wrap">
            {launches.slice(1).map(launch => {
              return <TimerLaunchCardUpcoming data={launch} />
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
