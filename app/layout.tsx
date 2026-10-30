import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Itô — Order from noise",
  description:
    "A quantitative trading firm for digital asset markets. Systematic by design, careful by conviction.",
  applicationName: "Itô",
  keywords: ["Itô", "quantitative trading", "digital assets", "systematic investing"],
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
