import LazyAppProviders from "../components/PDFViewer/LazyAppProviders";

import Header from "./Header";
import Footer from "./Footer";

const styles = {
  root: `
    pt-3
  `,
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LazyAppProviders licenseKey="your-license-key">
      <div className={styles.root}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </LazyAppProviders>
  );
};

export default Layout;
