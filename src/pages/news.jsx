import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
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
    </Layout>
  )
}

export default News
