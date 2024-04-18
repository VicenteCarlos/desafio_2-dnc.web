import * as yup from "yup";

export const formSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  cep: yup
    .string()
    .required("CEP obrigatório")
    .matches(/\d{5}-\d{3}/, "Cep incorreto"),
  latitude: yup.string().required("Latitude obrigatória"),
  longitude: yup.string().required("Longitude obrigatória"),
});
