
import { JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";


import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Toaster } from "sonner";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-lo-sans",
}) 


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontSans.variable, "lo-sans" )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster position="top-right"/>
      </body>
    </html>
  )
}
