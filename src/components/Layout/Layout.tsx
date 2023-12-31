import { ReactNode } from "react";
import classes from "./Layout.module.scss";
import { Footer, Header } from "./components";

interface IProps {
  children: ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <>
      <div className={classes.mainLayout}>
        <Header />
        <main className={classes.mainContent}>{children}</main>
        <Footer />
      </div>
    </>
  );
};
