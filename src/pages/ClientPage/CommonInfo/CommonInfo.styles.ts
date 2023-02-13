import styled from "styled-components";

const TabContent = styled.div`
  padding: 1rem;
`;

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  width: 100%;

  > label {
    margin-right: 1rem;
    margin-bottom: 0;
    width: 150px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  svg path {
    fill: rgb(255, 255, 255) !important;
  }
`;

const InputParams = styled.div`
  display: flex;
  flex-direction: column;
`;

export default { TabContent, Field, InputParams };
