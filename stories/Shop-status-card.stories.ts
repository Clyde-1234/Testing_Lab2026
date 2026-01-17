import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { ShopStatusCard } from '../components/vendor/shop-status-card'
import "../styles/globals.css";

const meta = {
  title: 'ShopStatusCard',
  component: ShopStatusCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    openCreateStallModal: fn(),
    onStatusChange: fn(),
  }
} satisfies Meta<typeof ShopStatusCard>;

export default meta;

type Story = StoryObj<typeof ShopStatusCard>;

export const Primary: Story = {
  args: {
    openCreateStallModal: fn(),
    onStatusChange: fn(),
  },
};  

export const Active: Story = {
  args: {
    openCreateStallModal: fn(),
    onStatusChange: fn(),
    shopStatus: "active",
  },
};  

export const Pending: Story = {
  args: {
    openCreateStallModal: fn(),
    onStatusChange: fn(),
    shopStatus: "pending",
  },
};