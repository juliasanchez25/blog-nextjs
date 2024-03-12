'use client'
import { useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Button } from '../ui/button'

type Item = {
  label: string
  active?: boolean
}

export default function Navbar() {
  const searchRef = useRef<HTMLInputElement>(null)
  const route = useRouter()
  const pathname = usePathname()

  const items: Array<Item> = [
    {
      label: 'Home',
      active: pathname.includes('/'),
    },
    {
      label: 'Categorias',
      active: pathname.includes('/categorias'),
    },
  ]

  return (
    <header className="w-full px-10 py-6 flex justify-between items-center shadow-md">
      <h2 className="text-xl font-bold cursor-pointer">logo</h2>
      <ul className="flex justify-center items-center gap-10">
        {items.map((item) => (
          <Button
            key={item.label}
            variant={item.active ? 'sidebarActive' : 'ghost'}
            className="flex items-center justify-start gap-4"
            onClick={() => route.push(`/${item.label}`)}
          >
            {item.label}
          </Button>
        ))}
        <li>
          <Input type="text" ref={searchRef} placeholder="Pesquisar..." />
        </li>
      </ul>
      <Link href="/perfil">
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </Link>
    </header>
  )
}
