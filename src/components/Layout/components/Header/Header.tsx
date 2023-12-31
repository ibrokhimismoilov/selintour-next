import classes from "./Header.module.scss";
import LocaleSwitcher from "./LocaleSwitcher";

export const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Header</h1>

      <LocaleSwitcher />
    </header>
  );
};
