import React from "react"
import { render, screen, fireEvent, cleanup, act } from "@testing-library/react"
import Launches from "./launches"
import "@testing-library/jest-dom"

describe("Launches", () => {
  test("succeeds in fetching data", async () => {
    const promise = Promise.resolve({
      json: () =>
        Promise.resolve(
            [{
           name: "Starship", LaunchServiceProvider: "SpaceX"
        }, {name: "New Shepard", LaunchServiceProvider: "Blue Origin"}]
    ),
    })

    global.fetch = jest.fn(() => promise)
    render(<Launches />)
    screen.debug()
    expect(screen.getByTestId("loading spinner")).toBeInTheDocument()
    await act(() => promise)
    screen.debug()
    // expect(screen.getByTestId("loading spinner")).toBeNull()
    // expect(screen.getByText(/Starhip/)).toBeInTheDocument()
    // expect(screen.getByText(/Space X/)).toBeInTheDocument()
  })
})
