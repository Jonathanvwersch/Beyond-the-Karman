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

  return (
    <div className="w-full lg:w-3/4 text-white">
      <div className="flex py-2 h-full items-center">
        <div className="h-full flex flex-col flex-1 justify-center items-center">
          <h1 className=" font-mono text-2xl lg:text-4xl">
            {days || days === 0 ? days : "??"}
          </h1>
          <h3 className="text-md">Days</h3>
        </div>
        <div className="h-full flex flex-col flex-1 justify-center items-center">
          <h1 className="font-mono text-2xl lg:text-4xl">
            {hours || hours === 0 ? hours : "??"}
          </h1>
          <h3 className="text-md">Hours</h3>
        </div>
        <div className="h-full flex flex-col flex-1 justify-center items-center">
          <h1 className="font-mono text-2xl lg:text-4xl">
            {minutes || minutes === 0 ? minutes : "??"}
          </h1>
          <h3 className="text-md">Mins</h3>
        </div>
        <div className="h-full flex flex-col flex-1 justify-center items-center">
          <h1 className="font-mono text-2xl lg:text-4xl">
            {seconds || seconds === 0 ? seconds : "??"}
          </h1>
          <h3 className="text-md">Secs</h3>
        </div>
      </div>
    </div>
  )
}

export default Timer
