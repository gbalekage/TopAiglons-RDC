import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/global/theme-provider";

export const metadata: Metadata = {
  title: "TopAiglons - RDC",
  description:
    " Cette solution s'adresse aux particuliers, entreprises et organisations.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
