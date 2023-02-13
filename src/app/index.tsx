import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import {
  LIGHT_THEME,
  DropdownProvider,
  FontsVTBGroup,
  ToastProvider,
  Toast,
} from "@admiral-ds/react-ui";

import "normalize.css";
import { TopMenu } from "components/TopMenu/TopMenu";
import { ClientPage } from "pages/ClientPage/ClientPage";

const App: FC = () => {
  return (
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        <ToastProvider autoDeleteTime={2000}>
          <Toast style={{ top: 30, right: 30, width: "initial" }} />
          <TopMenu />
          <ClientPage />
        </ToastProvider>
      </DropdownProvider>
    </ThemeProvider>
  );
};

export default App;
