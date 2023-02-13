import styled from "styled-components";

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  width: 100%;

  > label {
    margin-right: 1rem;
    width: 130px;
    text-align: end;
  }

  > :not(label) {
    flex-grow: 1;
    min-width: 300px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
`;

export default {
  Form,
  FormField,
  Controls,
};
