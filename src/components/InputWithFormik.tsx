import { useFormikContext } from 'formik'
import React from 'react'
import { Text, TextInput, TextInputProps } from 'react-native'
import { View } from 'tamagui'

interface InputWithFormikProps extends TextInputProps {
  name: string
  label: string
}

const InputWithFormik = ({ name, label, ...props }: InputWithFormikProps) => {
  const { errors, values, setFieldValue, touched, setFieldTouched } = useFormikContext()

  const error = errors[name]
  const value = values[name]
  const hasTouched = touched[name]
  const handleChange = (value: string) => setFieldValue(name, value)
  const handleBlur = () => setFieldTouched(name, true)

  return (
    <View className="gap-y-1">
      <Text className="text-gray-300 font-medium">{label}</Text>
      <TextInput
        placeholderTextColor="gray"
        className="p-2 rounded-lg"
        onBlur={handleBlur}
        name={name}
        value={value}
        onChangeText={handleChange}
        {...props}
      />
      {!!error && hasTouched && <Text className="text-red-500">{error}</Text>}
    </View>
  )
}

export { InputWithFormik }
