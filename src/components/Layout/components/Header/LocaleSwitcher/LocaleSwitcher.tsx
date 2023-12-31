import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/config";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale {locale}", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
