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
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

// Food Categories - selected category appears in the trigger button
export const FoodCategories: Story = {
  name: 'Food Categories',
  render: () => {
    const [selected, setSelected] = useState<string>('')

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '20px', // noticeably higher than center
        }}
      >
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="px-4 py-2 border rounded-md bg-white w-48 text-left">
              {selected || 'Select Category'}
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

// Actions Menu - simple dropdown, no internal labels
export const ActionsMenu: Story = {
  name: 'Actions Menu',
  render: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button className="px-4 py-2 border rounded-md bg-white w-48 text-left">
            Actions
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {['Download', 'Rename', 'Share'].map((action) => (
            <DropdownMenuItem key={action}>{action}</DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}

// Website Menu - icons visible, added gear and help icons
export const WebsiteMenu: Story = {
  name: 'Website Menu',
  render: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
      }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button className="px-4 py-2 border rounded-md bg-white w-48 text-left">
            Menu
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4 inline-block" /> Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Mail className="mr-2 h-4 w-4 inline-block" /> Mail
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Bell className="mr-2 h-4 w-4 inline-block" /> Notifications
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4 inline-block" /> Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <HelpCircle className="mr-2 h-4 w-4 inline-block" /> Help
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  ),
}
