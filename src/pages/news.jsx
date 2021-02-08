import React, { useEffect, useState } from "react"
import Layout from "../components/Layout/layout"
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner"
import NewsCard from "../components/NewsCard/NewsCard"
import SEO from "../components/SEO/seo"

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
        console.log(news)
      } catch (err) {
        console.log(err)
      }
    })()
  }, [])

  return (
    <Layout>
      <SEO title="News" />
      {news ? (
        <div>
          <h1 className="text-white mt-10 text-2xl mb-10 md:text-4xl">
            Latest Stories
          </h1>
          <div className="flex flex-col md:flex-none md:grid md:grid-cols-2 md:auto-cols-fr	md:gap-4 md:h-96">
            <div className="w-full h-68 mb-8 md:h-full sm:h-84 md:mb-0">
              <NewsCard
                title={news[0].title}
                date={news[0].publishedAt}
                image={news[0].imageUrl}
                link={news[0].url}
                large={true}
              />
            </div>
            <div className="flex flex-col sm:h-96 sm:grid-cols-2 sm:grid-rows-2 sm:grid-rows-auto sm:flex-none sm:grid sm:gap-2">
              {news.slice(1, 5).map(newsStory => {
                return (
                  <div
                    key={newsStory.id}
                    className="w-full h-40 sm:h-full mb-4 sm:mb-0"
                  >
                    <NewsCard
                      title={newsStory.title}
                      date={newsStory.publishedAt}
                      image={newsStory.imageUrl}
                      link={newsStory.url}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          <h2 className="text-white mt-10 text-xl mb-10 md:text-3xl">
            More Stories
          </h2>
          <div className="flex flex-col mb-16 sm:grid-cols-2 sm:grid-rows-2 sm:grid-rows-auto sm:flex-none sm:grid sm:gap-2">
            {news.slice(6).map(newsStory => {
              return (
                <div
                  key={newsStory.id}
                  className="mb-6 w-full h-52 md:h-64 sm:mb-0"
                >
                  <NewsCard
                    title={newsStory.title}
                    date={newsStory.publishedAt}
                    image={newsStory.imageUrl}
                    link={newsStory.url}
                    large={true}
                  />
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
