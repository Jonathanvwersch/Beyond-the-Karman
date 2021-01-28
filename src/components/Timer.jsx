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
  }, [timeElapsed])

  const daysTime = days || days === 0 ? (days < 10 ? `0${days}` : days) : "??"
  const hoursTime =
    hours || hours === 0 ? (hours < 10 ? `0${hours}` : hours) : "??"
  const minutesTime =
    minutes || minutes === 0
      ? minutes < 0
        ? minutes + 60
        : minutes < 10
        ? `0${minutes}`
        : minutes
      : "??"
  const secondsTime =
    seconds || seconds === 0
      ? seconds < 0
        ? seconds + 60
        : seconds < 10
        ? `0${seconds}`
        : seconds
      : "??"

  return (
    <div className="text-gray-400">
      <div className="flex py-2 h-full items-center">
        <div className="h-full flex flex-col flex-1 justify-center items-center mr-6 lg:mr-8">
          <h1 className="font-mono text-2xl lg:text-4xl">{daysTime}</h1>
          <h3 className="text-md">Days</h3>
        </div>
        <div className="h-full flex flex-col flex-1 justify-center items-center mr-6 lg:mr-8">
          <h1 className="font-mono text-2xl lg:text-4xl">{hoursTime}</h1>
          <h3 className="text-md">Hours</h3>
        </div>
        <div className="h-full flex flex-col flex-1 justify-center items-center mr-6 lg:mr-8">
          <h1 className="font-mono text-2xl lg:text-4xl">{minutesTime}</h1>
          <h3 className="text-md">Mins</h3>
        </div>
        <div className="h-full flex flex-col flex-1 justify-center items-center">
          <h1 className="font-mono text-2xl lg:text-4xl">{secondsTime}</h1>
          <h3 className="text-md">Secs</h3>
        </div>
      </div>
    </div>
  )
}

export default Timer
