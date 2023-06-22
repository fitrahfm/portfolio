import { Metadata } from "next";
import NerdFace from "@/assets/icons/nerd-face.png";

import { grotesk } from "@/components/font";
import Layout from "@/components/layout";
import ThemeSwitch from "@/components/themeSwitch";
import { theme, themeWithPrefix } from "@/helpers/theme-changer";

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
    <html lang="en" className={themeWithPrefix}>
      <body className={grotesk.variable} suppressHydrationWarning={true}>
        <ThemeSwitch theme={theme} />
        <Layout main={children} />
      </body>
    </html>
  );
}
