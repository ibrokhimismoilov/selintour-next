import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

import { Container } from "_/components";
import classes from "./Footer.module.scss";

import Logo from "@/assets/images/svg/logo-foot.svg";
import Menu1 from "@/assets/images/svg/footer-menu-location.svg";
import Menu2 from "@/assets/images/svg/footer-menu-phone.svg";
import Menu3 from "@/assets/images/svg/footer-menu-mail.svg";
import Social1 from "@/assets/images/svg/footer-socials-telegram.svg";
import Social2 from "@/assets/images/svg/footer-socials-instagram.svg";
import Social3 from "@/assets/images/svg/footer-socials-youtube.svg";
import Social4 from "@/assets/images/svg/footer-socials-facebook.svg";

export const Footer = () => {
  const t = useTranslations();

  const socials = [
    { id: 1, img: Social1, link: "https://t.me/selintour" },
    { id: 2, img: Social2, link: "https://instagram.com/selintour" },
    { id: 3, img: Social3, link: "https://youtube.com/c/selintour" },
    { id: 4, img: Social4, link: "https://facebook.com/selintour" },
  ];

  const nav1 = [
    { id: 1, title: t("Home"), path: "/" },
    { id: 2, title: t("List of Countries"), path: "/list-countries" },
    { id: 3, title: t("Destinations"), path: "/destinations" },
    { id: 4, title: t("About"), path: "/about" },
    { id: 5, title: t("Contact"), path: "/contact" },
  ];

  const nav2 = [
    { id: 1, title: t("Tourism"), path: "/services/tourism" },
    { id: 2, title: t("Cargo"), path: "/services/cargo" },
    { id: 3, title: t("Visa Service"), path: "/services/visa" },
    { id: 4, title: t("Insurance Service"), path: "/services/insurance" },
    { id: 5, title: t("Plane Tickets"), path: "/services/plane-tickets" },
  ];

  const nav3 = [
    { id: 1, title: t("Log In"), path: "/" },
    { id: 2, title: t("Register"), path: "/" },
  ];

  return (
    <footer className={classes.footer}>
      <Container>
        <div className={classes.inner}>
          <div className={classes.head}>
            <div className={classes.left}>
              <Link href={"/"} className={classes.logo}>
                <Image priority src={Logo} alt="logo" />
              </Link>

              <nav className={classes.list}>
                <a href="/" target="_blank" className={classes.link}>
                  <Image src={Menu1} alt="addres" />
                  <span>{t("addres")}</span>
                </a>
                <a
                  href="mailto:info@selintour.us"
                  target="_blank"
                  className={classes.link}
                >
                  <Image src={Menu2} alt="tel" />
                  <span>{t("phone")}</span>
                </a>
                <a
                  href="tel:3479447186"
                  target="_blank"
                  className={classes.link}
                >
                  <Image src={Menu3} alt="email" />
                  <span>{t("email")}</span>
                </a>
              </nav>
            </div>

            <div className={classes.right}>
              <nav className={classes.nav}>
                <span className={classes.title}>{t("Navigation")}</span>

                {nav1.map((item) => (
                  <Link key={item.id} href={item.path} className={classes.link}>
                    {item.title}
                  </Link>
                ))}
              </nav>
              <nav className={classes.nav}>
                <span className={classes.title}>{t("Our Services")}</span>

                {nav2.map((item) => (
                  <Link key={item.id} href={item.path} className={classes.link}>
                    {item.title}
                  </Link>
                ))}
              </nav>
              <nav className={classes.nav}>
                <span className={classes.title}>{t("Account")}</span>

                {nav3.map((item) => (
                  <Link key={item.id} href={item.path} className={classes.link}>
                    {item.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
          <div className={classes.bottom}>
            <p className={classes.info}>{t("footer-bottom")}</p>

            <nav className={classes.socials}>
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  className={classes.link}
                >
                  <Image src={item.img} width={24} height={24} alt="" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </Container>
    </footer>
  );
};
