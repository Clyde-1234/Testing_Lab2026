import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '../components/ui/dropdown-menu'
import { Button } from '../components/ui/button'
import { User, Mail, Bell, Download, FileText, Share2, Trash2 } from 'lucide-react'

const meta: Meta<typeof DropdownMenu> = {
  title: 'UI/DropdownMenu',
  component: DropdownMenu,
}

export default meta
type Story = StoryObj<typeof DropdownMenu>

// -----------------
// Story 1: Food Categories
// -----------------
export const FoodCategories: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Food Categories</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuLabel>Vegetables</DropdownMenuLabel>
        <DropdownMenuItem>Tomatoes</DropdownMenuItem>
        <DropdownMenuItem>Carrots</DropdownMenuItem>
        <DropdownMenuItem>Peppers</DropdownMenuItem>

        <DropdownMenuLabel>Condiments</DropdownMenuLabel>
        <DropdownMenuItem>Ketchup</DropdownMenuItem>
        <DropdownMenuItem>Mayonnaise</DropdownMenuItem>
        <DropdownMenuItem>Mustard</DropdownMenuItem>

        <DropdownMenuLabel>Fruits</DropdownMenuLabel>
        <DropdownMenuItem>Apples</DropdownMenuItem>
        <DropdownMenuItem>Bananas</DropdownMenuItem>
        <DropdownMenuItem>Oranges</DropdownMenuItem>

        <DropdownMenuLabel>Dairy</DropdownMenuLabel>
        <DropdownMenuItem>Milk</DropdownMenuItem>
        <DropdownMenuItem>Cheese</DropdownMenuItem>
        <DropdownMenuItem>Yogurt</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

// -----------------
// Story 2: File Actions
// -----------------
export const FileActions: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">File Actions</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>
          <Download className="mr-2 h-4 w-4" /> Download
        </DropdownMenuItem>
        <DropdownMenuItem>
          <FileText className="mr-2 h-4 w-4" /> Rename
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Share2 className="mr-2 h-4 w-4" /> Share
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Trash2 className="mr-2 h-4 w-4" /> Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}

// -----------------
// Story 3: Website Navigation
// -----------------
export const SiteNav: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">User Menu</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        <DropdownMenuItem>
          <User className="mr-2 h-4 w-4" /> Profile
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Mail className="mr-2 h-4 w-4" /> Messages
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Bell className="mr-2 h-4 w-4" /> Notifications
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Download className="mr-2 h-4 w-4" /> Downloads
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Share2 className="mr-2 h-4 w-4" /> Share
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
