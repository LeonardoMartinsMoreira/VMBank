import { InputWithFormik } from '@/src/components/InputWithFormik'
import { Formik } from 'formik'
import { View } from 'react-native'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { useLoginController } from './useLoginController'
import { SignInSchema } from '../AuthSchemas'
import { Heading, KeyRound, Mail } from 'lucide-react-native'
import { Button } from '@/src/components/Button'
import { TouchableOpacity } from 'react-native'
import { Text } from 'react-native'
import { Link, Modal, ModalFooter } from '@gluestack-ui/themed'
import { ModalBackdrop } from '@gluestack-ui/themed'
import { ModalContent } from '@gluestack-ui/themed'
import { ModalHeader } from '@gluestack-ui/themed'
import { ModalCloseButton } from '@gluestack-ui/themed'
import { CloseIcon } from '@gluestack-ui/themed'
import { Icon } from '@gluestack-ui/themed'
import { ModalBody } from '@gluestack-ui/themed'
import { useRef, useState } from 'react'

const initialValues = { email: '', password: '' }

export default function LoginForm() {
  const [showModal, setShowModal] = useState(false)
  const { mutate, isPending } = useLoginController()

  const handleLogin = (values: typeof initialValues) => mutate({ ...values })
  const handleRecoveryPassword = () => setShowModal(true)

  const ref = useRef(null)

  return (
    <Formik
      validationSchema={toFormikValidationSchema(SignInSchema)}
      initialValues={initialValues}
      onSubmit={handleLogin}
    >
      {({ handleSubmit, errors }) => {
        const hasErrors = Object.keys(errors).length > 0

        return (
          <View className="flex-1 gap-y-8">
            <View>
              <InputWithFormik
                iconLeft={Mail}
                name="email"
                label="Email"
                placeholder="Email"
              />
            </View>

            <Modal
              isOpen={showModal}
              onClose={() => {
                setShowModal(false)
              }}
              finalFocusRef={ref}
            >
              <ModalBackdrop />
              <ModalContent>
                <ModalHeader>
                  <ModalCloseButton>
                    <Icon as={CloseIcon} />
                  </ModalCloseButton>
                </ModalHeader>
                <ModalBody>
                  <Text>
                    Elevate user interactions with our versatile modals.
                    Seamlessly integrate notifications, forms, and media
                    displays. Make an impact effortlessly.
                  </Text>
                </ModalBody>
                <ModalFooter>
                  <Button
                    variant="outline"
                    size="sm"
                    action="secondary"
                    mr="$3"
                    onPress={() => {
                      setShowModal(false)
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    size="sm"
                    action="positive"
                    borderWidth="$0"
                    onPress={() => {
                      setShowModal(false)
                    }}
                  >
                    Explore
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

            <View className="gap-y-3">
              <View>
                <InputWithFormik
                  name="password"
                  label="Senha"
                  placeholder="Senha"
                  type="password"
                  iconLeft={KeyRound}
                />
              </View>
              <TouchableOpacity className="items-end">
                <Link onPress={handleRecoveryPassword}>
                  <Text className="text-lime-400">Esqueceu a senha?</Text>
                </Link>
              </TouchableOpacity>
            </View>

            <View className="pt-4">
              <Button
                isPending={isPending}
                isDisabled={isPending || hasErrors}
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
