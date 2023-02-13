import {
  DropMenu,
  IconButton,
  MenuItem,
  RenderOptionProps,
  TextButton,
} from "@admiral-ds/react-ui";
import React, { FC } from "react";
import Styled from "./SubMenu.styles";
import { ReactComponent as SaveSolid } from "@admiral-ds/icons/build/system/SaveSolid.svg";
import { ReactComponent as SmallCloseOutline } from "@admiral-ds/icons/build/service/SmallCloseOutline.svg";
import { ReactComponent as EmailOutline } from "@admiral-ds/icons/build/system/EmailOutline.svg";
import { ReactComponent as PhoneOutline } from "@admiral-ds/icons/build/communication/PhoneOutline.svg";
import { ReactComponent as MoreHorizontalOutline } from "@admiral-ds/icons/build/system/MoreHorizontalOutline.svg";
import { ReactComponent as DocsSolid } from "@admiral-ds/icons/build/documents/DocsSolid.svg";
import { ReactComponent as UploadOutline } from "@admiral-ds/icons/build/system/UploadOutline.svg";
import { ReactComponent as UserRoleFromOutline } from "@admiral-ds/icons/build/system/UserRoleFromOutline.svg";
import { ReactComponent as DownloadOutline } from "@admiral-ds/icons/build/system/DownloadOutline.svg";
import { ReactComponent as ArrowDownOutline } from "@admiral-ds/icons/build/system/ArrowDownOutline.svg";
import { ReactComponent as ArrowUpOutline } from "@admiral-ds/icons/build/system/ArrowUpOutline.svg";
import { ReactComponent as FileCSVOutline } from "@admiral-ds/icons/build/documents/FileCSVOutline.svg";
import { ReactComponent as FileCurrencySolid } from "@admiral-ds/icons/build/documents/FileCurrencySolid.svg";
import { SearchModal } from "components/SearchModal/SearchModal";
import { SmsModal } from "components/SmsModal/SmsModal";
import { FileUploadModal } from "components/FileUploadModal/FileUploadModal";
import { css } from "styled-components";

export const SubMenu: FC<any> = ({ dimension = "s" }) => {
  const [searchModalOpened, setSearchModalOpened] = React.useState(false);
  const [smsModalOpened, setSmsModalOpened] = React.useState(false);
  const [uploadModalOpened, setUploadModalOpened] = React.useState(false);

  const handleOpenSearchModal = () => {
    setSearchModalOpened(true);
  };
  const handleCloseSearchModal = () => {
    setSearchModalOpened(false);
  };

  const docsMenuItems = React.useMemo(() => {
    return [
      {
        id: "1",
        label: "Option one",
        value: 1,
      },
      {
        id: "2",
        label: (
          <Styled.OptionWrap>
            <FileCSVOutline
              css={css`
                height: 18px;
                margin-right: 4px;
              `}
            />
            Option two
          </Styled.OptionWrap>
        ),
        value: 2,
      },
      {
        id: "3",
        label: (
          <Styled.OptionWrap>
            <FileCurrencySolid
              css={css`
                height: 18px;
                margin-right: 4px;
              `}
            />
            Option three
          </Styled.OptionWrap>
        ),
        value: 3,
      },
    ].map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [dimension]);

  const restMenuItems = React.useMemo(() => {
    return [
      {
        id: "1",
        label: "Rest option one",
        value: 1,
      },
      {
        id: "2",
        label: "Another option two",
        value: 2,
      },
      {
        id: "3",
        label: "Option three",
        value: 3,
      },
    ].map((item) => ({
      id: item.id,
      render: (options: RenderOptionProps) => (
        <MenuItem dimension={dimension} {...options} key={item.id}>
          {item.label}
        </MenuItem>
      ),
    }));
  }, [dimension]);

  const handleSubmitForm = (data) => {
    console.warn("handleSubmitForm", data);
  };

  return (
    <Styled.SubMenu>
      <Styled.SubMenuItems>
        <TextButton
          dimension={dimension}
          text="Сохранить"
          icon={<SaveSolid />}
          appearance="secondary"
        />
        <TextButton
          dimension={dimension}
          appearance="secondary"
          text="Отправить SMS"
          onClick={() => setSmsModalOpened(true)}
          icon={<EmailOutline />}
        />
        <TextButton
          dimension={dimension}
          appearance="secondary"
          text="Запланировать звонок"
          icon={<PhoneOutline />}
        />
        <TextButton
          dimension={dimension}
          appearance="secondary"
          text="Загрузить документы"
          icon={<UploadOutline />}
          onClick={() => setUploadModalOpened(true)}
        />
        <TextButton
          dimension={dimension}
          appearance="secondary"
          text="Закрепить поставщика"
          icon={<UserRoleFromOutline />}
          onClick={handleOpenSearchModal}
        />

        <DropMenu
          dimension={dimension}
          items={docsMenuItems}
          renderContentProp={({ buttonRef, handleClick, statusIcon }) => {
            return (
              <TextButton
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                onClick={handleClick}
                dimension={dimension}
                appearance="secondary"
                text={
                  (
                    <Styled.ButtonText>
                      <Styled.ButtonIcon>
                        <DocsSolid />
                      </Styled.ButtonIcon>
                      Каталог документов
                    </Styled.ButtonText>
                  ) as unknown as string
                }
                icon={statusIcon}
                displayRight
              />
            );
          }}
        />

        <DropMenu
          dimension={dimension}
          items={docsMenuItems}
          renderContentProp={({ buttonRef, handleClick, statusIcon }) => {
            return (
              <TextButton
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                onClick={handleClick}
                dimension={dimension}
                appearance="secondary"
                text={
                  (
                    <Styled.ButtonText>
                      <Styled.ButtonIcon>
                        <DownloadOutline />
                      </Styled.ButtonIcon>
                      Выгрузить данные
                    </Styled.ButtonText>
                  ) as unknown as string
                }
                icon={statusIcon}
                displayRight
              />
            );
          }}
        />

        <DropMenu
          dimension={dimension}
          items={restMenuItems}
          renderContentProp={({ buttonRef, handleClick }) => {
            return (
              <IconButton
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                dimension={dimension}
                onClick={handleClick}
              >
                <MoreHorizontalOutline />
              </IconButton>
            );
          }}
        />
      </Styled.SubMenuItems>

      <Styled.Actions>
        <IconButton dimension={dimension}>
          <ArrowDownOutline />
        </IconButton>
        <IconButton dimension={dimension}>
          <ArrowUpOutline />
        </IconButton>
        <IconButton dimension={dimension}>
          <SmallCloseOutline />
        </IconButton>
      </Styled.Actions>
      {searchModalOpened && (
        <SearchModal
          onClose={handleCloseSearchModal}
          onSubmit={handleSubmitForm}
        />
      )}
      {smsModalOpened && (
        <SmsModal
          onClose={() => {
            setSmsModalOpened(false);
          }}
        />
      )}
      {uploadModalOpened && (
        <FileUploadModal onClose={() => setUploadModalOpened(false)} />
      )}
    </Styled.SubMenu>
  );
};
