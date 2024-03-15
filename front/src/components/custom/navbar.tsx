'use client'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function Navbar() {
  return (
    <header className="w-full flex justify-between px-10 py-6 shadow-md">
      <h2 className="self-center text-xl font-bold cursor-pointer">logo</h2>
      <ul className="flex items-center gap-6">
        <li>
          <Link href={'/login'}>
            <Button className="w-36">Entrar</Button>
          </Link>
        </li>
        <li>
          <Link href={'/cadastrar'}>
            <Button className="w-36" variant="outline">
              Criar conta
            </Button>
          </Link>
        </li>
      </ul>
    </header>
  )
}
