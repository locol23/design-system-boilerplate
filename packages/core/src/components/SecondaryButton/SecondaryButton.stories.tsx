import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { typography } from '../../styles'
import { SecondaryButton } from './SecondaryButton'

type Story = ComponentStoryObj<typeof SecondaryButton>

export default {
  args: {
    fontSize: typography.size.m,
    text: 'Secondary Button',
    onClick: () => alert('SecondaryButton'),
  },
  component: SecondaryButton,
  title: 'SecondaryButton',
} as ComponentMeta<typeof SecondaryButton>

export const Default = {} as Story
