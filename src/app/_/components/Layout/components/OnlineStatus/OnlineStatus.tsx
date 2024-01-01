"use client";

import { notification } from "antd";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

import { useOnlineStatus } from "@/hooks/custom";

const OnlineStatus = () => {
  const t = useTranslations("OnlineStatus");
  const checkDidMount = useRef(true);
  const isOnline = useOnlineStatus();
  const [api, contextHolder] = notification.useNotification();

  useEffect(() => {
    if (checkDidMount.current) {
      checkDidMount.current = false;
      return;
    }

    if (isOnline) {
      api.success({
        message: t("Интернет подключен"),
        placement: "top",
      });
    } else {
      api.warning({
        message: t("Интернет не работает"),
        placement: "top",
      });
    }
  }, [isOnline, api, t]);

  return contextHolder;
};

export default OnlineStatus;
