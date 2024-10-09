import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ flex: "1" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
