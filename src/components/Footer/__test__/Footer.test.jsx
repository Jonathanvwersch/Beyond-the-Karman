import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import Launches from "../../../pages/launches"
import Events from "../../../pages/events"
import News from "../../../pages/news"
import Footer from "./../Footer"
import "@testing-library/jest-dom"

describe("Footer", () => {
  afterEach(() => {
    cleanup
  })

  test("Check that footer contains correct text", () => {
    render(<Footer />)
    expect(
      screen.getByText(`© ${new Date().getFullYear()} Beyond the Karman`)
    ).toBeInTheDocument()
  })

  test("Check that footer is rendered on launch page", () => {
    render(<Launches />)
    expect(screen.getByTestId("footer")).toBeInTheDocument()
  })

  test("Check that footer is rendered on launch page", () => {
    render(<Events />)
    expect(screen.getByTestId("footer")).toBeInTheDocument()
  })

  test("Check that footer is rendered on launch page", () => {
    render(<News />)
    expect(screen.getByTestId("footer")).toBeInTheDocument()
  })
})
