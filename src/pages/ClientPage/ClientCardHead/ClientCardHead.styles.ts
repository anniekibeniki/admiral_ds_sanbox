import { Button } from "@admiral-ds/react-ui";
import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
`;
const GridColumn = styled.div`
  flex: 1 0 25%;
`;

const GridCell = styled.div`
  &:not(:first-of-type) {
    margin-top: 0.5rem;
  }
`;

const CellContent = styled.div`
  display: inline-flex;
  align-items: center;
  svg {
    height: 1rem;
  }
`;

const ActionButton = styled(Button)`
  background: linear-gradient(
    0deg,
    rgba(220, 220, 220, 1) 0%,
    rgba(246, 246, 246, 1) 100%
  );
  color: black !important;
  border: 1px solid rgba(190, 190, 190, 1) !important;
  box-shadow: 2px 2px 2px rgba(190, 190, 190, 1);
`;

export default { Grid, GridColumn, GridCell, CellContent, ActionButton };
