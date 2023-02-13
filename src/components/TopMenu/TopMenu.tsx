import {
  Avatar,
  Button,
  ComponentDimension,
  DropMenu,
  IconButton,
  InputField,
  MenuItem,
  RenderOptionProps,
  T,
} from "@admiral-ds/react-ui";
import { ItemDimension } from "@admiral-ds/react-ui/dist/components/Menu/menuItemMixins";
import React, { FC } from "react";
import { ReactComponent as SettingsSolid } from "@admiral-ds/icons/build/system/SettingsSolid.svg";
import { ReactComponent as PersonSolid } from "@admiral-ds/icons/build/system/PersonSolid.svg";
import { ReactComponent as PlusCircleOutline } from "@admiral-ds/icons/build/service/PlusCircleOutline.svg";
import { ReactComponent as TimeOutline } from "@admiral-ds/icons/build/system/TimeOutline.svg";
import { DROP_MENU_ITEMS } from "./constants";
import Styled, { menuBtnMixin } from "./TopMenu.styles";
import { css } from "styled-components";

export const TopMenu: FC<{ dimension?: ItemDimension }> = ({
  dimension = "s",
}) => {
  const menuItems = React.useMemo(() => {
    return DROP_MENU_ITEMS.map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [dimension]);

  return (
    <Styled.TopMenu>
      <Styled.Logo>Microsoft Dynamics CRM</Styled.Logo>
      <Styled.Menu>
        <DropMenu
          dimension={dimension}
          items={menuItems}
          renderContentProp={({ buttonRef, handleClick, statusIcon }) => {
            return (
              <Button
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                onClick={handleClick}
                dimension={dimension}
                appearance="ghost"
                css={menuBtnMixin}
              >
                Продажи
                {statusIcon}
              </Button>
            );
          }}
        />

        <DropMenu
          dimension={dimension}
          items={menuItems}
          renderContentProp={({ buttonRef, handleClick, statusIcon }) => {
            return (
              <Button
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                onClick={handleClick}
                dimension={dimension}
                appearance="ghost"
                css={menuBtnMixin}
              >
                Контрагенты
                {statusIcon}
              </Button>
            );
          }}
        />
      </Styled.Menu>
      <Styled.ProfileMenu>
        <IconButton dimension={dimension}>
          <TimeOutline />
        </IconButton>
        <IconButton dimension={dimension}>
          <PlusCircleOutline />
        </IconButton>

        <InputField
          placeholder="Поиск данных в CRM"
          dimension={dimension as ComponentDimension}
          icons={<Styled.SearchOutline />}
          css={css`
            margin: 0 1rem;
            max-width: 14rem;
          `}
        />
        <Styled.UserInfo>
          <T font="Caption/Caption 2" color="Special/Static White">
            Anna Bogdanova
          </T>
          <T font="Caption/Caption 2" color="Special/Static White">
            VTBL
          </T>
        </Styled.UserInfo>
        <span>
          <Avatar
            userName="Anna Bogdanova"
            dimension="s"
            icon={<PersonSolid />}
            color="Special/Static White"
            appearance={{ background: "gray", icon: "#FFFFFF" }}
          />
        </span>

        <IconButton dimension={dimension}>
          <SettingsSolid />
        </IconButton>
      </Styled.ProfileMenu>
    </Styled.TopMenu>
  );
};
