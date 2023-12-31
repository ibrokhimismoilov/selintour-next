import { memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MenuOutlined, LoginOutlined } from "@ant-design/icons";

import classes from "./Header.module.scss";
import { Language, Menus } from "./components";
import { AntButton, Container } from "@/components";

import Logo from "@/assets/images/svg/logo-head.svg";

const Header = memo(() => {
	const { t } = useTranslation();

	return (
		<header className={classes.header}>
			<Container>
				<div className={classes.inner}>
					<Link to={"/"} className={classes.logo}>
						<Logo />
					</Link>

					<div className={classes.right}>
						<Menus />

						<Language />

						<AntButton className={classes.btn} size="large" isRounded path={"/contact"} endIcon={<LoginOutlined />}>
							{t("LOG IN")}
						</AntButton>

						<AntButton className={classes.toggle} isRounded={false} style={{ borderRadius: 4 }} startIcon={<MenuOutlined />} />
					</div>
				</div>
			</Container>
		</header>
	);
});

export default Header;
