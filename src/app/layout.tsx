import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import StarBackground from "@/components/background-stars";
import { Toaster } from "sonner";
import AppProvider from "@/components/providers/app-provider";
import appMetadata from "@/lib/app-metadata";
import { Inter  } from "next/font/google";

export const metadata = appMetadata;

const InterFont = Inter ({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${InterFont.className}`}>
        <AppProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
            <StarBackground />
            <Toaster />
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
