// src/__test__/App.test.jsx
import { render, screen } from '@testing-library/react'
import App from '../App'
import { describe, it, expect } from 'vitest'

describe('App Component', () => {
  it('should render hello text', () => {
    render(<App />)
    expect(screen.getByText(/hello/i)).toBeInTheDocument()
  })
})
