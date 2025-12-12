import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('Example Test', () => {
  it('should pass a basic test', () => {
    expect(1 + 1).toBe(2)
  })

  it('should render a component', () => {
    render(<div data-testid="hello">Hello World</div>)
    expect(screen.getByTestId('hello')).toHaveTextContent('Hello World')
  })
})
