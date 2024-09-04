import { api } from '@/src/services/api'
import { useMutation } from '@tanstack/react-query'

export function useLoginController() {
  const { mutate } = useMutation({
    mutationKey: ['login'],
    mutationFn: () =>
      api.post('', {
        user: '',
        passowrd: '',
      }),
    onSuccess: () => console.log('gg'),
    onError: () => console.log('f'),
  })

  return {
    mutate,
  }
}
