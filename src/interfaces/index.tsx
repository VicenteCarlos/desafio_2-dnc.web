export interface IMocksHeaderProps {
  text: string;
  id: string;
}

export interface IMocksFormOfTimeFieldsetProps {
  id: string;
  label: string;
  placeholder: string;
  register: "name" | "email" | "cep" | "latitude" | "longitude";
}

export interface IFormProps {
  latitude: string;
  longitude: string;
  name: string;
  email: string;
  cep: string;
}

export interface IFormOfTimeProps {
  setDataTemperature: React.Dispatch<React.SetStateAction<{}>>;
  setDataAdress: React.Dispatch<React.SetStateAction<{}>>;
}

