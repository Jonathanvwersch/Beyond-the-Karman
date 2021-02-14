import React, { useEffect, useState } from "react"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"

function Hero() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])
  return loading ? (
    <LoadingSpinner />
  ) : (
    <div
      data-testid="hero"
      className="btk-container bg-cover bg-hero-image absolute bottom-0 left-0 w-full h-screen flex flex-col justify-center"
    >
      <div className="btk-container-inner flex-col items-start">
        <h1 className="max-sm:text-4xl text-5xl text-white leading-normal mb-4">
          Your home for everything space related
        </h1>
        <h3 className="max-sm:text-xl text-2xl text-white font-mono">
          Get the latest space news, discover upcoming launches, and more
        </h3>
      </div>
    </div>
  )
}

export default Hero
