import { Meta, StoryObj } from '@storybook/react'
import { typography } from '../../styles'
import { SecondaryButton } from './SecondaryButton'

const meta = {
  title: 'SecondaryButton',
  component: SecondaryButton,
} satisfies Meta<typeof SecondaryButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    fontSize: typography.size.m,
    text: 'Primary Button',
    onClick: () => alert('SecondaryButton'),
  },
}
