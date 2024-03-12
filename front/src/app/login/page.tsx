'use client'
import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { EnterIcon } from '@radix-ui/react-icons'
import { loginSchema } from './validation'
import { zodResolver } from '@hookform/resolvers/zod'

type UserLoginFormData = {
  email: string
  password: string
}

export default function Login() {
  const submit = (values: UserLoginFormData) => {
    console.log('values', values)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: 'all',
  })

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <Card className="w-[80%] lg:w-[25rem]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Entre com seu e-mail e senha.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(submit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  placeholder="exemplo@gmail.com"
                  type="email"
                  {...register('email')}
                  error={errors.email?.message}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  placeholder="*******"
                  type="password"
                  {...register('password')}
                  error={errors.password?.message}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <Link className="ml-auto inline-block text-sm underline" href="#">
          Esqueci a senha
        </Link>
        <Button className="w-full">
          <EnterIcon />
          Entrar
        </Button>
        <div className="mt-4 text-center text-sm">
          Ainda não possui conta?{' '}
          <Link className="underline" href="/cadastro">
            Cadastre-se
          </Link>
        </div>
      </Card>
    </section>
  )
}
