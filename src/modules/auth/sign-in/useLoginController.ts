import { useLogin } from './queries/useLogin'

export function useLoginController() {
  const { mutate, isPending } = useLogin()

  return {
    mutate,
    isPending,
  }
}
