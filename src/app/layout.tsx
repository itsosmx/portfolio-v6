import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import StarBackground from "@/components/background-stars";
import { Toaster } from "sonner";
import AppProvider from "@/components/providers/app-provider";
import appMetadata from "@/lib/app-metadata";

export const metadata = appMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
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
