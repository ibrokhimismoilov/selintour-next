import Link from "next/link";
import { useTranslations } from "next-intl";
import { MenuOutlined, LoginOutlined } from "@ant-design/icons";

import classes from "./Header.module.scss";
import { Language, Menus } from "./components";
import { AntButton, Container } from "@/app/_/components";
import Image from "next/image";

import Logo from "@/assets/images/svg/logo-head.svg";

export const Header = () => {
  const t = useTranslations();

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <Link href={"/"} className={classes.logo}>
            <Image src={Logo} width={154} height={37} alt="logo" />
          </Link>

          <div className={classes.right}>
            <Menus />

            <Language />

            <AntButton
              className={classes.btn}
              size="large"
              isRounded
              path={"/contact"}
              endIcon={<LoginOutlined />}
            >
              {t("Log In")}
            </AntButton>

            <AntButton
              className={classes.toggle}
              isRounded={false}
              style={{ borderRadius: 4 }}
              startIcon={<MenuOutlined />}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};
