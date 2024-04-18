import { StyledFormOfTime } from "@/components/FormOfTime/style";
import { useAdress } from "@/hooks/useAdress";
import { useTemperature } from "@/hooks/useTemperature";
import { IFormOfTimeProps, IFormProps } from "@/interfaces";
import { mocksFormOfTime } from "@/mocks";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchema } from "@/components/FormOfTime/schema";

export const FormOfTime = ({
  setDataTemperature,
  setDataAdress,
}: IFormOfTimeProps) => {
  const { useGetTemperature } = useTemperature();
  const { useGetAdress } = useAdress();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormProps>({
    resolver: yupResolver(formSchema),
  });

  const sendData = async (dataForm: IFormProps) => {
    try {
      const { latitude, longitude, cep } = dataForm;
      
      const { data: dataGetTemperature } = await useGetTemperature({
        latitude,
        longitude,
      });
      const { data: dataGetAdress } = await useGetAdress(cep);

      setDataTemperature(dataGetTemperature);
      setDataAdress(dataGetAdress);
    } catch (error) {
      alert("Ocorreu um erro, verifique no console.");
      console.log("Erro aqui:\n\n", error)
    }
  };

  return (
    <StyledFormOfTime onSubmit={handleSubmit(sendData)}>
      {mocksFormOfTime.map((fieldset, i) => (
        <fieldset key={`fieldset-${++i}`} className={`f-${++i}`}>
          <label htmlFor={fieldset.id}>
            {errors[fieldset.register]
              ? errors[fieldset.register]?.message
              : fieldset.label}
          </label>
          <input
            id={fieldset.id}
            placeholder={fieldset.placeholder}
            {...register(fieldset.register)}
          />
        </fieldset>
      ))}
      <fieldset
        key={`fieldset-${mocksFormOfTime.length + 1}`}
        className={`f-${mocksFormOfTime.length + 1}`}
      >
        <label>Digite a latitude e longitude para saber a previsão:</label>
        <div className="input-time">
          <input
            placeholder={errors.latitude ? errors.latitude.message : "Latitude"}
            {...register("latitude")}
          />
          <input
            placeholder={
              errors.longitude ? errors.longitude.message : "Longitude"
            }
            {...register("longitude")}
          />
        </div>
      </fieldset>
      <button type="submit">Acessar</button>
    </StyledFormOfTime>
  );
};
