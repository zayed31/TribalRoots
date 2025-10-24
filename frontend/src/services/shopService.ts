import { apiClient } from './api';

export const shopService = {
  getAllShops: async () => {
    return apiClient.get('/shops');
  },
  
  getShopById: async (id: string) => {
    return apiClient.get(`/shops/${id}`);
  },
  
  createShop: async (shopData: any) => {
    return apiClient.post('/shops', shopData);
  },
  
  updateShop: async (id: string, shopData: any) => {
    return apiClient.put(`/shops/${id}`, shopData);
  },
  
  deleteShop: async (id: string) => {
    return apiClient.delete(`/shops/${id}`);
  },
};

