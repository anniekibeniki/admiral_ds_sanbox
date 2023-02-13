import styled from "styled-components";

const SearchParamsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 1rem;
`;

const SearchParams = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const Divider = styled.div`
  margin: 0 1rem;
  width: 1px;
  min-height: 130px;
  height: 100%;
  background-color: ${({ theme }) => theme.color["Neutral/Neutral 20"]};
`;

const FormField = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  width: 100%;

  > label {
    margin-right: 0.5rem;
    width: 70px;
  }

  > :not(label) {
    flex-grow: 1;
    min-width: 300px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const AmountCell = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;

  &[data-disabled="true"] {
    & > * {
      color: ${({ theme }) => theme.color["Neutral/Neutral 30"]};
    }
  }
`;

const TableSection = styled.div`
  margin-top: 2rem;
  border: 1px solid ${({ theme }) => theme.color["Neutral/Neutral 30"]};
  border-radius: 2px;
  padding: 0.5rem;
`;

export default {
  SearchParamsContainer,
  SearchParams,
  Divider,
  FormField,
  AmountCell,
  TableSection,
};
