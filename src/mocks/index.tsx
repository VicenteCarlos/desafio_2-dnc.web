import { IMocksFormOfTimeFieldsetProps, IMocksHeaderProps } from "@/interfaces";

export const mocksHeader: IMocksHeaderProps[] = [
  {
    text: "Endereços",
    id: "#find-address",
  },
  {
    text: "Previsão do tempo",
    id: "#privision-time",
  },
];

export const mocksFormOfTime: IMocksFormOfTimeFieldsetProps[] = [
  {
    id: "input-1",
    label: "Primeiro Nome:",
    placeholder: "Insira seu primeiro nome:",
    register: "name",
  },
  {
    id: "input-2",
    label: "E-mail:",
    placeholder: "Insira seu e-mail",
    register: "email",
  },
  {
    id: "input-3",
    label: "Digite o CEP:",
    placeholder: "Insira o CEP",
    register: "cep",
  },
];

export const mocksAdressTitle: string[] = [
  "Logradouro/nome",
  "Bairro/Distrito",
  "Localidade/UF",
];
