'use client'

import {
  EnvelopeClosedIcon,
  HomeIcon,
  ExitIcon,
  GearIcon,
  PersonIcon,
  BellIcon,
  RocketIcon,
} from '@radix-ui/react-icons'
import { Avatar, AvatarFallback } from '../../ui/avatar'
import { Button } from '../../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu'
import { Separator } from '../../ui/separator'
import { usePathname, useRouter } from 'next/navigation'
import Modal from './components/modal'

type Option = {
  label: string
  active?: boolean
  icon: React.ReactNode
}

export const Sidebar = () => {
  const { push } = useRouter()
  const pathname = usePathname()

  const options: Array<Option> = [
    {
      label: 'Início',
      active: pathname.includes('/timeline'),
      icon: <HomeIcon />,
    },
    {
      label: 'Explorar',
      active: pathname.includes('/explorar'),
      icon: <RocketIcon />,
    },
    {
      label: 'Notificações',
      active: pathname.includes('/notificacoes'),
      icon: <BellIcon />,
    },
    {
      label: 'Mensagens',
      active: pathname.includes('/mensagens'),
      icon: <EnvelopeClosedIcon />,
    },
    {
      label: 'Perfil',
      active: pathname.includes('/perfil'),
      icon: <PersonIcon />,
    },
    {
      label: 'Configurações',
      active: pathname.includes('/configuracoes'),
      icon: <GearIcon />,
    },
  ]

  return (
    <div className="w-[400px] h-screen shadow-lg flex flex-col gap-10 p-5 pb-7">
      <div className="flex flex-col gap-5">
        <div
          className="text-lg font-bold text-primary"
          onClick={() => push('/')}
        >
          logo
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        {options.map((option) => (
          <Button
            key={option.label}
            variant={option.active ? 'sidebarActive' : 'ghost'}
            className="flex items-center justify-start gap-4"
            onClick={() => push(`/${option.label}`)}
          >
            {option.icon}
            {option.label}
          </Button>
        ))}
      </div>
      <Modal />
      <div className="flex flex-col gap-6 mt-auto">
        <Separator />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-3 cursor-pointer p-2">
              <Avatar>
                <AvatarFallback>J</AvatarFallback>
              </Avatar>
              <div className="flex flex-col max-w-[80%]">
                <p className="text-sm text-ellipsis overflow-hidden whitespace-nowrap">
                  Julia
                </p>
                <p className="text-sm text-zinc-400 text-ellipsis overflow-hidden whitespace-nowrap">
                  @jubsanchz
                </p>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[14vw]" align="center">
            <DropdownMenuLabel className="flex">Meu perfil</DropdownMenuLabel>
            <DropdownMenuLabel className="flex items-center gap-2 text-red-600">
              <ExitIcon />
              Sair
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
