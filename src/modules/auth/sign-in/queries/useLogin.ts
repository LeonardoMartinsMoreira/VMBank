import { useMutation } from '@tanstack/react-query'
import { TSignInPayload } from '../../AuthSchemas'
import { api } from '@/src/services/api'

export function useLogin() {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: (loginPayload: TSignInPayload) => api.post('z', loginPayload),
    onSuccess: () => console.log('gg'),
    onError: () => console.log('f'),
  })
}
