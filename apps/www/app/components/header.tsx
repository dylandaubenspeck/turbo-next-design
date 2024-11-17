import Link from "next/link"
import MenuIcon from "../icons/menu-icon"

interface HeaderProps {
  toggleSidebar: () => void
}

export function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-zinc-950 border-b border-[rgba(255,255,255,0.15)] z-20">
      <div className="flex items-center h-full px-4 max-w-[1920px] mx-auto">
        <button
          onClick={toggleSidebar}
          className="p-2 hover:bg-zinc-800 rounded-md mr-4 transition-colors"
        >
          <MenuIcon />
        </button>
        <Link href="/" className="text-white text-2xl font-['Bricolage_Grotesque'] font-bold">
          deedee
        </Link>
      </div>
    </header>
  )
}