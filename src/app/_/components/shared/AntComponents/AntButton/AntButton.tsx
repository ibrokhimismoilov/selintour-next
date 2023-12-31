"use client";

import { ReactNode } from "react";
import { useRouter } from "next/router";

import { Button, ButtonProps } from "antd";

import cn from "classnames";
import classes from "./Button.module.scss";

type Props = {
  path?: string;
  strictlyDisabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isRounded?: boolean;
  isDanger?: boolean;
  xl?: boolean;
  isLightPrimary?: boolean;
} & Omit<ButtonProps, "icon">;

export const AntButton = ({
  isLightPrimary,
  xl,
  path,
  children,
  className,
  startIcon,
  endIcon,
  disabled,
  strictlyDisabled,
  isRounded = true,
  isDanger = false,
  ...props
}: Props) => {
  const router = useRouter();

  return (
    <Button
      onClick={path ? () => router.push(path) : () => props.onClick}
      className={cn(
        classes.button,
        className,
        isRounded && classes.buttonRounded,
        isDanger && classes.buttonDanger,
        disabled && classes.buttonDisabled,
        xl && classes.xl,
        isLightPrimary && classes.lightPrimary
      )}
      disabled={disabled || strictlyDisabled}
      {...props}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </Button>
  );
};
