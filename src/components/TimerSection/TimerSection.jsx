import React from "react"

function TimerSection({ upperText, lowerText }) {
  const timerText =
    upperText || upperText === 0
      ? upperText < 10
        ? `0${upperText}`
        : upperText
      : "??"

  return (
    <div className="h-full flex flex-col flex-1 justify-center items-center px-3 lg:px-4">
      <h1 className="font-mono text-2xl lg:text-3xl">{timerText}</h1>
      <h3 className="text-md">{lowerText}</h3>
    </div>
  )
}

export default TimerSection
