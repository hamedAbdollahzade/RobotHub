"use client";

import { useEffect } from "react";

export default function RegisterSW() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
        navigator.serviceWorker.register(`${basePath}/sw.js`).catch(() => {
          // silent fail — app still works fully online
        });
      });
    }
  }, []);

  return null;
}
