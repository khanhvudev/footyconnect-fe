import type { LoginRequest } from '../../components/Login/types/loginRequest';
import apiClient from './client';

const userEndpoint = '/users';

export const login = async (loginRequest: LoginRequest) => {
  const response = await apiClient.post<LoginRequest>(
    `${userEndpoint}/login`,
    loginRequest,
  );
  return response.data;
};
