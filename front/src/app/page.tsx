import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <main className="p-12 flex flex-col items-center justify-center lg:p-24 gap-6">
      <h1 className="text-3xl text-center font-bold lg:text-5xl lg:text-left">
        Explore histórias. Inspire-se em um único lugar.
      </h1>
      <p className="text-md text-center lg:text-2xl lg:text-left">
        Faça parte da newsletter e mantenha-se sempre atualizado.
      </p>
      <div className="flex">
        <Input
          className="w-[300px]"
          type="text"
          placeholder="Informe seu e-mail"
        />
        <Button>Inscrever-se</Button>
      </div>
    </main>
  )
}
