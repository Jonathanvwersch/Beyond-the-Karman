import React, { useEffect, useState } from "react"
import Time from "./Time"
import TimerSection from "./TimerSection"

function Timer({ time }) {
  const launchTime = new Date(time)
  const [days, setDays] = useState()
  const [minutes, setMinutes] = useState()
  const [hours, setHours] = useState()
  const [seconds, setSeconds] = useState()
  const [currTime, setCurrTime] = useState(new Date())
  const [timeDif, setTimeDif] = useState()
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setCurrTime(new Date()), 1000)
    if (launchTime.getTime() - currTime.getTime() > 0)
      setTimeDif(launchTime.getTime() - currTime.getTime())
    else {
      setTimeDif(currTime.getTime() - launchTime.getTime())
      setDirection(1)
    }

    setDays(Math.floor(timeDif / (3600 * 24 * 1000)))

    setHours(Math.floor(timeDif / (3600 * 1000) - days * 24))

    setMinutes(Math.floor((timeDif / (3600 * 1000) - days * 24 - hours) * 60))

    setSeconds(
      Math.floor(
        ((timeDif / (3600 * 1000) - days * 24 - hours) * 60 - minutes) * 60
      )
    )

    return () => {
      clearInterval(interval)
    }
  }, [currTime, days, hours, launchTime, minutes, timeDif])

  return (
    <div className="flex flex-col items-center text-gray-200">
      <div className="flex py-2 h-full items-center">
        <TimerSection upperText={direction ? "T+" : "T-"} lowerText="±" />
        <TimerSection upperText={days} lowerText="Days" />
        <TimerSection upperText={hours} lowerText="Hours" />
        <TimerSection upperText={minutes} lowerText="Mins" />
        <TimerSection upperText={seconds} lowerText="Secs" />
      </div>
      <Time time={time} />
    </div>
  )
}

export default Timer
