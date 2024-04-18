import styled from "styled-components";

export const StyledMain = styled.main`
  .infos-of-time {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 4rem;

    p {
      font-weight: 800;
      font-size: 2.1rem;
      width: 40%;
    }

    img {
      width: 13.5rem;
    }
  }

  .form-prevision-time {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #find-address {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 26rem;

    .title-adress {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 2.3rem;
      }

      img {
        margin-left: 2rem;
      }
    }

    .info-adress {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      margin-top: 1rem;
      text-align: center;

      .titles {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 47%;
        height: 4vh;
        background-color: #0c70f2;
        color: white;
        border-top-right-radius: 1.875rem;
        border-top-left-radius: 1.875rem;
        padding: 1rem;

        span {
          font-weight: 600;
        }
      }

      .name-adress {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 47%;
        height: 4vh;
        background-color: white;
        border-bottom-right-radius: 1.875rem;
        border-bottom-left-radius: 1.875rem;
        padding: 1rem;

        span {
          font-weight: 600;
        }
      }
    }
  }

  #prevision-time {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 13rem;

    .title-time {
      display: flex;
      align-items: center;

      h2 {
        font-size: 2.3rem;
      }

      img {
        width: 10rem;
      }
    }

    .info-time {
      background-color: white;
      border: 1px solid #0C70F2;
      border-radius: 1.875rem;
      font-weight: 800;
      text-align: center;
      margin-top: 2rem;
      padding: 1rem;
      width: 60%;
    }
  }
`;
