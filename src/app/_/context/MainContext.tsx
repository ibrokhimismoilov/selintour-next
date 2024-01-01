"use client";

import { ReactNode, createContext } from "react";

export const MainContext = createContext<any>({});

interface IProps {
  locale: string;
  children: ReactNode;
}

export const MainContextPriveder = ({ locale, children }: IProps) => {
  return (
    <MainContext.Provider value={{ locale }}>{children}</MainContext.Provider>
  );
};
