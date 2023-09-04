import axiosInstance from './axiosInstance';

export async function allOutlets() {
  return await axiosInstance.get('/get-all-outlets');
}
