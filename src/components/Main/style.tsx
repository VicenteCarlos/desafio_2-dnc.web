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
                width: 60%;
                background-color: #0c70f2;
                color: white;
                border-top-right-radius: 1.875rem;
                border-top-left-radius: 1.875rem;
            }

            .name-adress {
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 60%;
                background-color: white;
            }
        }
    }
`