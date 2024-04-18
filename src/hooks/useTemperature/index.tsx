import { apiOfTime } from "@/services";

const useGetTemperature = async ({ latitude, longitude  }: any) => {
  const { data, status } = await apiOfTime.get(
    `climate?latitude=${latitude}&longitude=${longitude}&start_date=2024-01-04&end_date=2024-01-12&models=CMCC_CM2_VHR4,FGOALS_f3_H,HiRAM_SIT_HR,MRI_AGCM3_2_S,EC_Earth3P_HR,MPI_ESM1_2_XR,NICAM16_8S&daily=temperature_2m_max`
  );
  return { data, status };
};

export const useTemperature = () => ({ useGetTemperature });
