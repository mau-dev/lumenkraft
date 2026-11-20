import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "LumenKraft",
  description:
    "LumenKraft — the creative practice of a multidisciplinary creator working across code, design, sound and movement.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
