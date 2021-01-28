import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import LoadingSpinner from "../components/LoadingSpinner"
import SEO from "../components/seo"

const News = () => {
  const [news, setNews] = useState()

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(
          `https://www.spaceflightnewsapi.net/api/v2/articles`
        )
        const jsonData = await response.json()
        setNews(jsonData)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <Layout>
      <SEO title="News" />
      {news ? (
        <div className="mt-32 mb-100 btk-container bg-launch-image bg-contain">
          <div className="w-full flex flex-wrap">
            {news.map(newsStory => {
              return (
                <div
                  key={newsStory.id}
                  className="p-6 md:p-8 flex flex-col md:flex-row mb-10 w-full rounded-xl"
                  style={{ background: "rgba(56, 56, 255, 0.1)" }}
                >
                  <img
                    className="object-cover rounded-xl mb-6 md:mb-0 w-full md:w-1/3 h-48 md:h-64"
                    src={newsStory.imageUrl}
                    alt={newsStory.title}
                  ></img>
                  <div className="flex flex-col items-center md:ml-8 w-full">
                    <h3 className="text-white mb-2 text-md md:text-lg lg:text-xl text-center font-bold">
                      {newsStory.title}
                    </h3>
                    <p className="text-gray-200">{newsStory.summary}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </Layout>
  )
}

export default News
