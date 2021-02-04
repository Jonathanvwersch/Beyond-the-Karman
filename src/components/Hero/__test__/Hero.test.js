import React from 'react'
import {render, screen, fireEvent, act} from '@testing-library/react'
import Hero from './../Hero'
import '@testing-library/jest-dom'


describe("Hero", () => {
  test("renders all properties", () => {
    render(<Hero />)
    expect(screen.getByText('Your home for everything space related')).toBeInTheDocument();
    expect(screen.getByText('Get the latest space news, discover upcoming launches, and more')).toBeInTheDocument()
    
  })
})