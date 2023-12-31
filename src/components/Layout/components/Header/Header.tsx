import { memo } from "react";

import classes from "./Header.module.scss";

const Header = memo(() => {
  return (
    <header className={classes.header}>
      <h1>Header</h1>
    </header>
  );
});

export default Header;
