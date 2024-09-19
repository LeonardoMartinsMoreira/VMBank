import { useMutation } from '@tanstack/react-query'
import { TRecoveryPasswordPayload } from '../../AuthSchemas'
import { api } from '@/src/services/api'

export function useRecoveryPassword() {
  return useMutation({
    mutationKey: ['recovery-password'],
    mutationFn: (recoveryPasswordPayload: TRecoveryPasswordPayload) =>
      api.post('z', recoveryPasswordPayload),
    onSuccess: () => console.log('gg'),
    onError: () => console.log('f'),
  })
}
