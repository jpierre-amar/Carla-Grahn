"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen flex flex-col texture-overlay">
      <Header />
      <main className={`flex-grow pt-20 md:pt-24 ${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
