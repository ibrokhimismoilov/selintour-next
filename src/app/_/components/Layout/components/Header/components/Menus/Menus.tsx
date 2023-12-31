"use client";

import { useMemo } from "react";
import { Menu, Space } from "antd";
import type { MenuProps } from "antd";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { DownOutlined } from "@ant-design/icons";

import classes from "./Menus.module.scss";

export const Menus = () => {
  const t = useTranslations();
  const router = useRouter();
  const pathname = usePathname();

  const items: MenuProps["items"] = [
    {
      key: "/",
      label: t("Home"),
      onClick: () => router.push("/"),
    },
    {
      key: "/services",
      label: (
        <Space align="center">
          <span>{t("Our Services")}</span>
          <DownOutlined size={14} />
        </Space>
      ),
      children: [
        {
          key: "/services/tourism",
          label: t("Tourism"),
          onClick: () => router.push("/services/tourism"),
        },
        {
          key: "/services/cargo",
          label: t("Cargo"),
          onClick: () => router.push("/services/cargo"),
        },
        {
          key: "/services/visa",
          label: t("Visa Service"),
          onClick: () => router.push("/services/visa"),
        },
        {
          key: "/services/insurance",
          label: t("Insurance Service"),
          onClick: () => router.push("/services/insurance"),
        },
        {
          key: "/services/plane-tickets",
          label: t("Plane Tickets"),
          onClick: () => router.push("/services/plane-tickets"),
        },
      ],
    },
    {
      key: "/list-countries",
      label: t("List of Countries"),
      onClick: () => router.push("/list-countries"),
    },
    {
      key: "/destinations",
      label: t("Destinations"),
      onClick: () => router.push("/destinations"),
    },
    {
      key: "/about",
      label: t("About"),
      onClick: () => router.push("/about"),
    },
    {
      key: "/contact",
      label: t("Contact"),
      onClick: () => router.push("/contact"),
    },
  ];

  const selectedKeys = useMemo(() => {
    const paths = pathname.split("/");
    if (paths.length > 2) return [[paths[0], paths[1]].join("/"), pathname];
    return [pathname];
  }, [pathname]);

  return (
    <div className={classes.menus}>
      <Menu
        mode="horizontal"
        defaultOpenKeys={selectedKeys}
        selectedKeys={selectedKeys}
        items={items}
      />
    </div>
  );
};
