import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/layout"
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"
import SEO from "../components/SEO/seo"
import TimerCard from "../components/TimerCard/TimerCard"

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
        <div>
          <h1 className="text-white mt-10 text-2xl mb-10 md:text-4xl">
            Next Event
          </h1>
          <TimerCard
            name={events[0].name}
            time={events[0].date}
            image={events[0].feature_image}
            watchLink={events.video_url}
            next={true}
          />

          <h2 className="text-white text-xl mb-10 md:text-3xl">
            Upcoming Events
          </h2>

          {events.slice(1).map(event => {
            return (
              <TimerCard
                name={event.name}
                time={event.date}
                image={event.feature_image}
                watchLink={event.video_url}
              />
            )
          })}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </Layout>
  )
}

export default Events
