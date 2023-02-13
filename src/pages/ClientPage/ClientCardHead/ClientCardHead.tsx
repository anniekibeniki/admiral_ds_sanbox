import {
  Link,
  MenuItem,
  RenderOptionProps,
  T,
  TagMenu,
  TagOptionProps,
} from "@admiral-ds/react-ui";
import React, { useMemo } from "react";
import { css } from "styled-components";
import Styled from "./ClientCardHead.styles";
import { ReactComponent as LockSolid } from "@admiral-ds/icons/build/security/LockSolid.svg";
import { ReactComponent as PersonSolid } from "@admiral-ds/icons/build/system/PersonSolid.svg";

const items = [
  { id: "1", tagText: "КОНТРАГЕНТ: СВЕДЕНИЯ", statusViaBackground: true },
  { id: "2", tagText: "КОНТРАГЕНТ: РЕКВИЗИТЫ", statusViaBackground: true },
];
const dimension = "m";

export const ClientCardHead = () => {
  const [selected, setSelected] = React.useState<TagOptionProps | undefined>(
    items[0]
  );

  const options = useMemo(
    () =>
      items.map(({ id, tagText }) => {
        return {
          id,
          render: (options: RenderOptionProps) => (
            <MenuItem dimension={dimension} {...options} key={id}>
              {tagText}
            </MenuItem>
          ),
        };
      }),
    []
  );

  const renderLockIcon = () => {
    return <LockSolid />;
  };

  return (
    <div>
      <TagMenu
        dimension={dimension}
        items={options}
        as="div"
        selected={selected}
        alignSelf="flex-start"
        onSelectItem={(id) => {
          setSelected(items.find((item) => item.id === id));
        }}
      />
      <T
        font="Header/H1"
        as={"div"}
        css={css`
          font-weight: normal;
        `}
      >
        ООО &quot;Поставщик тест DRK-T364_2 1233445456&quot;
      </T>
      <Styled.Grid>
        <Styled.GridColumn>
          <Styled.GridCell>
            <T font="Caption/Caption 1" as="div">
              Руководитель
            </T>
            <T font="Body/Body 2 Short" as="div">
              <Styled.CellContent>
                {renderLockIcon()}
                <Link
                  href="#"
                  dimension="s"
                  css={css`
                    display: inline-flex;
                  `}
                >
                  Пасеков Иван Багирович
                </Link>
              </Styled.CellContent>
            </T>
          </Styled.GridCell>
          <Styled.GridCell>
            <T font="Caption/Caption 1" as="div">
              Место регистрации
            </T>
            <T font="Body/Body 2 Short" as="div">
              --
            </T>
          </Styled.GridCell>
          <Styled.GridCell>
            <T font="Caption/Caption 1" as="div">
              Первичный интерес
            </T>
            <T font="Body/Body 2 Short" as="div">
              <Styled.CellContent>
                {renderLockIcon()}
                --
              </Styled.CellContent>
            </T>
          </Styled.GridCell>
        </Styled.GridColumn>
        <Styled.GridColumn>
          <Styled.GridCell>
            <T font="Caption/Caption 1" as="div">
              Статус
            </T>
            <T font="Body/Body 2 Short" as="div">
              <Styled.CellContent>
                {renderLockIcon()}
                Активный
              </Styled.CellContent>
            </T>
          </Styled.GridCell>
        </Styled.GridColumn>
        <Styled.GridColumn>
          <Styled.GridCell>
            <T font="Caption/Caption 1" as="div">
              Ответственный
            </T>
            <T font="Body/Body 2 Short" as="div">
              <Styled.CellContent>
                {renderLockIcon()}
                <PersonSolid />
                <Link href="#" dimension="s">
                  AT Autotest CRM32
                </Link>
              </Styled.CellContent>
            </T>
          </Styled.GridCell>
        </Styled.GridColumn>
        <Styled.GridColumn>
          <Styled.ActionButton
            dimension="s"
            appearance="secondary"
            css={css`
              margin-right: 4px;
              max-width: 180px;
            `}
          >
            Выписка ЕГРЮЛ/ЕГРИП
          </Styled.ActionButton>
          <Styled.ActionButton dimension="s" appearance="secondary">
            Обогащение данными
          </Styled.ActionButton>
          <Styled.ActionButton
            dimension="s"
            appearance="secondary"
            css={css`
              width: 100%;
              margin-top: 4px;
            `}
          >
            Получение сведений по идентификации
          </Styled.ActionButton>
        </Styled.GridColumn>
      </Styled.Grid>
    </div>
  );
};
