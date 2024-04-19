import styled from "styled-components";

export const StyledFormOfTime = styled.form`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 53.688rem;
  height: 58.125rem;
  margin-top: 16.313rem;
  border-radius: 1.875rem;

  fieldset {
    display: flex;
    flex-direction: column;
    width: 65%;
    margin: 0.6rem auto;

    label {
        font-size: 1.2rem;
    }

    input {
      background-color: #f2f2f2;
      border-radius: 0.625rem;
      padding: 0.85rem;
      margin: 0.8rem 0;
      width: 39.375rem;
    }

    input::placeholder {
      color: #3939398b;
    }
  }

  .f-1 {
    margin-top: 9rem;
  }

  .f-4 {
    display: flex;
    flex-direction: column;

    .input-time {
        display: flex;
        width: 105.5%;

        input {
            margin-right: 0.8rem;
            width: 18.5rem;
        }
    }
  }

  button {
    background-color: #0C70F2;
    border-radius: 0.625rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: white;
    width: 39.375rem;
    height: 6%;
    margin-top: 4rem;
    cursor: pointer;
  }

`;
