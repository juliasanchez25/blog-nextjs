import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Pencil1Icon,
  Link2Icon,
  DrawingPinFilledIcon,
  ImageIcon,
} from '@radix-ui/react-icons'
import { Input } from '@/components/ui/input'

export default function Modal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center gap-2">
          <Pencil1Icon />
          Postar
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="grid gap-4 py-4">
          <div>
            <input
              id="title"
              placeholder="Título"
              className="text-xl font-bold outline-none"
            />
          </div>
          <div>
            <Input id="content" placeholder="Escreva qualquer coisa!" />
          </div>
        </div>
        <div className="flex gap-3 cursor-pointer text-primary">
          <ImageIcon />
          <DrawingPinFilledIcon />
          <Link2Icon />
        </div>
        <DialogFooter>
          <Button type="submit">Postar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
