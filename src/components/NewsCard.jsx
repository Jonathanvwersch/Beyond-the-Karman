import React from "react"
import Time from "./Time"

function NewsCard({ date, title, link, image, large }) {
  return (
    <a className="group cursor-pointer" href={link}>
      <div className="relative w-full h-full">
        <img className="object-cover h-full w-full" src={image} alt={title} />
        <div className="absolute bottom-0 left-0 right-0 p-2 z-100 bg-news group-hover:bg-news-hover">
          <h1
            className={`text-white font-bold mb-2 ${
              large ? "text-xs sm:text-sm md:text-md lg:text-lg" : "text-xs"
            }`}
          >
            {title}
          </h1>
          <div className="text-gray-200 text-xs">
            <Time time={date} />
          </div>
        </div>
      </div>
    </a>
  )
}

export default NewsCard
