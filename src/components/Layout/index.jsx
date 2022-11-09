import Footer from "./footer";
import Header from "./header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
