import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from '@gluestack-ui/themed'
import { useFormikContext } from 'formik'
import {
  AlertCircleIcon,
  EyeIcon,
  EyeOffIcon,
  LucideIcon,
} from 'lucide-react-native'
import { ComponentProps, useState } from 'react'
import { When } from 'react-if'

interface GluestackInputFieldProps extends ComponentProps<typeof InputField> {}

interface InputWithFormikProps extends GluestackInputFieldProps {
  name: string
  label: string
  iconLeft?: LucideIcon
}

const InputWithFormik = ({
  name,
  label,
  iconLeft,
  type,
  ...props
}: InputWithFormikProps) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleState = () =>
    setShowPassword((showPasswordState) => !showPasswordState)

  const { errors, values, setFieldValue, touched, setFieldTouched } =
    useFormikContext()

  const error = errors[name]
  const value = values[name]
  const hasTouched = touched[name]
  const handleChange = (value: string) => setFieldValue(name, value)
  const handleBlur = () => setFieldTouched(name, true)
  const showEyeIcon = type === 'password'
  const inputType = showEyeIcon && showPassword ? 'text' : 'password'

  return (
    <FormControl isInvalid={hasTouched && !!error} height={'$16'}>
      <FormControlLabel>
        <FormControlLabelText color="$warmGray400" fontWeight={'$normal'}>
          {label}
        </FormControlLabelText>
      </FormControlLabel>
      <Input borderColor="$lime400" height={'$12'}>
        <When condition={iconLeft}>
          <InputSlot pl={'$3'}>
            <InputIcon as={iconLeft} color="$warmGray400" />
          </InputSlot>
        </When>
        <InputField
          onBlur={handleBlur}
          name={name}
          value={value}
          type={inputType}
          color="$white"
          onChangeText={handleChange}
          borderRadius={'$md'}
          {...props}
        />
        <When condition={showEyeIcon}>
          <InputSlot pr="$3" onPress={handleState}>
            <InputIcon
              as={showPassword ? EyeIcon : EyeOffIcon}
              color="$warmGray400"
            />
          </InputSlot>
        </When>
      </Input>
      <FormControlError>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>{error}</FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}

export { InputWithFormik }
