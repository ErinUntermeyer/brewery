import React from 'react'
import Welcome from './Welcome'
import { MemoryRouter } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Welcome Component', () => {

	it('Should display a welcome message', () => {
		render(
			<MemoryRouter>
				<Welcome
					firstLoad={true}
					closeWelcome={jest.fn()}
				/>
			</MemoryRouter>
		)
		const title = screen.getByRole('heading', { name: /welcome to/i })
		const message = screen.getByText(/are you an avid beer lover?/i)
		expect(title).toBeInTheDocument()
		expect(message).toBeInTheDocument()
	})
	
})