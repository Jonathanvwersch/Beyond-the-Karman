import { Link } from "gatsby"
import React from "react"
import SEO from "../components/SEO/seo"

const NotFoundPage = () => (
  <div className="flex items-center absolute inset-0 justify-center text-center px-6 bg-cover bg-launch-image">
    <SEO title="404" />
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-white font-mono text-xl md:text-4xl mb-6">You're lost in the abyss</h1>
      <Link to="/">
        <button className="rounded bg-white text-black p-2 hover:bg-gray-200 active:bg-gray-400">Return to earth</button>
      </Link>
      <div class="tenor-gif-embed" data-postid="15579380" data-share-method="host" data-width="100%" data-aspect-ratio="1.7785714285714287"><a href="https://tenor.com/view/astronauts-astronaut-cry-baby-dont-gif-15579380">Astronauts Cry GIF</a> from <a href="https://tenor.com/search/astronauts-gifs">Astronauts GIFs</a></div><script type="text/javascript" async src="https://tenor.com/embed.js"></script>
    </div>
  </div>
)

export default NotFoundPage
