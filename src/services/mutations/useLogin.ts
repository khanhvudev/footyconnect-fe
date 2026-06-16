import { useMutation } from '@tanstack/react-query';
import { login } from '../api/user';
import type { LoginRequest } from '../../components/Login/types/loginRequest';

export const useLogin = () => {
  return useMutation({
    mutationFn: async (loginRequest: LoginRequest) => await login(loginRequest),
  });
};
