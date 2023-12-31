import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

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
