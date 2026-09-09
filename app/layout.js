import RegisterSW from "@/components/RegisterSW";
import "./globals.css";

export const metadata = {
  title: "روبات مارکت",
  description: "لینک‌های روبات مارکت در یک صفحه",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icons/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icons/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "روبات مارکت",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0f0e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <div className="page-bg" aria-hidden="true" />
        {children}
        <RegisterSW />
      </body>
    </html>
  );
}
