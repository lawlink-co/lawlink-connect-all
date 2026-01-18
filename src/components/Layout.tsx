import { ReactNode } from "react";
import ModernNavigation from "./ModernNavigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <ModernNavigation />
      {children}
    </>
  );
};

export default Layout;