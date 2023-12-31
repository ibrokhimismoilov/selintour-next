"use client";

import { get } from "lodash";
import Link from "next/link";
import { MenuProps } from "antd";
import { useRouter } from "next/router";
import { usePathname } from "@/navigation";
import { ItemType } from "antd/es/menu/hooks/useItems";

import { Dropdown } from "@/app/_/components";
import { defaultLocale } from "@/config";
import classes from "./Language.module.scss";

export const Language = () => {
  const { locale } = useRouter();
  const pathname = usePathname();

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
