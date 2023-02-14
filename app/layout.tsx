import "../styles/globals.css";
import Providers from "./context/providers";
import Header from "./Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <Providers>
        <body className="container relative flex flex-col px-80 mx-auto min-h-screen">
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  );
}
