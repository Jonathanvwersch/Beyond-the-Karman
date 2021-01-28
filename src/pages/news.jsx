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

  const getTime = time => {
    const launchDate = new Date(time)

    let launchDay = launchDate.getDate()
    launchDay = launchDay < 10 ? `0${launchDay}` : launchDay

    let launchMonth = launchDate.getMonth() + 1
    launchMonth = launchMonth < 10 ? `0${launchMonth}` : launchMonth

    const launchYear = launchDate.getFullYear()

    return `${launchDay}/${launchMonth}/${launchYear}`
  }

  return (
    <Layout>
      <SEO title="News" />
      {news ? (
        <div className="mt-32 mb-100 btk-container bg-launch-image bg-contain">
          <div className="w-full flex flex-wrap">
            {news.map(newsStory => {
              return (
                <a href={newsStory.url}>
                  <div
                    key={newsStory.id}
                    className="p-6 md:p-8 flex cursor-pointer flex-col md:flex-row mb-10 w-full rounded-xl bg-card hover:bg-card-hover"
                  >
                    <img
                      className="object-cover rounded-xl mb-6 md:mb-0 w-full md:w-2/5 h-48 md:h-64"
                      src={newsStory.imageUrl}
                      alt={newsStory.title}
                    ></img>
                    <div className="flex flex-col items-center justify-between md:ml-8 w-full">
                      <div>
                        <div className="flex w-full text-gray-400 justify-between mb-4 text-sm">
                          <h4>{newsStory.newsSite}</h4>
                          <h4>{getTime(newsStory.publishedAt)}</h4>
                        </div>
                        <h3 className="text-white mb-2 text-md md:text-lg lg:text-xl text-center font-bold">
                          {newsStory.title}
                        </h3>
                        <p className="text-gray-200 tex-center">
                          {newsStory.summary}
                        </p>
                      </div>

                      <button className="rounded-md px-4 py-2 mt-6 bg-gray-900 text-white hover:bg-gray-800">
                        Read article
                      </button>
                    </div>
                  </div>
                </a>
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
