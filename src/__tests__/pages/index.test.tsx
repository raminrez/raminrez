import React from 'react'
import { render } from 'test-utils'
import Home from 'pages/index'

describe('Home page', () => {
  it('clicking button triggers alert', () => {
    const { getByText } = render(<Home />)
    getByText(/Get started by editing/i)
  })
})
