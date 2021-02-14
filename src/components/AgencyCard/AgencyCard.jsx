import React from "react"
import Button from "@material-ui/core/Button"
import LanguageIcon from "@material-ui/icons/Language"

function AgencyCard({ logo, name, description, website, wiki, image }) {
  return (
    <div className="flex flex-col">
      <h2 className="text-white text-3xl mb-6 max-sm:text-2xl">Agency</h2>
      <div className="p-4 md:p-8 flex flex-col-reverse lg:flex-row bg-card items-center w-full mb-16">
        <div className="flex flex-1 flex-col items-center">
          <h3 className="text-white text-xl md:text-2xl display-inline mb-4 text-center">
            {name}
          </h3>
          <p className="text-white w-full text-xs lg:w-4/5 sm:text-sm mb-4">
            {description}
          </p>
          <div className="flex">
            <a href={website} className="p-4">
              <Button
                variant="contained"
                color="primary"
                size="small"
                startIcon={<LanguageIcon />}
              >
                Website
              </Button>
            </a>

            <a href={wiki} className="p-4">
              <Button variant="contained" color="default" size="small">
                Wikipedia
              </Button>
            </a>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center mb-4 lg:mb-0 relative mb-8 lg:mb-0">
          <img className="max-h-40 w-auto" src={logo} alt={name}></img>
        </div>
      </div>
    </div>
  )
}

export default AgencyCard
