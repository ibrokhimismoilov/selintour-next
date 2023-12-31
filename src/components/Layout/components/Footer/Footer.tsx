import { memo } from "react";
import classes from "./Footer.module.scss";

export const Footer = memo(() => {
  return (
    <footer className={classes.footer}>
      <h1>Footer</h1>
    </footer>
  );
});
