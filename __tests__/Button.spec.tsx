import { Button } from '@/components/atoms'
import { render, screen } from '@testing-library/react'

describe('<Button/>', () => {
  beforeEach(() => {
    render(<Button label='Button' />)
  })

  it('should have correclty label button', () => {
    const $button = screen.getByRole('button')
    expect($button).toBeInTheDocument()
  })
})
