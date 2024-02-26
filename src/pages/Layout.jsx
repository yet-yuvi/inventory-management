import React from "react";
import { CartProvider } from "../contexts";
import { Footer, Navbar } from "../components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </CartProvider>
      <Footer />
    </div>
  );
};