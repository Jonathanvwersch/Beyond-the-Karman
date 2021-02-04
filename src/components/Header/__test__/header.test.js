import React from 'react'
import {render, screen, fireEvent, cleanup} from '@testing-library/react'
import Header from './../header'
import {toBeInTheDocument} from '@testing-library/jest-dom'


describe ('Header', () => {

    beforeEach(() => {
        render(<Header/>)
    })

    afterEach(cleanup);

    test('renders all properties', () => {
        expect(screen.getByRole('button')).toBeInTheDocument();
        expect(screen.getByTitle('Dekked logo')).toBeInTheDocument();
    })

    test('renders a logo that links to the   homepage', () => {
        expect(screen.getByTitle('Dekked logo')).toBeInTheDocument();
        expect(screen.getByTestId('logo-link')).toHaveAttribute('href','/')
    })

    test('renders a clickable hamburger button, which on click displays a menu consisting on links', () => {
        fireEvent.click(screen.getByRole('button'))
        expect(screen.getByTestId('header-links')).toBeInTheDocument();
        expect(screen.getByText('Home')).toHaveAttribute('href', '/');
        expect(screen.getByText('News')).toHaveAttribute('href', '/news');
        expect(screen.getByText('Launches')).toHaveAttribute('href', '/launches');
        expect(screen.getByText('Events')).toHaveAttribute('href', '/events');
    })
})
