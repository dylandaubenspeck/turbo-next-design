'use client'

import { useState } from 'react'
import { Header } from '../components/header'
import { Sidebar } from '../components/sidebar-desktop'
import { Card, CardContent, CardHeader, CardTitle } from '@repo/ui/components/ui/card'
import { cn } from '@repo/ui/lib/utils'

export default function DesignSystem() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const themeColors = [
    { title: "Background", color: "bg-background", text: "text-foreground" },
    { title: "Card", color: "bg-card", text: "text-card-foreground" },
    { title: "Primary", color: "bg-primary", text: "text-primary-foreground" },
    { title: "Secondary", color: "bg-secondary", text: "text-secondary-foreground" },
    { title: "Muted", color: "bg-muted", text: "text-muted-foreground" },
    { title: "Accent", color: "bg-accent", text: "text-accent-foreground" },
    { title: "Destructive", color: "bg-destructive", text: "text-destructive-foreground" },
    { title: "Border", color: "border border-border bg-background", text: "text-foreground" },
    { title: "Chart 1", color: "bg-chart-1", text: "text-foreground" },
    { title: "Chart 2", color: "bg-chart-2", text: "text-foreground" },
    { title: "Chart 3", color: "bg-chart-3", text: "text-foreground" },
    { title: "Chart 4", color: "bg-chart-4", text: "text-foreground" },
    { title: "Chart 5", color: "bg-chart-5", text: "text-foreground" },
  ]

  return (
    <div className="bg-background min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <main className={cn(
        "flex min-h-screen flex-col p-4 md:p-6 pt-24 transition-all duration-300",
        isSidebarOpen ? "ml-64" : "ml-[73px]"
      )}>
        {/* Colors Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Theme Colors</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {themeColors.map((item) => (
              <ColorCard
                key={item.title}
                title={item.title}
                color={item.color}
                textColor={item.text}
              />
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Typography</h2>
          <Card className="bg-card border-border">
            <CardContent className="space-y-4 p-6">
              <div>
                <h1 className="text-4xl font-bold text-card-foreground">Heading 1</h1>
                <p className="text-sm text-muted-foreground">text-4xl font-bold</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-card-foreground">Heading 2</h2>
                <p className="text-sm text-muted-foreground">text-3xl font-semibold</p>
              </div>
              <div>
                <h3 className="text-2xl font-medium text-card-foreground">Heading 3</h3>
                <p className="text-sm text-muted-foreground">text-2xl font-medium</p>
              </div>
              <div>
                <p className="text-base text-card-foreground">Base Text</p>
                <p className="text-sm text-muted-foreground">text-base</p>
              </div>
              <div>
                <p className="text-sm text-card-foreground">Small Text</p>
                <p className="text-sm text-muted-foreground">text-sm</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Buttons</h2>
          <Card className="bg-card border-border">
            <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4 p-6">
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                Primary
              </button>
              <button className="bg-secondary text-secondary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                Secondary
              </button>
              <button className="bg-accent text-accent-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                Accent
              </button>
              <button className="bg-muted text-muted-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                Muted
              </button>
              <button className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                Destructive
              </button>
            </CardContent>
          </Card>
        </section>

        {/* Border Radius Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Border Radius</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <RadiusCard title="Large" radius="rounded-lg" />
            <RadiusCard title="Medium" radius="rounded-md" />
            <RadiusCard title="Small" radius="rounded-sm" />
          </div>
        </section>
      </main>
    </div>
  )
}

// Helper Components
function ColorCard({ title, color, textColor }: { title: string; color: string; textColor: string }) {
  return (
    <div className="flex flex-col">
      <div className={`h-24 ${color} rounded-md border border-border`} />
      <p className={`mt-2 text-sm font-medium ${textColor}`}>{title}</p>
      <p className="text-sm text-muted-foreground">{color}</p>
    </div>
  )
}

function RadiusCard({ title, radius }: { title: string; radius: string }) {
  return (
    <div className="flex flex-col">
      <div className={`h-24 bg-card ${radius} border border-border`} />
      <p className="mt-2 text-sm font-medium text-foreground">{title}</p>
      <p className="text-sm text-muted-foreground">{radius}</p>
    </div>
  )
}
