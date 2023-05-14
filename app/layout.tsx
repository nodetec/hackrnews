import Header from "./components/Header/Header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head />
      <body className="min-h-screen txt-color relative">
        <Header />
        {/* <body className="container relative flex flex-col mx-auto min-h-screen"> */}
        <main className="container body-content mx-auto h-full pt-6 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
