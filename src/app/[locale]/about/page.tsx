import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import React from "react";

const About = () => {
  const t = useTranslations();

  return (
    <div>
      <h1>{t("About")}</h1>
      <Link href={"/"}>{t("home")}</Link>
    </div>
  );
};

export default About;
