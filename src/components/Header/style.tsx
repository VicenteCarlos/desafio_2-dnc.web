import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #0c70f2;
  color: white;
  height: 6.438rem;

  #container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    h1 {
        margin-left: 2rem;
        font-size: 3.125rem;
    }

    nav {
        margin-right: 2rem;

      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style-type: none;

        li {
            margin: 0 1rem;
            font-size: 1.5rem;

          a {
            font-weight: 800;
            color: white;
            text-decoration: none;
          }
        }
      }
    }
  }
`;
