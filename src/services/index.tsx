import axios from "axios";

export const apiOfTime = axios.create({
  baseURL: "https://climate-api.open-meteo.com/v1",
});

export const apiOfAdress = axios.create({
  baseURL: "https://viacep.com.br/ws",
});
