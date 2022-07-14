import * as React from "react";
import { hot } from "react-hot-loader/root";
import { useSelector } from "react-redux";
import styles from "./App.module.css";
import LeftMenu from "./LeftMenu";
import { Page } from "./model/Page";
import { RootState } from "./store/Store";
import TopMenu from "./TopMenu";
import ExportTheme from "./ui/ExportTheme";
import Preview from "./ui/Preview";

const App = () => {
  const page = useSelector((state: RootState) => state.editor.page);

  return (
    <div className={styles.container}>
      <TopMenu />
      <div className={styles.main}>
        <LeftMenu />
        {getPage(page)}
      </div>
    </div>
  );
};

const getPage = (page: Page) => {
  switch (page) {
    case Page.Code:
      return <ExportTheme />;
    case Page.Preview:
    default:
      return <Preview />;
  }
};

export default hot(App);
