import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BackgroundTransition = () => {
  const location = useLocation();
  const [prevPath, setPrevPath] = useState(location.pathname);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<"to-white" | "to-black" | null>(null);

  useEffect(() => {
    if (location.pathname !== prevPath) {
      const isDarkPage = (path: string) => 
        path === "/" || path === "/law-firms";
      const isLightPage = (path: string) => 
        path === "/clients";

      const fromDark = isDarkPage(prevPath);
      const toDark = isDarkPage(location.pathname);
      const fromLight = isLightPage(prevPath);
      const toLight = isLightPage(location.pathname);

      if (fromDark && toLight) {
        setDirection("to-white");
        setIsTransitioning(true);
      } else if (fromLight && toDark) {
        setDirection("to-black");
        setIsTransitioning(true);
      }

      setPrevPath(location.pathname);
    }
  }, [location.pathname, prevPath]);

  const handleAnimationEnd = () => {
    setIsTransitioning(false);
    setDirection(null);
  };

  if (!isTransitioning || !direction) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-40 pointer-events-none ${
        direction === "to-white" 
          ? "animate-bg-black-to-white" 
          : "animate-bg-white-to-black"
      }`}
      onAnimationEnd={handleAnimationEnd}
    />
  );
};

export default BackgroundTransition;
