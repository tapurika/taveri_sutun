import Header from "./Header";
import Footer from "./Footer";

const styles = {
  root: `
    pt-3
  `,
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
