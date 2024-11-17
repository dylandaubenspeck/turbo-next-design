import { cn } from "@repo/ui/lib/utils"
import { SidebarButton } from "./ui/sidebar-button"
import HomeIcon from "../icons/home-icon"
import ChatIcon from "../icons/chat-icon"
import GalleryIcon from "../icons/gallery-icon"
import AvatarIcon from "../icons/avatar-icon"
import PremiumIcon from "../icons/premium-icon"
import SettingsIcon from "../icons/settings-icon"
import ContactIcon from "../icons/contact-icon"

interface SidebarProps {
  isOpen: boolean
}

// Navigation links configuration
const navigationLinks = [
  {
    text: "Home",
    href: "/",
    icon: <HomeIcon />,
  },
  {
    text: "Chat",
    href: "/chat",
    icon: <ChatIcon />,
  },
  {
    text: "Gallery",
    href: "/gallery",
    icon: <GalleryIcon />,
  },
  {
    text: "Avatar",
    href: "/avatar",
    icon: <AvatarIcon />,
  },
  {
    text: "Premium",
    href: "/premium",
    icon: <PremiumIcon />,
  },
]

// Settings and Contact links
const bottomLinks = [
  {
    text: "Settings",
    href: "/settings",
    icon: <SettingsIcon />,
  },
  {
    text: "Contact",
    href: "/contact",
    icon: <ContactIcon />,
  },
]

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed top-16 left-0 z-50",
        "h-[calc(100vh-64px)] transition-all duration-300",
        "bg-[#0A0A0A] border-r border-solid border-[#474E54]",
        isOpen ? "w-64" : "w-[73px]"
      )}
    >
      <div className="flex flex-col h-full pt-4 px-4 pb-4">
        <nav className="flex-1">
          <div className="h-4"></div>
          <div className="flex flex-col space-y-3">
            {navigationLinks.map((link) => (
              <SidebarButton
                key={link.href}
                icon={link.icon}
                text={link.text}
                href={link.href}
                isOpen={isOpen}
              />
            ))}
            <div className="my-1">
              <div className="w-[40px] h-[1px] bg-[#474E54]" />
            </div>
            {bottomLinks.map((link) => (
              <SidebarButton
                key={link.href}
                icon={link.icon}
                text={link.text}
                href={link.href}
                isOpen={isOpen}
              />
            ))}
          </div>
        </nav>
      </div>
    </aside>
  )
}
