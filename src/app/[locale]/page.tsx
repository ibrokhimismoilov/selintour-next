import { useTranslations } from "next-intl";
import Link from "next/link";

interface IProps {
  params: {
    lang: string;
  };
}

export default function Home({ params: { lang } }: IProps) {
  const t = useTranslations();

  return (
    <div>
      <h1>
        {t("title")} {lang}
      </h1>

      <Link href={"/about"}>{t("About")}</Link>
    </div>
  );
}
