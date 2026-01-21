import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProductManagementCard } from '../components/vendor/product-management-card';

const meta: Meta<typeof ProductManagementCard> = {
  title: 'ProductManagementCard',
  component: ProductManagementCard,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    stats: {
      description: 'Product statistics (total, active, inactive, low_stock)',
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductManagementCard>;

// -------------------
// Normal Stats
// -------------------
export const Default: Story = {
  name: 'Default Stats',
  args: {
    stats: { total: 18, active: 16, inactive: 2, low_stock: 3 },
  },
  render: (args) => <ProductManagementCard {...args} />,
};

// -------------------
// Low Stock Alert
// -------------------
export const LowStockAlert: Story = {
  name: 'Low Stock Alert',
  args: {
    stats: { total: 10, active: 5, inactive: 3, low_stock: 7 },
  },
  render: (args) => <ProductManagementCard {...args} />,
};

// -------------------
// All Inactive
// -------------------
export const AllInactive: Story = {
  name: 'All Inactive Products',
  args: {
    stats: { total: 12, active: 0, inactive: 12, low_stock: 0 },
  },
  render: (args) => <ProductManagementCard {...args} />,
};
