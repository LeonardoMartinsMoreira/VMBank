import { z } from 'zod'

export const SignInSchema = z.object({
  email: z
    .string({ required_error: 'É necessário inserir um email' })
    .email({ message: 'Insira um email válido' }),
  password: z
    .string({ required_error: 'É necessário inserir uma senha' })
    .min(8, { message: 'Sua senha deve conter no mínimo 8 caracteres' }),
})

export const SignUpSchema = z.object({
  name: z.string({ required_error: 'É necessário inserir um nome' }),
  email: z
    .string({ required_error: 'É necessário inserir um email' })
    .email({ message: 'Insira um email válido' }),
  password: z
    .string({ required_error: 'É necessário inserir uma senha' })
    .min(8, { message: 'Sua senha deve conter no mínimo 8 caracteres' }),
})

export const RecoveryPassword = z.object({
  email: z
    .string({ required_error: 'É necessário inserir um email' })
    .email({ message: 'Insira um email válido' }),
})

export type TSignInPayload = z.infer<typeof SignInSchema>
export type TSignUpPayload = z.infer<typeof SignUpSchema>
export type TRecoveryPasswordPayload = z.infer<typeof RecoveryPassword>
