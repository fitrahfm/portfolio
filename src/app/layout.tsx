import { theme } from "@/helpers/theme-changer";
import { Metadata } from "next";
import NerdFace from "@/assets/icons/nerd-face.png";

import { grotesk } from "@/components/font";
import Layout from "@/components/layout";
import ThemeSwitch from "@/components/theme-switch";

export const metadata: Metadata = {
  title: "Fitrah Munir - Front-End Developer",
  icons: NerdFace.src,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={"fm-" + theme}>
      <body className={grotesk.variable} suppressHydrationWarning={true}>
        <ThemeSwitch theme={theme} />
        <Layout main={children} />
      </body>
    </html>
  );
}
