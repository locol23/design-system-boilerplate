import { Meta, StoryObj } from '@storybook/react'
import { typography } from '../../styles'
import { PrimaryButton } from './PrimaryButton'

const meta = {
  title: 'PrimaryButton',
  component: PrimaryButton,
} satisfies Meta<typeof PrimaryButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    fontSize: typography.size.m,
    text: 'Primary Button',
    onClick: () => alert('PrimaryButton'),
  },
}
