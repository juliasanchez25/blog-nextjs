import { z } from 'zod'

const passwordValidation =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

export const registerSchema = z
  .object({
    name: z.string().min(1, 'Nome é obrigatório.'),
    email: z.string().email('Email deve ser válido.'),
    password: z.string().min(8, 'Senha deve conter ao menos 8 caracteres.'),
    /*       .regex(passwordValidation, {
        message:
          'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.',
      }), */
    confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatória.'),
  })
  .refine(
    (data) => {
      if (data.password && data.confirmPassword) {
        return data.password === data.confirmPassword
      }
      return true
    },
    {
      message: 'as senhas não coincidem.',
      path: ['confirmPassword'],
    },
  )
