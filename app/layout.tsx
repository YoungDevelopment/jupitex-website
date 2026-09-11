import { Geist, Geist_Mono, Figtree } from "next/font/google"
import type { Metadata } from "next"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Jupitex",
  description: "Automations and AI for Debt Collections Agencies",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/Logo/tab-logo-light.png",
        href: "/Logo/tab-logo-light.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/Logo/tab-logo-dark.png",
        href: "/Logo/tab-logo-dark.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased snap-y snap-mandatory", fontMono.variable, "font-sans", figtree.variable)}
    >
      <body>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
