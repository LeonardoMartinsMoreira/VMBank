import { Button } from '@/src/components/Button'
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  VStack,
} from '@gluestack-ui/themed'
import { Mail } from 'lucide-react-native'
import { Dispatch, SetStateAction } from 'react'
import { Text, View } from 'react-native'
import { InputWithFormik } from '@/src/components/InputWithFormik'
import { Formik } from 'formik'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { RecoveryPassword } from '../../AuthSchemas'

const initialValues = { email: '' }

export function RecoveryPasswordModal({
  showModal,
  setShowModal,
}: {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}) {
  const handleOnSubmit = () => {
    console.log('oi')
  }

  return (
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <ModalBackdrop />
      <ModalContent backgroundColor="$black">
        <ModalHeader>
          <VStack space="sm">
            <Text className="text-lg font-medium text-white">
              Esqueceu a senha?
            </Text>
            <Text className="text-md text-white">
              Não se preocupe, nós iremos te enviar um email para redefinição de
              senha!
            </Text>
          </VStack>
        </ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialValues}
            validationSchema={toFormikValidationSchema(RecoveryPassword)}
            onSubmit={handleOnSubmit}
          >
            <View className="py-8">
              <InputWithFormik
                iconLeft={Mail}
                name="email"
                label="Email"
                placeholder="Email"
              />
            </View>
          </Formik>
        </ModalBody>
        <ModalFooter>
          <VStack space="lg" w="$full">
            <Button
              backgroundColor="$lime500"
              onPress={() => setShowModal(true)}
            >
              Enviar
            </Button>
          </VStack>
          <Button
            ButtonTextStyle={{ color: '$coolGray400' }}
            variant="link"
            size="sm"
            onPress={() => setShowModal(false)}
          >
            Voltar para o login
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
