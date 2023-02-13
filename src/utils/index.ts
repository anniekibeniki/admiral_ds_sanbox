import { Column } from "@admiral-ds/react-ui";
import { SearchFormat } from "@admiral-ds/react-ui/dist/components/input/Select/types";

export const shouldRender = (
  text = "",
  searchValue = "",
  searchFormat: SearchFormat = "wholly"
) => {
  const strings =
    searchFormat === "word" ? searchValue.split(" ") : [searchValue];
  const chunks = strings.filter(Boolean).map((chunk) => chunk.toLowerCase());

  const specialCharacters = [
    "[",
    "]",
    "\\",
    "^",
    "$",
    ".",
    "|",
    "?",
    "*",
    "+",
    "(",
    ")",
  ];

  const pattern = chunks
    .map((chunk) => {
      const chunkForRegExp = chunk
        .split("")
        .map((letter) =>
          specialCharacters.includes(letter) ? `\\${letter}` : letter
        )
        .join("");
      return `(${chunkForRegExp})?`;
    })
    .join("");

  const parts = text.split(new RegExp(pattern, "gi")).filter(Boolean);

  return !searchValue
    ? true
    : parts.some((part) => chunks.includes(part.toLowerCase()));
};

export const strToTime = (str: string) => {
  const res = str.split(".").reverse().join("-");
  return new Date(res).getTime();
};

export const getOrderedSortColumns = (columns: Array<Column>) => {
  const sortColumns = columns
    .filter((column) => !!column.sort)
    .sort((a, b) => {
      return (a.sortOrder || 0) - (b.sortOrder || 0);
    });

  return sortColumns.reduce((acc, currentValue: Column) => {
    if (currentValue.sort) acc[currentValue.name] = currentValue.sort;
    return acc;
  }, {});
};
