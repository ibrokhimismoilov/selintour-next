"use client";

import { get } from "lodash";
import Link from "next/link";
import { MenuProps } from "antd";
import { useContext } from "react";
import { usePathname } from "@/navigation";
import { ItemType } from "antd/es/menu/hooks/useItems";

import { Dropdown } from "_/components";
import { MainContext } from "_/context";
import { defaultLocale } from "@/config";
import classes from "./Language.module.scss";

export const Language = () => {
  const { locale } = useContext(MainContext);
  const pathname = usePathname();

  console.log("pathname", pathname);

  const items: MenuProps["items"] = [
    {
      key: "en",
      label: (
        <Link href={pathname} locale={locale}>
          ENG
        </Link>
      ),
    },
    {
      key: "ru",
      label: (
        <Link href={pathname} locale={locale}>
          РУС
        </Link>
      ),
    },
    {
      key: "uz",
      label: (
        <Link href={pathname} locale={locale}>
          UZB
        </Link>
      ),
    },
  ];

  const selected = get(
    items.find((_i: ItemType) => _i?.key === locale),
    "label",
    defaultLocale
  );

  return (
    <div className={classes.lang}>
      <Dropdown
        menu={{ items, selectable: true, defaultSelectedKeys: [locale] }}
        selected={selected}
      />
    </div>
  );
};
