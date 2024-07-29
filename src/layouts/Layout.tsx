// src/layouts/MainLayout.tsx
import React, { ReactNode } from "react";
import { Header } from "../components/header";

interface MainLayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="p-4">{children}</div>
    </>
  );
};
