import { ThemeProvider } from "@/components/providers/theme.provider";
import "./globals.css";

import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import QueryProvider from "@/components/providers/query.provider";
import { Toaster } from "@/components/ui/toaster";
import SessionProvider from "@/components/providers/session.provider";

const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700", "300"],
  subsets: ["latin"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Telegram web",
  description: "Telegram web application clone created by umidjon.site",
  icons: { icon: "/logo.svg" },
  openGraph: {
    title: "Telegram web",
    description: "Telegram web application clone created by umidjon.site",
    url: "https://umidjon.site",
    siteName: "Telegram web",
    images: [
      {
        url: "https://hj5qluopyg.ufs.sh/f/jj4hygQsMBnwd8ymbPaoglR7jvVmd3qOoD5n2r4iuMBLNFPf",
        width: 1200,
        height: 630,
        alt: "Telegram web",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telegram web",
    description: "Telegram web application clone created by umidjon.site",
    images: ["/og-image.png"],
    creator: "@umidjon_site",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
      <QueryProvider>
        <html lang="en" suppressHydrationWarning>
          <body
            className={`${spaceGrotesk.variable} antialiased sidebar-custom-scrollbar`}
            suppressHydrationWarning
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <main>{children}</main>
              <Toaster />
            </ThemeProvider>
          </body>
        </html>
      </QueryProvider>
    </SessionProvider>
  );
}
