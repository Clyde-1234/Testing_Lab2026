import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React, { useState } from 'react'
import { userEvent, screen } from 'storybook/test'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from '../components/ui/dropdown-menu'
import { User, Mail, Bell, Settings, HelpCircle } from 'lucide-react'

const meta: Meta<typeof DropdownMenu> = {
  title: 'DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A reusable dropdown menu built on top of the UI DropdownMenu primitives. It supports category selection, action menus, and website-style navigation menus.',
      },
    },
  },
  argTypes: {
    buttonLabel: {
      description: 'Text shown on the dropdown trigger button',
      control: 'text',
    },
    defaultCategory: {
      description: 'Preselected category for the Food Categories menu',
      control: { type: 'select' },
      options: ['None', 'Vegetables', 'Condiments', 'Meat & Fish', 'Fruits', 'Dairy'],
    },
    showIcons: {
      description: 'Whether icons should be displayed in the Website Menu',
      control: 'boolean',
    },
    actions: {
      description: 'List of actions used in the Actions Menu',
      control: 'object',
    },
  },
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

// -------------------
// Food Categories
// -------------------
export const FoodCategories: Story = {
  name: 'Food Categories',
  args: {
    buttonLabel: 'Select Category',
    defaultCategory: 'None',
  },
  render: (args) => {
    const [selected, setSelected] = useState(
      args.defaultCategory !== 'None' ? args.defaultCategory : ''
    )

    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
        <DropdownMenu>
          <DropdownMenuTrigger className="px-4 py-2 border rounded-md bg-white w-48 text-left">
            {selected || args.buttonLabel}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Food Categories</DropdownMenuLabel>
            {['Vegetables', 'Condiments', 'Meat & Fish', 'Fruits', 'Dairy'].map(
              (cat) => (
                <DropdownMenuItem key={cat} onClick={() => setSelected(cat)}>
                  {cat}
                </DropdownMenuItem>
              )
            )}
          </DropdownMenuContent>
        </DropdownMenu>

      </div>
    )
  },
}

// -------------------
// Actions Menu
// -------------------
export const ActionsMenu: Story = {
  name: 'Actions Menu',
  args: {
    buttonLabel: 'Actions',
    actions: ['Download', 'Rename', 'Share'],
  },
  render: (args) => (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button className="px-4 py-2 border rounded-md bg-white w-48 text-left">
            {args.buttonLabel}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {args.actions?.map((action: string) => (
            <DropdownMenuItem key={action}>{action}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

// -------------------
// Website Menu
// -------------------
export const WebsiteMenu: Story = {
  name: 'Website Menu',
  args: {
    buttonLabel: 'Menu',
    showIcons: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}>
      <DropdownMenu>
        <DropdownMenuTrigger className="px-4 py-2 border rounded-md bg-white w-48 text-left">
          {selected || args.buttonLabel}
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem>
            {args.showIcons && <User className="mr-2 h-4 w-4 inline-block" />} Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            {args.showIcons && <Mail className="mr-2 h-4 w-4 inline-block" />} Mail
          </DropdownMenuItem>
          <DropdownMenuItem>
            {args.showIcons && <Bell className="mr-2 h-4 w-4 inline-block" />} Notifications
          </DropdownMenuItem>
          <DropdownMenuItem>
            {args.showIcons && <Settings className="mr-2 h-4 w-4 inline-block" />} Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            {args.showIcons && <HelpCircle className="mr-2 h-4 w-4 inline-block" />} Help
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

// -------------------
// Food Categories (Play)
// -------------------
export const FoodCategoriesPlay: Story = {
  name: 'Food Categories (Play)',
  args: {
    buttonLabel: 'Select Category',
    defaultCategory: 'None',
  },
  render: FoodCategories.render, // reuse the same render as the normal FoodCategories story
  play: async () => {
    const user = userEvent.setup()

    // Select the button (only one now, because we removed the inner <button>)
    const button = await screen.findByRole('button', { name: 'Select Category' })
    await user.click(button)

    // Small delay for portal animation (optional, ensures dropdown is visible)
    await new Promise((r) => setTimeout(r, 200))

    // Find and click "Vegetables"
    const vegetables = await screen.findByText('Vegetables')
    await user.click(vegetables)
  },
}