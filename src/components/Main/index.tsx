import { StyledMain } from "@/components/Main/style";
import { FormOfTime } from "@/components/FormOfTime";
import { mocksAdressTitle } from "@/mocks";
import { useState } from "react";

export const Main = () => {
  const [dataTemperature, setDataTemperature] = useState<any>(null);
  const [dataAdress, setDataAdress] = useState<any>(null);
  console.log(dataTemperature, "temperature");

  return (
    <StyledMain>
      <section className="infos-of-time">
        <p>
          Descubra Mais com Precisão: Previsões do Tempo e endereços em tempo
          real.
        </p>
        <img src="../../../public/assets/svg/sky.svg" alt="sky" />
      </section>
      <section className="form-prevision-time">
        <FormOfTime
          setDataTemperature={setDataTemperature}
          setDataAdress={setDataAdress}
        />
      </section>
      <section id="find-address">
        <div className="title-adress">
          <h2>Resultado da busca por CEP:</h2>
          <img src="../../../public/assets/svg/pointer.svg" alt="pointer" />
        </div>
        <div className="info-adress">
          <div className="titles">
            {mocksAdressTitle.map((item, i) => (
              <span key={`title-adress-${++i}`}>{item}</span>
            ))}
          </div>
          <div className="name-adress">
            {dataAdress === null ? (
              <img src="../../../public/assets/svg/spinner.svg" alt="spinner" />
            ) : (
              <>
                <span>
                  {dataAdress.logradouro.length === 0
                    ? "Não existe"
                    : dataAdress.logradouro}
                </span>
                <span>
                  {dataAdress.bairro.length === 0
                    ? "Não existe"
                    : dataAdress.bairro}
                </span>
                <span>
                  {dataAdress.localidade.length === 0 ||
                  dataAdress.uf.length === 0
                    ? "Não existe"
                    : `${dataAdress.localidade}/${dataAdress.uf}`}
                </span>
              </>
            )}
          </div>
        </div>
      </section>
      <section id="prevision-time">
        <div className="title-time">
          <h2>Previsão do tempo na região:</h2>
          <img src="../../../public/assets/svg/sky_2.svg" alt="pointer" />
        </div>
        <div className="info-time">
          {dataTemperature !== null
            ? `Previsão de tempo de acordo com a região: ${dataTemperature.daily.temperature_2m_max_CMCC_CM2_VHR4[0]}° C`
            : ""}
        </div>
      </section>
    </StyledMain>
  );
};
