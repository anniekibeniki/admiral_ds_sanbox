import { typography } from "@admiral-ds/react-ui";
import styled, { css } from "styled-components";
import { ReactComponent as SearchOutlineDefault } from "@admiral-ds/icons/build/system/SearchOutline.svg";

const TopMenu = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 0.3rem 1rem;
  background: rgb(153, 68, 250);
`;

const Logo = styled.span`
  ${typography["Header/H4"]}
  color: white;
`;

const Menu = styled.div`
  margin-left: 10px;
  border-left: 1px solid ${({ theme }) => theme.color["Neutral/Neutral 40"]};
`;

export const menuBtnMixin = css`
  & {
    color: white !important;
  }
  svg path {
    fill: white !important;
  }
`;

const ProfileMenu = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  > button {
    ${menuBtnMixin}
    margin-left: 1rem;
  }
`;

const SearchOutline = styled(SearchOutlineDefault)`
  transform: rotateY(180deg);
`;

const UserInfo = styled.span`
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;
`;

export default { TopMenu, Logo, Menu, ProfileMenu, SearchOutline, UserInfo };
