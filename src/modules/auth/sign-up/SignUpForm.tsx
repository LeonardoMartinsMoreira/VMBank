import { InputWithFormik } from '@/src/components/InputWithFormik'
import { Formik } from 'formik'
import { View } from 'react-native'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { useSignUpController } from './useLoginController'
import { SignUpSchema } from '../AuthSchemas'
import { KeyRound, Mail, User2 } from 'lucide-react-native'
import { Button } from '@/src/components/Button'

const initialValues = { email: '', password: '', name: '' }

export function SignUpForm() {
  const { mutate, isPending } = useSignUpController()

  const handleSignUp = (values: typeof initialValues) => {
    mutate(values)
  }

  return (
    <Formik
      validationSchema={toFormikValidationSchema(SignUpSchema)}
      initialValues={initialValues}
      onSubmit={handleSignUp}
    >
      {({ handleSubmit, errors }) => {
        const hasErrors = Object.keys(errors).length > 0

        return (
          <View className="flex-1 gap-y-8">
            <View>
              <InputWithFormik
                iconLeft={User2}
                name="name"
                label="Usuário"
                placeholder="Usuário"
              />
            </View>
            <View>
              <InputWithFormik
                iconLeft={Mail}
                name="email"
                label="Email"
                placeholder="Email"
              />
            </View>
            <View>
              <InputWithFormik
                name="password"
                label="Senha"
                placeholder="Senha"
                type="password"
                iconLeft={KeyRound}
              />
            </View>
            <View className="pt-4">
              <Button
                isPending={isPending}
                isDisabled={hasErrors || isPending}
                className="bg-lime-1000"
                $disabled-bgColor="$lime500"
                backgroundColor="$lime500"
                onPress={() => handleSubmit()}
                ButtonTextStyle={{ color: '$white', fontWeight: '$normal' }}
              >
                Entrar
              </Button>
            </View>
          </View>
        )
      }}
    </Formik>
  )
}
