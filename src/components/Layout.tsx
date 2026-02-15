import { ReactNode, useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with specified settings
    lenisRef.current = new Lenis({
      duration: 1.2,
      wheelMultiplier: 0.7,
      smoothWheel: true,
    });

    // RequestAnimationFrame loop
    function raf(time: number) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default Layout;