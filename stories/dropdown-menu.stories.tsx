import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React, { useState } from 'react'
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
  parameters: { layout: 'centered' },
  argTypes: {
    buttonLabel: { control: 'text' },
    defaultCategory: { control: 'text' },
    showIcons: { control: 'boolean' },
    actions: { control: 'object' },
  },
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

// -------------------
// Food Categories Story
// -------------------
export const FoodCategories: Story = {
  name: 'Food Categories',
  args: {
    buttonLabel: 'Select Category',
    defaultCategory: 'None',
  },
  render: (args) => {
    const [selected, setSelected] = useState(
      args.defaultCategory && args.defaultCategory !== 'None'
        ? args.defaultCategory
        : ''
    )

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '15px', // slightly higher than center
        }}
      >
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="px-4 py-2 border rounded-md bg-white w-48 text-left">
              {selected || args.buttonLabel}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Food Categories</DropdownMenuLabel>
            {['Vegetables', 'Condiments', 'Meat & Fish', 'Fruits', 'Dairy'].map(
              (cat) => (
                <DropdownMenuItem
                  key={cat}
                  onClick={() => setSelected(cat)}
                >
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
// Actions Menu Story
// -------------------
export const ActionsMenu: Story = {
  name: 'Actions Menu',
  args: {
    buttonLabel: 'Actions',
    actions: ['Download', 'Rename', 'Share'],
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px',
      }}
    >
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
// Website Menu Story
// -------------------
export const WebsiteMenu: Story = {
  name: 'Website Menu',
  args: {
    buttonLabel: 'Menu',
    showIcons: true,
  },
  render: (args) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px',
      }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button className="px-4 py-2 border rounded-md bg-white w-48 text-left">
            {args.buttonLabel}
          </button>
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
