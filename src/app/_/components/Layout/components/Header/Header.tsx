import Link from "next/link";
import { useTranslations } from "next-intl";
import { MenuOutlined, LoginOutlined } from "@ant-design/icons";

import classes from "./Header.module.scss";
import { Language } from "./components";
import { AntButton, Container } from "@/app/_/components";

// import Logo from "@/assets/images/svg/logo-head.svg";

export const Header = () => {
  const t = useTranslations();

  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <Link href={"/"} className={classes.logo}>
            Logo
            {/* <Logo /> */}
          </Link>

          <div className={classes.right}>
            {/* <Menus /> */}

            <Language />

            <AntButton
              className={classes.btn}
              size="large"
              isRounded
              path={"/contact"}
              endIcon={<LoginOutlined />}
            >
              {t("LOG IN")}
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
