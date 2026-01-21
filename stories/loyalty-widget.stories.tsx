import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import React from 'react'
import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Gift, Zap } from 'lucide-react'

const meta: Meta<typeof Card> = {
  title: 'LoyaltyWidget',
  component: Card,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    size: {
      description: 'Overall widget size',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    points: {
      description: 'Current points of the member',
      control: 'number',
    },
    pointCap: {
      description: 'Points required for the next tier',
      control: 'number',
    },
    showProgress: {
      description: 'Toggle visibility of the progress bar',
      control: 'boolean',
    },
    fontSize: {
      description: 'Font size in pixels',
      control: { type: 'number', min: 10, max: 36 },
      defaultValue: 14,
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

interface LoyaltyArgs {
  size: 'small' | 'medium' | 'large'
  points: number
  pointCap: number
  showProgress: boolean
  fontSize: number
}

// -------------------
// Bronze Member Story
// -------------------
export const Bronze: Story = {
  name: 'Bronze Member',
  args: {
    size: 'medium',
    points: 350,
    pointCap: 500,
    showProgress: true,
    fontSize: 14,
  },
  render: (args: LoyaltyArgs) => {
    const sizeClasses = {
      small: 'w-64 p-4',
      medium: 'w-80 p-6',
      large: 'w-96 p-8',
    }

    const progressPercent = (args.points / args.pointCap) * 100

    return (
      <Card
        className={`bg-linear-to-r from-amber-600 to-amber-700 text-white ${sizeClasses[args.size]}`}
        style={{ fontSize: `${args.fontSize}px` }}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <h3 className="font-bold">Suki Rewards</h3>
            </div>
            <p className="mt-1 opacity-90">Bronze Member</p>
          </div>
          <Gift className="h-6 w-6" />
        </div>

        {args.showProgress && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span>Points</span>
              <span className="font-bold">{args.points}</span>
            </div>
            <Progress value={progressPercent} className="mt-2" />
            <p className="mt-1 text-xs opacity-90">
              {args.pointCap - args.points} points to next tier
            </p>
          </div>
        )}
      </Card>
    )
  },
}

// -------------------
// Silver Member Story
// -------------------
export const Silver: Story = {
  name: 'Silver Member',
  args: {
    size: 'medium',
    points: 800,
    pointCap: 1000,
    showProgress: true,
    fontSize: 14,
  },
  render: (args: LoyaltyArgs) => {
    const sizeClasses = { small: 'w-64 p-4', medium: 'w-80 p-6', large: 'w-96 p-8' }
    const progressPercent = (args.points / args.pointCap) * 100

    return (
      <Card
        className={`bg-linear-to-r from-slate-400 to-slate-500 text-white ${sizeClasses[args.size]}`}
        style={{ fontSize: `${args.fontSize}px` }}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <h3 className="font-bold">Suki Rewards</h3>
            </div>
            <p className="mt-1 opacity-90">Silver Member</p>
          </div>
          <Gift className="h-6 w-6" />
        </div>

        {args.showProgress && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span>Points</span>
              <span className="font-bold">{args.points}</span>
            </div>
            <Progress value={progressPercent} className="mt-2" />
            <p className="mt-1 text-xs opacity-90">
              {args.pointCap - args.points} points to next tier
            </p>
          </div>
        )}
      </Card>
    )
  },
}

// -------------------
// Gold Member Story
// -------------------
export const Gold: Story = {
  name: 'Gold Member',
  args: {
    size: 'medium',
    points: 1800,
    pointCap: 2000,
    showProgress: true,
    fontSize: 14,
  },
  render: (args: LoyaltyArgs) => {
    const sizeClasses = { small: 'w-64 p-4', medium: 'w-80 p-6', large: 'w-96 p-8' }
    const progressPercent = (args.points / args.pointCap) * 100

    return (
      <Card
        className={`bg-linear-to-r from-yellow-400 to-yellow-500 text-white ${sizeClasses[args.size]}`}
        style={{ fontSize: `${args.fontSize}px` }}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              <h3 className="font-bold">Suki Rewards</h3>
            </div>
            <p className="mt-1 opacity-90">Gold Member</p>
          </div>
          <Gift className="h-6 w-6" />
        </div>

        {args.showProgress && (
          <div className="mt-4">
            <div className="flex items-center justify-between text-sm">
              <span>Points</span>
              <span className="font-bold">{args.points}</span>
            </div>
            <Progress value={progressPercent} className="mt-2" />
            <p className="mt-1 text-xs opacity-90">
              {args.pointCap - args.points} points to next tier
            </p>
          </div>
        )}
      </Card>
    )
  },
}
