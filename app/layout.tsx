import { cookies } from "next/headers";
import Header from "./components/Header/Header";
import Providers from "./context/providers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let theme = "";
  const cookieStore = cookies();

  if (cookieStore.has("theme")) theme = cookieStore.get("theme")?.value || "";
  if (theme === "system") {
    // WARNING: this is wrong ..
    theme = cookieStore.get("themePreference")?.value || "";

  }

  return (
    <html lang="en" className={theme}>
      <head />
      <Providers>
        <body className="min-h-screen txt-color relative">
          <Header />
          {/* <body className="container relative flex flex-col mx-auto min-h-screen"> */}
          <main className="container body-content mx-auto h-full pt-6 px-4">
            {children}
          </main>
        </body>
      </Providers>
    </html>
  );
}
