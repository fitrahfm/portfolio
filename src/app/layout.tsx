import { Metadata } from "next";
import { grotesk } from "@/components/font";
import Layout from "@/components/layout";
import ThemeSwitch from "@/components/themeSwitch";
import NerdFace from "@/assets/icons/nerd-face.png";

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
    <html lang="en" className="fm-light">
      <body className={grotesk.variable} suppressHydrationWarning={true}>
        <ThemeSwitch theme="light" />
        <Layout main={children} />
      </body>
    </html>
  );
}
