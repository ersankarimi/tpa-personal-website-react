import Footer from "./footer";
import Header from "./header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-1 px-4 py-3 md:px-12 lg:py-4 xl:px-24 2xl:px-28">
        {children}
      </main>
      <Footer />
    </>
  );
}
