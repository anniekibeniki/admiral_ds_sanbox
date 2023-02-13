import {
  Button,
  Modal,
  ModalButtonPanel,
  ModalContent,
  ModalProps,
  ModalTitle,
  SelectField,
  Option,
  T,
  CheckboxField,
  Label,
  InputField,
  IconButton,
  DateField,
  Table,
  Link,
  Column,
  PaginationOne,
} from "@admiral-ds/react-ui";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { getOrderedSortColumns, shouldRender, strToTime } from "utils/index";
import Styled from "./SearchModal.styles";
import { ReactComponent as SearchOutlineDefault } from "@admiral-ds/icons/build/system/SearchOutline.svg";
import { css } from "styled-components";

const OPTIONS_SIMPLE = [
  "teeext 1",
  "text 2",
  "text 3",
  "text 4",
  "text 5",
  "texttt 6",
  "text 7",
  "Ответ на «Главный вопрос жизни, вселенной и всего такого»",
  "text 69",
  "42",
];

const OPTIONS_SIMPLE2 = [
  "Бизнес-процессы с запуском вручную",
  "Бизнес-процессы с автозапуском",
];

const numberFormatter = new Intl.NumberFormat();

export const SearchModal: FC<ModalProps & { onSubmit: (data: any) => void }> = (
  props
) => {
  const { onClose } = props;
  const [selectValue, setSelectValue] = useState("");
  const [select2Value, setSelect2Value] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [searchValue, setSearchValue] = React.useState("");
  const [isSearchInProgress, setIsSearchInProgress] = useState(false);

  const renderOptions = (data) => {
    return data
      .map((option) => {
        return selectValue.includes(option) ||
          shouldRender(option, searchValue) ? (
          <Option key={option} value={option}>
            {`${option}`}
          </Option>
        ) : null;
      })
      .filter((item) => !!item);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
  };

  const onSelect2Change = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelect2Value(e.target.value);
  };

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onClearSelect = () => {
    setSelectValue("");
    setSearchValue("");
  };

  const handleSearch = () => {
    setIsSearchInProgress(true);
    setTimeout(() => {
      setIsSearchInProgress(false);
    }, 500);
  };

  const columnList = [
    {
      name: "process_name",
      title: "Название процесса",
      width: 200,
      sortable: true,
    },
    {
      name: "transfer_type",
      title: "Тип сделки",
    },
    {
      name: "transfer_date",
      title: "Дата сделки",
      width: 150,
      sortable: true,
    },
    {
      name: "transfer_amount",
      title: "Сумма",
      width: "170px",
      sortable: true,
    },
    {
      name: "rate",
      title: "Ставка",
      sortable: true,
    },
    {
      name: "currency",
      title: "Валюта",
    },
  ];

  const rowList = [
    {
      id: "0001",
      process_name: (
        <Link href="#" dimension="s">
          Подтверждение статуса поставщика
        </Link>
      ),
      transfer_type: "МНО",
      transfer_date: new Date("2020-08-06").toLocaleDateString(),
      transfer_amount: (
        <Styled.AmountCell>
          <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
        </Styled.AmountCell>
      ),
      currency: "RUB",
      rate: 2.5,
    },
    {
      id: "0002",
      process_name: (
        <Link href="#" dimension="s">
          Проверка УОБ Поставщика
        </Link>
      ),
      transfer_type: "МНО",
      transfer_date: new Date("2020-08-06").toLocaleDateString(),
      transfer_amount: (
        <Styled.AmountCell>
          <T font="Body/Body 2 Short">
            {numberFormatter.format(32_500_000_000)}
          </T>
        </Styled.AmountCell>
      ),
      currency: "RUB",
      rate: 1.5,
    },
    {
      id: "0003",
      process_name: (
        <Link href="#" dimension="s">
          Формирование договора РТБ
        </Link>
      ),
      transfer_type: "МНО",
      transfer_date: new Date("2020-03-26").toLocaleDateString(),
      transfer_amount: (
        <Styled.AmountCell>
          <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
        </Styled.AmountCell>
      ),
      currency: "RUB",
      rate: 3.5,
    },
    {
      id: "0004",
      process_name: (
        <Link href="#" dimension="s">
          Блокировка по СНК
        </Link>
      ),
      transfer_type: "МНО",
      transfer_date: new Date("2020-05-16").toLocaleDateString(),
      transfer_amount: (
        <Styled.AmountCell>
          <T font="Body/Body 2 Short">
            {numberFormatter.format(32_500_000_000)}
          </T>
        </Styled.AmountCell>
      ),
      currency: "RUB",
      rate: 1,
    },
    {
      id: "0005",
      process_name: (
        <Link href="#" dimension="s">
          Test record #1
        </Link>
      ),
      transfer_type: "МНО",
      transfer_date: new Date("2020-09-01").toLocaleDateString(),
      transfer_amount: (
        <Styled.AmountCell>
          <T font="Body/Body 2 Short">{numberFormatter.format(18_000_000)}</T>
        </Styled.AmountCell>
      ),
      currency: "RUB",
      rate: 2.5,
    },
    {
      id: "0006",
      process_name: (
        <Link href="#" dimension="s">
          Test record #2
        </Link>
      ),
      transfer_type: "МНО",
      transfer_date: new Date("2020-08-06").toLocaleDateString(),
      transfer_amount: (
        <Styled.AmountCell>
          <T font="Body/Body 2 Short">
            {numberFormatter.format(32_500_000_000)}
          </T>
        </Styled.AmountCell>
      ),
      currency: "RUB",
      rate: 0.5,
    },
  ];

  const [rows, setRows] = useState([...rowList]);
  const [cols, setCols] = useState<Column[]>([...columnList]);
  const [sortLevel, setSortLevel] = React.useState<number>(0);

  const calcSortOrder = (columns: Array<Column>): Array<Column> => {
    const newCols = [...columns];

    const sortColumns = [...newCols]
      .filter((column) => !!column.sort)
      .sort((a, b) => {
        return (a.sortOrder || 0) - (b.sortOrder || 0);
      });

    sortColumns.forEach((col, index) => {
      if (index < 2) {
        col.sortOrder = index + 1;
      } else {
        col.sortOrder = undefined;
        col.sort = undefined;
      }
    });
    setSortLevel(sortColumns.length);

    return newCols;
  };

  const handleSelectionChange = (
    ids: Record<string | number, boolean>
  ): void => {
    const updRows = rows.map((row) => ({ ...row, selected: ids[row.id] }));
    setRows(updRows);
  };

  const handleResize = ({ name, width }: { name: string; width: string }) => {
    const newCols = cols.map((col) =>
      col.name === name ? { ...col, width } : col
    );
    setCols(newCols);
  };

  const handleSort = ({
    name,
    sort,
  }: {
    name: string;
    sort: "asc" | "desc" | "initial";
  }) => {
    if (sort === "initial") {
      const newCols = [...cols].map((col) =>
        col.name === name
          ? { ...col, sort: undefined, sortOrder: undefined }
          : { ...col }
      );
      setCols(calcSortOrder(newCols) as Column[]);
    } else {
      if (sort === "asc") {
        if (sortLevel === 2) {
          const firstOrderCol = cols.find((col) => col.sortOrder === 1);
          if (firstOrderCol) {
            if (firstOrderCol.sort) firstOrderCol.sort = undefined;
            if (firstOrderCol.sortOrder) firstOrderCol.sortOrder = undefined;
          }
        }

        const newCols = [...cols].map((col) => {
          const newCol = { ...col };

          if (col.name === name) {
            newCol.sort = "asc";
            newCol.sortOrder = sortLevel + 1;
          }

          return newCol;
        });
        setCols(calcSortOrder(newCols));
      } else {
        setCols(
          [...cols].map((col) =>
            col.name === name ? { ...col, sort: "desc" } : { ...col }
          )
        );
      }
    }
  };

  const compare = (a: any, b: any, colName: string, sort: "asc" | "desc") => {
    if (sort === "asc") {
      switch (colName) {
        case "transfer_date":
          return strToTime(a[colName]) - strToTime(b[colName]);
        case "rate":
        default:
          return a[colName] - b[colName];
      }
    } else {
      switch (colName) {
        case "transfer_date":
          return strToTime(b[colName]) - strToTime(a[colName]);
        case "rate":
        default:
          return b[colName] - a[colName];
      }
    }
  };

  useEffect(() => {
    const sortColumns = getOrderedSortColumns(cols);

    if (Object.keys(sortColumns).length === 0) {
      setRows([...rowList]);
    } else {
      const names = Object.keys(sortColumns);
      const newRows = [...rows].sort((a: any, b: any) => {
        const result = compare(a, b, names[0], sortColumns[names[0]]);

        if (!result && names.length > 1) {
          return compare(a, b, names[1], sortColumns[names[1]]);
        } else {
          return result;
        }
      });

      setRows(newRows);
    }
  }, [cols]);

  // Pagination mock data
  const [pageSize1, setPageSize1] = React.useState(8);
  const [page1, setPage1] = React.useState(1);
  const pageSizes = [8, 20, 50, 100, 200];
  const totalElements = 100;

  return (
    <Modal dimension="xl" {...props}>
      <ModalTitle>Поиск записи</ModalTitle>
      <ModalContent>
        <T font="Caption/Caption 1">Введите условия поиска</T>
        <Styled.SearchParamsContainer>
          <Styled.SearchParams>
            <Styled.FormField>
              <Label>Поиск</Label>
              <SelectField
                mode="searchSelect"
                value={selectValue}
                onInputChange={handleInputChange}
                onChange={onSelectChange}
                placeholder="Процесс"
                displayClearIcon
                onClearIconClick={onClearSelect}
                dimension="s"
              >
                {renderOptions(OPTIONS_SIMPLE)}
              </SelectField>
            </Styled.FormField>

            <Styled.FormField>
              <Label>Искать в</Label>
              <SelectField
                defaultValue={OPTIONS_SIMPLE2[0]}
                onChange={onSelect2Change}
                placeholder="Раздел"
                dimension="s"
              >
                {renderOptions(OPTIONS_SIMPLE2)}
              </SelectField>
            </Styled.FormField>

            <Styled.FormField>
              <Label>Поиск</Label>
              <InputField
                onChange={onInputChange}
                value={inputValue}
                placeholder=""
                dimension="s"
                icons={
                  <IconButton
                    onClick={handleSearch}
                    loading={isSearchInProgress}
                    dimension="s"
                  >
                    <SearchOutlineDefault />
                  </IconButton>
                }
              />
            </Styled.FormField>
          </Styled.SearchParams>
          <Styled.Divider />
          <Styled.SearchParams
            css={css`
              width: 100%;
            `}
          >
            <CheckboxField dimension="s">
              Отображать только мои записи
            </CheckboxField>

            <DateField
              type="date-range"
              id="dateRange1"
              placeholder={"Введите отрезок времени"}
              css={css`
                margin-top: 1rem;
              `}
            />
          </Styled.SearchParams>
        </Styled.SearchParamsContainer>
        <Styled.TableSection>
          <Table
            rowList={rows}
            columnList={cols}
            displayRowSelectionColumn
            onRowSelectionChange={handleSelectionChange}
            onColumnResize={handleResize}
            onSortChange={handleSort}
          />
          <PaginationOne
            onChange={({ page, pageSize }) => {
              setPage1(page);
              setPageSize1(pageSize);
            }}
            style={{ marginTop: "0.5rem" }}
            page={page1}
            pageSize={pageSize1}
            totalItems={totalElements}
            pageSizes={pageSizes}
          />
        </Styled.TableSection>
      </ModalContent>
      <ModalButtonPanel>
        <Button appearance="secondary" dimension="s" disabled>
          Удалить значения
        </Button>
        <Button appearance="secondary" dimension="s" onClick={onClose}>
          Отмена
        </Button>
        <Button appearance="primary" dimension="s" onClick={onClose}>
          Добавить
        </Button>
      </ModalButtonPanel>
    </Modal>
  );
};
