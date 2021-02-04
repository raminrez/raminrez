import React from 'react'
import { render, axe } from 'test-utils'
import Home from 'src/pages/index'

describe('Home page', () => {
  it('clicking button triggers alert', async () => {
    const { getByText } = render(<Home />)
    const text = getByText(/front end/i)
    const ax = await axe(text)
    expect(ax).toHaveNoViolations()
    expect(text).toBeInTheDocument()
  })
})
