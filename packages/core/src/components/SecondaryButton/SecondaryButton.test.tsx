import { composeStories } from '@storybook/react'
import { render, screen } from '@testing-library/react'
import React from 'react'
import * as stories from './SecondaryButton.stories'

describe('PrimaryButton', () => {
  const { Default } = composeStories(stories)

  test('should render primary button with default args', () => {
    render(<Default />)

    const buttonElement = screen.getAllByText('Primary Button')

    expect(buttonElement[0]).not.toBeNull()
  })
})
