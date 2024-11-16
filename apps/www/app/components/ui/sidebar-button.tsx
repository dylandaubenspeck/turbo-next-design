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
          "box-border flex justify-center items-center",
          "w-[40px] h-[40px]",
          "bg-[#0B0D0E] border border-[#474E54] rounded-[6px]",
          "hover:bg-zinc-800 transition-colors",
          isActive && "bg-zinc-800"
        )}
      >
        <span className="w-6 h-6 flex items-center justify-center">
          {icon}
        </span>
        {isOpen && (
          <span className="absolute left-12 whitespace-nowrap text-[#f2f2f2]">
            {text}
          </span>
        )}
      </div>
    </Link>
  )
}
