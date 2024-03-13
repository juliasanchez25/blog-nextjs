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
import { EnterIcon } from '@radix-ui/react-icons'
import { loginSchema } from './validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

type UserLoginFormData = {
  email: string
  password: string
}

export default function Login() {
  const login = useMutation<unknown, unknown, UserLoginFormData>({
    mutationKey: ['login'],
    mutationFn: async (variables) => {
      const result = await axios.post(`http://localhost:4000/login`, {
        body: variables,
      })
      console.log(result)
    },
  })

  const submit = (values: UserLoginFormData) => {
    console.log('values', values)
    login.mutate(values)
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
      <Card className="p-4 w-[80%] lg:w-[25rem]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Entre com seu e-mail e senha.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(submit)}>
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
            </div>
            <Button type="submit" className="w-full gap-2">
              <EnterIcon />
              Entrar
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Link className="self-start text-sm underline" href="#">
            Esqueci a senha
          </Link>

          <div className="self-start mt-4 text-sm">
            Ainda não possui conta?{' '}
            <Link className="underline" href="/cadastro">
              Cadastre-se
            </Link>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}
