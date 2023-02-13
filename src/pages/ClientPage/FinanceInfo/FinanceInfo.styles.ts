import { typography } from "@admiral-ds/react-ui";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  padding: 1.5rem 1rem;
  max-width: 1400px;
`;

const ContainerTitle = styled.h6`
  ${typography["Header/H6"]}
  margin: 0 0 1rem;
`;

const Controls = styled.div`
  margin-bottom: 1rem;
  button {
    margin-right: 8px;
  }
  & button[data-appearance~="primary"] {
    background: rgb(184, 187, 187);
    background: linear-gradient(
      0deg,
      rgba(184, 187, 187, 1) 0%,
      rgba(231, 230, 229, 1) 100%
    );
    color: black;
    border: 1px solid #2f302f;
  }
`;

export default { ContainerTitle, Container, Controls };
