import Link from "next/link"
import { cn } from "@repo/ui/lib/utils"

interface SidebarButtonProps {
  icon: React.ReactNode
  text: string
  href: string
  isOpen: boolean
  isActive?: boolean
}

export function SidebarButton({ icon, text, href, isOpen, isActive }: SidebarButtonProps) {
  return (
    <Link href={href} className="w-full">
      <div
        role="button"
        className={cn(
          "box-border flex items-center transition-all duration-300",
          "h-[40px] rounded-[6px] px-3",
          "bg-card border border-border",
          "hover:bg-secondary",
          isOpen ? "w-[200px]" : "w-[40px] justify-center",
          isActive && "bg-secondary"
        )}
      >
        <span className="w-6 h-6 flex items-center justify-center text-muted-foreground">
          {icon}
        </span>
        {isOpen && (
          <span className="ml-3 text-base font-['Bricolage_Grotesque'] text-foreground">
            {text}
          </span>
        )}
      </div>
    </Link>
  )
}
