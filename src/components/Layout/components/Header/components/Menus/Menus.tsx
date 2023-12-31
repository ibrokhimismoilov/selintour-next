import { useMemo } from "react";
import { Menu, Space } from "antd";
import type { MenuProps } from "antd";
import { useTranslation } from "react-i18next";
import { DownOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";

import classes from "./Menus.module.scss";

const Menus = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const items: MenuProps["items"] = [
		{
			key: "/",
			label: t("Home"),
			onClick: () => navigate("/")
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
					onClick: () => navigate("/services/tourism")
				},
				{
					key: "/services/cargo",
					label: t("Cargo"),
					onClick: () => navigate("/services/cargo")
				},
				{
					key: "/services/visa",
					label: t("Visa Service"),
					onClick: () => navigate("/services/visa")
				},
				{
					key: "/services/insurance",
					label: t("Insurance Service"),
					onClick: () => navigate("/services/insurance")
				},
				{
					key: "/services/plane-tickets",
					label: t("Plane Tickets"),
					onClick: () => navigate("/services/plane-tickets")
				}
			]
		},
		{
			key: "/list-countries",
			label: t("List of Countries"),
			onClick: () => navigate("/list-countries")
		},
		{
			key: "/destinations",
			label: t("Destinations"),
			onClick: () => navigate("/destinations")
		},
		{
			key: "/about",
			label: t("About"),
			onClick: () => navigate("/about")
		},
		{
			key: "/contact",
			label: t("Contact"),
			onClick: () => navigate("/contact")
		}
	];

	const selectedKeys = useMemo(() => {
		const paths = pathname.split("/");
		if (paths.length > 2) return [[paths[0], paths[1]].join("/"), pathname];
		return [pathname];
	}, [pathname]);

	return (
		<div className={classes.menus}>
			<Menu mode="horizontal" defaultOpenKeys={selectedKeys} selectedKeys={selectedKeys} items={items} />
		</div>
	);
};

export default Menus;
