import React, { useEffect, useState } from "react"
import CardButtons from "../components/CardButtons/CardButtons"
import Layout from "../components/layout"
import LoadingSpinner from "../components/LoadingSpinner"
import SEO from "../components/seo"
import Timer from "../components/Timer"

const Events = () => {
  const [events, setEvents] = useState()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(
          `https://ll.thespacedevs.com/2.0.0/event/upcoming`
        )
        const jsonData = await response.json()
        setEvents(jsonData.results)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <Layout>
      <SEO title="Events" />
      {events ? (
        <div className="mt-24 mb-100 btk-container bg-launch-image bg-contain">
          <h1 className="text-white mt-10 text-2xl mb-6 md:text-4xl">
            Next Event
          </h1>
          <div className="p-4 md:p-8 flex bg-card w-full mb-16 flex-col rounded-xl lg:flex-row">
            <div className="flex-1 mb-4 lg:mb-0 relative">
              <img
                className="h-56 md:h-96 w-full object-cover z-0 rounded-xl"
                src={events[0].feature_image}
                alt={events[0].name}
              ></img>
            </div>
            <div className="flex flex-col items-center flex-1">
              <h3 className="text-white mb-2 text-md md:text-xl lg:text-2xl text-center font-bold">
                {events[0].name}
              </h3>
              <Timer time={events[0].date} />
              <CardButtons watchLink={events.video_url} />
            </div>
          </div>

          <h1 className="text-white text-4xl mb-6 max-sm:text-2xl">
            Upcoming Events
          </h1>

          <div className="w-full flex flex-wrap">
            {events.slice(1).map(event => {
              return (
                <div
                  key={event.id}
                  className="p-4 md:p-8 mr-2 ml-2 bg-card bg-green-50 flex flex-col mb-10 rounded-xl shadow-lg"
                  style={{ flex: "48%" }}
                >
                  <div className="w-full h-3/4 mb-4 relative">
                    <img
                      className="object-cover w-full h-56 z-0 rounded-xl md:h-96"
                      src={event.feature_image}
                      alt={event.name}
                    ></img>
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <h3 className="text-white mb-2 md:text-xl lg:text-2xl text-center font-bold">
                      {events[0].name}
                    </h3>
                    <Timer time={event.date} />
                    <CardButtons watchLink={event.video_url} />
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

export default Events
