import { Dropdown as DropdownMaker } from "antd";
import classes from "./Dropdown.module.scss";

interface IDropdown {
  menu: any;
  selected?: string;
}

export const Dropdown = ({ selected, menu }: IDropdown) => {
  return (
    <DropdownMaker menu={menu}>
      <a className={classes.linkStyle} onClick={(e) => e.preventDefault()}>
        {selected}
      </a>
    </DropdownMaker>
  );
};
