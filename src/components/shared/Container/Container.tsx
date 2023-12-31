import cn from "classnames";
import { ReactNode } from "react";

import classes from "./Container.module.scss";

interface IProps {
  isFluid?: boolean;
  children: ReactNode;
  extraClass?: string;
}

export const Container = ({
  children,
  isFluid = false,
  extraClass = "",
}: IProps) => {
  return (
    <div
      className={cn(classes.container, isFluid && classes.isFluid, extraClass)}
    >
      {children}
    </div>
  );
};
