import Footer from "./components/partials/footer";
import Header from "./components/partials/header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Header />
      <body>{children}</body>
      <Footer logo={undefined} brandName={""} mainLinks={[]} legalLinks={[]} />
    </html>
  );
}
