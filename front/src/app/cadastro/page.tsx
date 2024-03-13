'use client'
import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from './validation'
import { PersonIcon } from '@radix-ui/react-icons'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

type UserRegisterFormData = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export default function Register() {
  const registerUser = useMutation<unknown, unknown, UserRegisterFormData>({
    mutationKey: ['register'],
    mutationFn: async (variables) => {
      const result = await axios.post(`http://localhost:4000/cadastro`, {
        body: variables,
      })
      console.log(result)
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'all',
  })

  const submit = handleSubmit((values) => {
    console.log('values', values)
    registerUser.mutate(values)
  })

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <Card className="p-4 w-[80%] lg:w-[25rem]">
        <CardHeader>
          <CardTitle>Cadastro</CardTitle>
          <CardDescription>Crie sua conta, fácil e rápido.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={submit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  placeholder="exemplo@gmail.com"
                  type="email"
                  {...register('email')}
                  error={errors.email?.message}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="password">Senha</Label>
                <Input
                  id="password"
                  placeholder="*******"
                  type="password"
                  {...register('password')}
                  error={errors.password?.message}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Label htmlFor="confirmPassword">Confirmar senha</Label>
                <Input
                  id="confirmPassword"
                  placeholder="*******"
                  type="confirmPassword"
                  {...register('confirmPassword')}
                  error={errors.confirmPassword?.message}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link className="self-start text-sm underline" href="#">
            Esqueci a senha
          </Link>
          <Button type="submit" className="w-full gap-2">
            <PersonIcon />
            Cadastrar
          </Button>
          <div className="self-start mt-4 text-sm">
            Já possui conta?{' '}
            <Link className="underline" href="/login">
              Fazer login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
