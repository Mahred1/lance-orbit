import "@/app/globals.css"
import React from "react"
import OauthButtons from "./OauthButtons"
import Header from "./header"
import { ThemeProvider } from "next-themes"

const layout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <main className="grid min-h-dvh min-w-dvh place-items-center">
            <div className="flex w-105 max-w-105 flex-col items-center gap-10 rounded-sm border border-gray-200 bg-gray-50 px-8 py-[72]">
              {/* Header */}
              <Header />

              {/* Container */}
              <div className="flex w-full flex-col gap-6">
                {/* oAuth */}
                <OauthButtons />
                {/* Line break */}

                <div className="flex w-full items-center gap-2">
                  <div className="h-0 w-full border-b-2 border-b-gray-200"></div>
                  <span className="text-lo-xs font-normal text-gray-300">
                    OR
                  </span>
                  <div className="h-0 w-full border-b-2 border-b-gray-200"></div>
                </div>

                {/* {Form} */}
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

export default layout
