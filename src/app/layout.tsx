/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of Hackr News.
 *
 * Hackr News is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Hackr News is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Hackr News. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * chris.machine@pm.me
 */

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

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto container p-4 h-[100dvh]">
      {children}
    </div>
  );
}
