import { api } from '@/src/services/api'
import { useMutation } from '@tanstack/react-query'
import { TSignInPayload } from '../AuthSchemas'

export function useLoginController() {
  const { mutate, isPending } = useMutation({
    mutationKey: ['login'],
    mutationFn: (loginPayload: TSignInPayload) => api.post('z', loginPayload),
    onSuccess: () => console.log('gg'),
    onError: () => console.log('f'),
  })

  return {
    mutate,
    isPending,
  }
}
