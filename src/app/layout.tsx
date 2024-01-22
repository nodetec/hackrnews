import { twJoin } from "tailwind-merge";
import { josefinSans } from "@/utils/fonts";
import { cookies } from "next/headers";
import SystemThemeLoader from "@/components/system-theme-loader";

import "@app/globals.css";

export default function RootLayout({
  children,
  authModal,
}: {
  children: React.ReactNode;
  authModal: React.ReactNode;
}) {
  const theme = cookies().get("theme")?.value ?? "system";

  return (
    <html lang="en" className={theme}>
      <body
        className={twJoin(
          "bg-background transition-colors p-2 mx-auto md:p-4 text-textColor container max-w-6xl",
          josefinSans.className,
        )}
      >
        <SystemThemeLoader theme={theme} />
        {children}
        {authModal}
        <div id="modal-root" />
      </body>
    </html>
  );
}
