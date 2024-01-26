import { twJoin } from "tailwind-merge";
import { josefinSans } from "@/utils/fonts";

import "@app/globals.css";
import { ThemeProvider } from "@/providers/theme";

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background antialiased h-fit pb-14">
        <ThemeProvider defaultTheme="dark" enableSystem attribute="class">
          <div
            id="body-vaul-drawer-wrapper"
            // vaul-drawer-wrapper=""
          // className
          >
            <main
              className={twJoin(
                "bg-background transition-colors text-textColor container max-w-6xl",
                "p-4 mx-auto md:p-4",
                "min-h-[100vh] bg-background",
                josefinSans.className,
              )}
            >
              {children}
              {authModal}
            </main>
            <div id="modal-root" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
