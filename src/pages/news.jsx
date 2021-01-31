import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import LoadingSpinner from "../components/LoadingSpinner"
import SEO from "../components/seo"
import Button from "@material-ui/core/Button"
import ImportContactsIcon from "@material-ui/icons/ImportContacts"

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
                <div className="p-6 md:p-8 flex flex-col md:flex-row mb-10 w-full rounded-xl bg-card">
                  <img
                    className="object-cover rounded-xl md:flex-1/3 mb-6 md:max-w-1/3 md:mb-0 h-40 sm:h-56 md:h-64"
                    src={newsStory.imageUrl}
                    alt={newsStory.title}
                  ></img>
                  <div className="flex flex-col md:pl-8 md:pt-4 md:pb-4 md:flex-2/3 md:max-w-2/3 justify-between w-full">
                    <div>
                      <div className="flex text-gray-400 justify-between mb-4 text-sm">
                        <h4>{newsStory.newsSite}</h4>
                        <h4>{getTime(newsStory.publishedAt)}</h4>
                      </div>
                      <h3 className="text-white mb-2 text-md md:text-lg lg:text-xl text-center font-bold">
                        {newsStory.title}
                      </h3>
                    </div>
                    <a
                      key={newsStory.id}
                      href={newsStory.url}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full md:mt-0 mt-4 flex items-center justify-center"
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        startIcon={<ImportContactsIcon />}
                      >
                        Read article
                      </Button>
                    </a>
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
