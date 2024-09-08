import { SignUpSchema, TSignUpPayload } from './../AuthSchemas'
import { api } from '@/src/services/api'
import { useMutation } from '@tanstack/react-query'

export function useSignUpController() {
  const { mutate } = useMutation({
    mutationKey: ['signUp'],
    mutationFn: (payload: TSignUpPayload) => api.post('user', { payload }),
    onSuccess: () => console.log('gg'),
    onError: () => console.log('f'),
  })

  return {
    mutate,
  }
}
