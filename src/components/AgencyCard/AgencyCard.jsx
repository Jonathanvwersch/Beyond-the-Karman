import React from "react"
import Button from "@material-ui/core/Button"
import LanguageIcon from "@material-ui/icons/Language"

function AgencyCard({ logo, name, description, website, wiki }) {
  return (
    <>
      <h2 className="text-white text-3xl mb-6 max-sm:text-2xl">Agency</h2>
      <div className="p-4 md:p-8 flex bg-card  items-center w-full mb-16 flex-col md:flex-row">
        <img
          className="w-3/4 md:w-full md:pr-4 mb-8 lg:mb-0 h-full flex md:max-w-1/3 md:flex-1/3"
          src={logo}
          alt={name}
        ></img>
        <div className="flex flex-col w-full items-center h-full md:max-w-2/3 md:flex-2/3">
          <h3 className="text-white text-xl md:text-2xl display-inline mb-4">
            {name}
          </h3>
          <p className="text-white text-sm mb-4">{description}</p>
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
      </div>
    </>
  )
}

export default AgencyCard
