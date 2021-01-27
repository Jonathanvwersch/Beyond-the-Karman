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
    setDays(
      Math.floor(
        (launchTime.getTime() - timeElapsed.getTime()) / (3600 * 24 * 1000)
      )
    )

    setHours(
      Math.floor((launchTime.getTime() - timeElapsed.getTime()) / (3600 * 1000))
    )

    setMinutes(
      Math.floor(
        ((launchTime.getTime() - timeElapsed.getTime()) / (3600 * 1000) -
          hours) *
          60
      )
    )

    setSeconds(
      Math.floor(
        (((launchTime.getTime() - timeElapsed.getTime()) / (3600 * 1000) -
          hours) *
          60 -
          minutes) *
          60
      )
    )
    return () => {
      clearInterval(interval)
    }
  }, [timeElapsed])

  return (
    <div className="w-full text-white border-t-2 border-white h-28 ">
      <div className="flex py-2 h-full items-center">
        <div className="h-full border-b-2 border-white flex flex-1 justify-center items-center">
          <h1 className="font-mono text-5xl">T-</h1>
        </div>
        <div className="h-full flex flex-1/2 justify-center items-center">
          <h1 className="font-mono text-black text-5xl"> | </h1>
        </div>
        <div className="h-full border-b-2 border-white flex flex-1 justify-center items-center">
          <h1 className=" font-mono text-5xl">
            {days || days === 0 ? days : "??"}
          </h1>
        </div>
        <div className="h-full flex flex-1/2 justify-center items-center">
          <h1 className="font-mono text-5xl">:</h1>
        </div>
        <div className="h-full border-b-2 border-white flex flex-1 justify-center items-center">
          <h1 className="font-mono text-5xl">
            {hours || hours === 0 ? hours : "??"}
          </h1>
        </div>
        <div className="h-full flex flex-1/2 justify-center items-center">
          <h1 className="font-mono text-5xl">:</h1>
        </div>
        <div className="h-full border-b-2 border-white flex flex-1 justify-center items-center">
          <h1 className="font-mono text-5xl">
            {minutes || minutes === 0 ? minutes : "??"}
          </h1>
        </div>
        <div className="h-full flex flex-1/2 justify-center items-center">
          <h1 className="font-mono text-5xl">:</h1>
        </div>
        <div className="h-full border-b-2 border-white flex flex-1 justify-center items-center">
          <h1 className="font-mono text-5xl">
            {seconds || seconds === 0 ? seconds : "??"}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Timer
