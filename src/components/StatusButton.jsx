import React from "react"

function StatusButton({ status }) {
  let statusColor
  switch (status) {
    case "Go":
      statusColor = "#66a103"
      break
    case "Success":
      statusColor = "#73b504"
      break
    case "TBD":
      statusColor = "#ff8c00" // light orange
      break
    case "Partial Failure":
      statusColor = "#cc7000" // dark orange
      break
    case "Failure":
      statusColor = "red"
      break
    default:
      statusColor = "grey"
  }
  return (
    <div
      className="flex text-white bg-green-500 font-bold px-2 md:px-4 items-center rounded z-10 absolute right-2 top-2"
      style={{ backgroundColor: `${statusColor}` }}
    >
      {status}
    </div>
  )
}

export default StatusButton
