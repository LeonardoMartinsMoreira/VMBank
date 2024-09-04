import { InputWithFormik } from '@/src/components/InputWithFormik'
import { useToastState, useToastController } from '@tamagui/toast'
import { Formik } from 'formik'
import { View } from 'react-native'
import { Button } from 'tamagui'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'

const LoginSchema = z.object({
  email: z.string({ required_error: 'Insira um email' }).email({ message: 'Insira um email válido' }),
  password: z
    .string({ required_error: 'Insira uma senha' })
    .min(8, { message: 'Sua senha deve conter no mínimo 8 caracteres' }),
})

const initialValues = { email: '', password: '' }

export default function LoginForm() {
  const handleLogin = (values: typeof initialValues) => console.log(values)

  return (
    <Formik
      validationSchema={toFormikValidationSchema(LoginSchema)}
      initialValues={initialValues}
      onSubmit={handleLogin}
    >
      {({ handleSubmit }) => {
        return (
          <View className="flex-1 pt-24 gap-y-4">
            <View>
              <InputWithFormik
                name="email"
                label="Usuário"
                placeholder="Email"
                className="w-full bg-zinc-900 py-2 placeholder-white border-lime-1000 border"
              />
            </View>

            <View>
              <InputWithFormik
                name="password"
                label="Senha"
                placeholder="Senha"
                className="w-full bg-zinc-900 py-2 placeholder-white border-lime-1000 border"
              />
            </View>

            <View>
              <Button className="bg-lime-1000 w-full" onPress={() => handleSubmit()}>
                Entrar
              </Button>
            </View>
          </View>
        )
      }}
    </Formik>
  )
}
