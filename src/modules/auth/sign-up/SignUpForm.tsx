import { InputWithFormik } from '@/src/components/InputWithFormik'
import { Formik } from 'formik'
import { Text, TouchableOpacity, View } from 'react-native'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { useSignUpController } from './useLoginController'
import { SignUpSchema } from '../AuthSchemas'

const initialValues = { email: '', password: '', name: '' }

export function SignUpForm() {
  const { mutate } = useSignUpController()

  const handleSignUp = (values: typeof initialValues) => {
    mutate(values)
  }

  return (
    <Formik
      validationSchema={toFormikValidationSchema(SignUpSchema)}
      initialValues={initialValues}
      onSubmit={handleSignUp}
    >
      {({ handleSubmit }) => {
        return (
          <View className="flex-1 gap-y-4">
            <View>
              <InputWithFormik
                name="name"
                label="Usuário"
                placeholder="Usuário"
                className="w-full bg-zinc-900 py-2 placeholder-white border-lime-1000 border"
              />
            </View>

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
