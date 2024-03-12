import { z } from 'zod'

export const registerSchema = z
  .object({
    name: z.string().min(1, 'Nome é obrigatório.'),
    email: z.string().email('email deve ser válido.'),
    password: z
      .string()
      .min(8, 'senha deve conter ao menos 8 caracteres.')
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$*&@#]).*$/, {
        message:
          'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.',
      }),
    confirmPassword: z.string().min(1, 'Confirmação de senha é obrigatória.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem.',
    path: ['confirmPassword'],
  })
