import { apiClient } from './api';

export const userService = {
  getUserProfile: async (id: string) => {
    return apiClient.get(`/users/${id}`);
  },
  
  updateUserProfile: async (id: string, userData: any) => {
    return apiClient.put(`/users/${id}`, userData);
  },
  
  getUserContributions: async (id: string) => {
    return apiClient.get(`/users/${id}/contributions`);
  },
};

