import React from "react"

function Time({ time }) {
  const launchDate = new Date(time)

  let launchDay = launchDate.getDate()
  launchDay = launchDay < 10 ? `0${launchDay}` : launchDay

  let launchMonth = launchDate.getMonth() + 1
  launchMonth = launchMonth < 10 ? `0${launchMonth}` : launchMonth

  const launchYear = launchDate.getFullYear()
  let [hour, minute] = launchDate.toLocaleTimeString("en-GB").split(/:| /)

  const dateAndYear = `${launchDay}/${launchMonth}/${launchYear}, ${hour}:${minute} UTC`
  return <h3>{dateAndYear}</h3>
}

export default Time
