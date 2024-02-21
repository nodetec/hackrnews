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
      <body id="root" className="body-gradient2 antialiased">
        <ThemeProvider defaultTheme="system" attribute="class">
          <main
            className={twJoin(
              "text-textColor",
              "transition-colors duration-200 ease-linear",
              josefinSans.className,
            )}
          >
            <Container>
              {children}
              {authModal}
            </Container>
          </main>
          <div id="modal-root" />
        </ThemeProvider>
      </body>
    </html>
  );
}

function Container({ children }: { children: React.ReactNode[] }) {
  return (
    <div className="max-w-6xl mx-auto container p-4 min-h-[100dvh]">
      {children}
    </div>
  );
}
