import CharactersIcon from '../icons/characters-icon'
import AvatarIcon from '../icons/avatar-icon'
import { FileText } from 'lucide-react'

export const navItems = [
  {
    title: 'Generate Image',
    href: '/generate',
    icon: CharactersIcon,
  },
  {
    title: 'Create Character',
    href: '/create',
    icon: AvatarIcon,
  },
  {
    title: 'Gallery',
    href: '/gallery',
    icon: FileText,
  },
]
