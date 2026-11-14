import { Plus_Jakarta_Sans } from "next/font/google"

import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/ui/app-sidebar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { Toaster } from "sonner"

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
      className={cn("antialiased", fontSans.variable, "lo-sans")}
    >
      <body>
        <ThemeProvider>
          <SidebarProvider>
            <AppSidebar />

            <main>
              <SidebarTrigger />    
              {children}
            </main>
          </SidebarProvider>
        </ThemeProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
