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
      <body className="bg-background antialiased">
        <ThemeProvider defaultTheme="dark" attribute="class">
          <div
            vaul-drawer-wrapper="bg-white"
            className="min-h-[100vh] bg-background"
          >
            <main
              className={twJoin(
                "bg-background transition-colors text-textColor container max-w-6xl",
                "p-4 mx-auto md:p-4",
                "h-screen",
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
