import { apiOfAdress } from "@/services";

const useGetAdress = async (cep: string) => {
  const { data, status } = await apiOfAdress.get(`/${cep}/json`);
  return { data, status };
};

export const useAdress = () => ({ useGetAdress });
