import styled from "styled-components";

const SubMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: rgb(248, 248, 248);
`;
const SubMenuItems = styled.div`
  > * {
    margin-right: 1rem;
  }
`;
const Actions = styled.div`
  display: flex;
  margin-left: auto;
  & > button[data-dimension="s"] {
    height: 24px;
    width: 24px;
    padding: 0;
  }
`;

const ButtonText = styled.span`
  display: flex;
  align-items: center;
`;
const ButtonIcon = styled.span`
  margin-right: 4px;
  height: 16px;
  svg {
    width: 16px;
  }
`;

const OptionWrap = styled.span`
  display: flex;
  align-items: center;
`;

export default {
  SubMenu,
  SubMenuItems,
  Actions,
  ButtonText,
  ButtonIcon,
  OptionWrap,
};
