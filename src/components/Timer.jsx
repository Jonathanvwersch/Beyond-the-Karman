import React, { useEffect, useState } from "react"

function Timer({ time }) {
  const launchTime = new Date(time)
  const [days, setDays] = useState()
  const [minutes, setMinutes] = useState()
  const [hours, setHours] = useState()
  const [seconds, setSeconds] = useState()
  const [timeElapsed, setTimeElapsed] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTimeElapsed(new Date()), 1000)
    const newTime = launchTime.getTime() - timeElapsed.getTime()
    setDays(Math.floor(newTime / (3600 * 24 * 1000)))

    setHours(Math.floor(newTime / (3600 * 1000) - days * 24))

    setMinutes(Math.floor((newTime / (3600 * 1000) - days * 24 - hours) * 60))

    setSeconds(
      Math.floor(
        ((newTime / (3600 * 1000) - days * 24 - hours) * 60 - minutes) * 60
      )
    )

    return () => {
      clearInterval(interval)
    }
  }, [timeElapsed, days, hours, launchTime, minutes])

  const displayDays =
    days || days === 0 ? (days < 10 && days > 0 ? `0${days}` : days) : "??"
  const displayHours =
    hours || hours === 0
      ? hours < 10 && hours > 0
        ? `0${hours}`
        : hours
      : "??"
  const displayMinutes =
    minutes || minutes === 0
      ? minutes < 0
        ? minutes + 60
        : minutes < 10 && minutes > 0
        ? `0${minutes}`
        : minutes
      : "??"
  const displaySeconds =
    seconds || seconds === 0
      ? seconds < 0
        ? seconds + 60
        : seconds < 10 && seconds > 0
        ? `0${seconds}`
        : seconds
      : "??"

  const launchDate = new Date(time)

  let launchDay = launchDate.getDate()
  launchDay = launchDay < 10 ? `0${launchDay}` : launchDay

  let launchMonth = launchDate.getMonth() + 1
  launchMonth = launchMonth < 10 ? `0${launchMonth}` : launchMonth

  const launchYear = launchDate.getFullYear()
  let [hour, minute, second] = launchDate
    .toLocaleTimeString("en-GB")
    .split(/:| /)

  const dateAndYear = `${launchDay}/${launchMonth}/${launchYear}, ${hour}:${minute}:${second} UTC`

  return (
    <div className="flex flex-col items-center text-gray-200">
      <div className="flex py-2 h-full items-center">
        <div className="h-full flex flex-col flex-1 justify-center items-center mr-6 lg:mr-8">
          <h1 className="font-mono text-2xl lg:text-4xl">{displayDays}</h1>
          <h3 className="text-md">Days</h3>
        </div>
        <div className="h-full flex flex-col flex-1 justify-center items-center mr-6 lg:mr-8">
          <h1 className="font-mono text-2xl lg:text-4xl">{displayHours}</h1>
          <h3 className="text-md">Hours</h3>
        </div>
        <div className="h-full flex flex-col flex-1 justify-center items-center mr-6 lg:mr-8">
          <h1 className="font-mono text-2xl lg:text-4xl">{displayMinutes}</h1>
          <h3 className="text-md">Mins</h3>
        </div>
        <div className="h-full flex flex-col flex-1 justify-center items-center">
          <h1 className="font-mono text-2xl lg:text-4xl">{displaySeconds}</h1>
          <h3 className="text-md">Secs</h3>
        </div>
      </div>
      <h3 className="text-white">{dateAndYear}</h3>
    </div>
  )
}

export default Timer
