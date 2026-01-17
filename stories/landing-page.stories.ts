import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { LandingPage } from '../components/landing-page2'

const meta: Meta<typeof LandingPage> = {
  title: 'LandingPage',
  component: LandingPage,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    showVendors: { control: 'boolean' },
    heroCtaText: { control: 'text' },
    hideFooter: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof LandingPage>

export const Default: Story = {
  args: {
    heroCtaText: 'Sign In',
  },
}

export const Compact: Story = {
  args: {
    heroCtaText: 'Get Started',
    hideFooter: true,
  },
}

export const MarketingFocus: Story = {
  args: {
    heroCtaText: 'Join Now',
  },
}
