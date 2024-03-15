import { Input } from '../ui/input'
import { useRef } from 'react'

export const Aside = () => {
  const searchRef = useRef<HTMLInputElement>(null)

  return (
    <div className="w-[400px] h-screen shadow-lg flex flex-col gap-10 p-5 pb-7">
      <div className="flex flex-col gap-5">
        <Input type="text" placeholder="Pesquisar..." ref={searchRef} />
      </div>
    </div>
  )
}
