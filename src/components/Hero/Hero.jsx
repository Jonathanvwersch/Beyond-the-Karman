import React from "react"

function Hero() {
  return (
    <div
      data-testid="hero"
      className="px-8 md:px-10 lg:px-12 bg-cover bg-hero-image absolute bottom-0 left-0 w-screen h-screen flex items-start flex-col justify-center"
    >
      <h1 className="max-sm:text-4xl text-5xl text-white leading-normal mb-4">
        Your home for everything space related
      </h1>
      <h3 className="max-sm:text-xl text-2xl text-white font-mono">
        Get the latest space news, discover upcoming launches, and more
      </h3>
    </div>
  )
}

export default Hero
