import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { Toaster } from "sonner";
import { ModalProvider } from "@/components/providers/modal-provider";

export const metadata: Metadata = {
  title: "Murion",
  description: "Пространство, которое позволяет работать эффективнее и быстрее",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/brain.svg",
        href: "/brain.svg"
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/brain dark.svg",
        href: "/brain dark.svg"
      },
    ]
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <ConvexClientProvider>

        
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="murion-theme"
        >
          <Toaster position="bottom-center" />
          <ModalProvider />
        {children}
        </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
