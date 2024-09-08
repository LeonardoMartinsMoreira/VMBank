import { InputWithFormik } from '@/src/components/InputWithFormik'
import { Formik } from 'formik'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { useLoginController } from './useLoginController'
import { SignInSchema } from '../AuthSchemas'

const initialValues = { email: '', password: '' }

export default function LoginForm() {
  const { mutate } = useLoginController()

  const handleLogin = (values: typeof initialValues) => {
    mutate({ ...values })
  }

  return (
    <Formik
      validationSchema={toFormikValidationSchema(SignInSchema)}
      initialValues={initialValues}
      onSubmit={handleLogin}
    >
      {({ handleSubmit }) => {
        return (
          <View className="flex-1 pt-24 gap-y-4">
            <View>
              <InputWithFormik
                name="email"
                label="Email"
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
              <TouchableOpacity className="bg-lime-1000 w-full" onPress={() => handleSubmit()}>
                <Text>Entrar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }}
    </Formik>
  )
}
