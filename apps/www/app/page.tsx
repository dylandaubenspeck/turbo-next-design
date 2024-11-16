'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@repo/ui/components/ui/card'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Globe, Layout } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Sidebar } from './components/sidebar-desktop'
import { Header } from './components/header'
import { useState } from 'react'
import { cn } from '@repo/ui/lib/utils'
import CharactersIcon from './icons/characters-icon'
import AvatarIcon from './icons/avatar-icon'

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="bg-background min-h-screen">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      <main className={cn(
        "flex min-h-screen flex-col p-4 md:p-6 pt-24 transition-all duration-300",
        isSidebarOpen ? "ml-64" : "ml-[73px]"
      )}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Generate Image Card */}
          <Link href="/generate">
            <Card className="bg-app-dark-lighter border-app-dark-border hover:border-app-accent-blue transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <CharactersIcon />
                  <CardTitle className="text-app-text-primary text-lg font-medium">
                    Generate Image
                  </CardTitle>
                </div>
                <CardDescription className="text-app-text-secondary">
                  Generate character images using AI
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          {/* Create Character Card */}
          <Link href="/create">
            <Card className="bg-app-dark-lighter border-app-dark-border hover:border-app-accent-blue transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <AvatarIcon />
                  <CardTitle className="text-app-text-primary text-lg font-medium">
                    Create Character
                  </CardTitle>
                </div>
                <CardDescription className="text-app-text-secondary">
                  Design your character's personality and attributes
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          {/* Gallery Card */}
          <Link href="/gallery">
            <Card className="bg-app-dark-lighter border-app-dark-border hover:border-app-accent-blue transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <FileText className="w-6 h-6" />
                  <CardTitle className="text-app-text-primary text-lg font-medium">
                    Character Gallery
                  </CardTitle>
                </div>
                <CardDescription className="text-app-text-secondary">
                  Browse and get inspired by other characters
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  )
}
