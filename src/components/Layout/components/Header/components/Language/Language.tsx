import { get } from "lodash";
import { MenuProps } from "antd";
import { useTranslation } from "react-i18next";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { memo, useEffect, useMemo, useState } from "react";

import classes from "./Language.module.scss";
import { Dropdown } from "@/components";

import "@/services/i18n";

const defaultLang = "en";
const storageKey = "i18nextLng";
const langs = ["en", "ru", "uz"];

const Language = () => {
	const { i18n } = useTranslation();
	const [lang, setLang] = useState(defaultLang);

	useEffect(() => {
		const loacleLang = localStorage.getItem(storageKey) ?? defaultLang;
		document.querySelector("html")?.setAttribute("lang", loacleLang);

		if (localStorage.getItem(storageKey) && langs?.includes(localStorage.getItem(storageKey) as string)) setLang(localStorage.getItem(storageKey) as string);
		else {
			setLang(defaultLang);
			localStorage.setItem(storageKey, defaultLang);
		}
	}, []);

	const changeLang = (key: string) => {
		setLang(key);
		i18n.changeLanguage(key);
		document.querySelector("html")?.setAttribute("lang", key);
	};

	const items: MenuProps["items"] = useMemo(
		() => [
			{
				key: "en",
				onClick: () => changeLang("en"),
				label: "ENG"
			},
			{
				key: "ru",
				onClick: () => changeLang("ru"),
				label: "РУС"
			},
			{
				key: "uz",
				onClick: () => changeLang("uz"),
				label: "UZB"
			}
		],
		[]
	);

	const selected = get(
		items.find((_i: ItemType) => _i?.key === lang),
		"label",
		defaultLang
	);

	return (
		<div className={classes.lang}>
			<Dropdown menu={{ items, selectable: true, defaultSelectedKeys: [lang] }} selected={selected} />
		</div>
	);
};

export default memo(Language);
