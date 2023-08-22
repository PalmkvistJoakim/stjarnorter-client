import { ReactNode, createContext, useEffect, useState } from "react";

export const ResizeContext = createContext({
  isDesktop: window.innerWidth >= 1024,
  isIpad: window.innerWidth >= 768 && window.innerWidth <= 1023,
  isMobile: window.innerWidth <= 1023,
});

export const ResizeProvider = ({ children }: { children: ReactNode }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [isIpad, setIsIpad] = useState(
    window.innerWidth >= 768 && window.innerWidth <= 1023
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1023);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1024);
    setIsIpad(window.innerWidth >= 768 && window.innerWidth <= 1023);
    setIsMobile(window.innerWidth <= 1023);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ResizeContext.Provider value={{ isDesktop, isIpad, isMobile }}>
      {children}
    </ResizeContext.Provider>
  );
};
