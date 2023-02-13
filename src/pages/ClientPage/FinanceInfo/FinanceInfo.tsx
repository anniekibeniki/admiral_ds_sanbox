import { Button, Table, T, Column, Link } from "@admiral-ds/react-ui";
import React, { FC, useMemo } from "react";
import { css } from "styled-components";
import Styled from "./FinanceInfo.styles";
import { ReactComponent as CloseOutline } from "@admiral-ds/icons/build/service/CloseOutline.svg";

export const FinanceInfo: FC<any> = () => {
  const renderTitleCell = (content) => (
    <T
      font="Body/Body 2 Short"
      as={"span"}
      css={css`
        font-weight: bold;
      `}
    >
      {content}
    </T>
  );

  const renderCloseLink = (content) => {
    return (
      <T
        font="Body/Body 2 Short"
        as={"span"}
        css={css`
          font-weight: bold;
          display: flex;
        `}
      >
        {content}
        <Link href="#">
          <CloseOutline
            css={css`
              height: 14px;
              margin-left: 4px;
            `}
          />
        </Link>
      </T>
    );
  };

  const columnList: Column[] = useMemo(
    () => [
      {
        name: "col1",
        title: renderTitleCell("АКТИВ"),
        width: "20%",
      },
      {
        name: "col2",
        title: renderCloseLink("4кв. (окт-дек) 2020"),
        width: "250px",
        cellAlign: "right",
      },
      {
        name: "col3",
        title: renderCloseLink(<span>3кв. (июль-сен) 2021</span>),
        width: "250px",
        cellAlign: "right",
      },
      {
        name: "col4",
        title: renderCloseLink(<span>4кв. (окт-дек) 2021</span>),
        width: "250px",
        cellAlign: "right",
      },
      {
        name: "col5",
        title: renderCloseLink(<span>3кв. (июль-сен) 2022</span>),
        width: "250px",
        cellAlign: "right",
      },
    ],
    []
  );

  const rowList = useMemo(
    () => [
      {
        id: "01",
        col1: renderTitleCell("Тип периода:"),
        col2: "Предпоследний отчетный год",
        col3: "Предпоследний отчетный год",
        col4: "Последний отчетный год",
        col5: "Последний отчетный год",
        success: true,
      },
      {
        id: "02",
        col1: renderTitleCell("1. Внеоборотные активы:"),
        col2: renderTitleCell(0),
        col3: renderTitleCell(0),
        col4: renderTitleCell(0),
        col5: renderTitleCell(0),
      },
      {
        id: "03",
        col1: "Основные средства",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
      },
      {
        id: "04",
        col1: "Прочее",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
      },
      {
        id: "05",
        col1: renderTitleCell("2. Оборотные активы:"),
        col2: renderTitleCell(0),
        col3: renderTitleCell(0),
        col4: renderTitleCell(0),
        col5: renderTitleCell(0),
      },
      {
        id: "06",
        col1: "Запасы",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
      },
      {
        id: "07",
        col1: "Дебиторская задолжность",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
      },
      {
        id: "08",
        col1: "Денежные средства",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
      },
      {
        id: "09",
        col1: "Прочее",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
      },
      {
        id: "10",
        col1: renderTitleCell("Баланс"),
        col2: renderTitleCell(0),
        col3: renderTitleCell(0),
        col4: renderTitleCell(0),
        col5: renderTitleCell(0),
        selected: true,
      },
      {
        id: "11",
        col1: "",
        col2: "",
        col3: "",
        col4: "",
        col5: "",
      },
      {
        id: "12",
        col1: renderTitleCell("ПАССИВ"),
        col2: "",
        col3: "",
        col4: "",
        col5: "",
      },

      {
        id: "13",
        col1: renderTitleCell("3. Капитал и резервы:"),
        col2: renderTitleCell(0),
        col3: renderTitleCell(0),
        col4: renderTitleCell(0),
        col5: renderTitleCell(0),
      },
      {
        id: "14",
        col1: "Уставной капитал",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
      },
      {
        id: "15",
        col1: "Прочее",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
      },
      {
        id: "16",
        col1: renderTitleCell("4. Долгосрочные обязательства:"),
        col2: renderTitleCell(0),
        col3: renderTitleCell(0),
        col4: renderTitleCell(0),
        col5: renderTitleCell(0),
      },
      {
        id: "17",
        col1: "Заемные средства",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
      },
      {
        id: "18",
        col1: "Прочее",
        col2: "0",
        col3: "0",
        col4: "0",
        col5: "0",
      },
    ],
    []
  );

  const [rows, setRows] = React.useState([...rowList]);
  const [cols, setCols] = React.useState([...columnList]);

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) =>
      col.name === name ? { ...col, width } : col
    );
    setCols(newCols);
  };

  return (
    <div>
      <Styled.ContainerTitle>
        Данные бухгалтерского баланса:
      </Styled.ContainerTitle>
      <Styled.Container>
        <Styled.Controls>
          <Button dimension="s" appearance="primary">
            Добавить отчетный период
          </Button>
          <Button dimension="s" appearance="primary">
            Сохранить изменения
          </Button>
          <Button dimension="s" appearance="primary">
            Обновить данные
          </Button>
          <Button dimension="s" appearance="primary">
            Показать все периоды
          </Button>
          <Button dimension="s" appearance="primary">
            Добавить недостающие периоды
          </Button>
        </Styled.Controls>

        <Table columnList={cols} rowList={rows} onColumnResize={handleResize} />
      </Styled.Container>
    </div>
  );
};
