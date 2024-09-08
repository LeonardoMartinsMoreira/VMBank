import { api } from '@/src/services/api'
import { useMutation } from '@tanstack/react-query'
import { TSignInPayload } from '../AuthSchemas'

export function useLoginController() {
  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: ({ email, password }: TSignInPayload) => api.get(''),
    onSuccess: () => console.log('gg'),
    onError: () => console.log('f'),
  })

  return {
    mutate,
    isPending,
  }
}
