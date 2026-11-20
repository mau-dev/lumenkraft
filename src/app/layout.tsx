import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LumenKraft",
  description:
    "LumenKraft — the creative practice of a multidisciplinary creator working across code, design, sound and movement.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
