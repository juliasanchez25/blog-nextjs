import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'

const navbarItems = [
  {
    location: 'Home',
    href: '/',
  },
  {
    location: 'Categorias',
    href: '/categorias',
  },
]

export default function Navbar() {
  return (
    <header className="w-full px-10 py-6 flex justify-between items-center shadow-md">
      <h2 className="text-xl font-bold cursor-pointer">logo</h2>
      <ul className="flex justify-center items-center gap-10">
        {navbarItems.map((item, index) => (
          <li className="flex" key={index}>
            <Link
              href={item.href}
              className="flex items-center text-muted-foreground transition-all ease-in-out delay-120 hover:text-black"
            >
              {item.location}
            </Link>
          </li>
        ))}
        <li>
          <Input type="text" placeholder="Pesquisar..." />
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
