import { typography } from "@admiral-ds/react-ui";
import styled, { css } from "styled-components";

const ClientPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Main = styled.div`
  padding: 2rem 1rem;
`;

export const accordionMixin = css`
  svg path[fill^="#"] {
    fill: blue;
  }
`;

export const accordionTitleMixin = css`
  color: ${({ theme }) => theme.color["Primary/Primary 70"]};
  ${typography["Header/H5"]}
`;

export default { ClientPage, Main };
