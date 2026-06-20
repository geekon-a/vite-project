// src/components/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Jakmile se změní cesta (URL), scrollni okno prohlížeče na samý začátek
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Tato komponenta nic nevykresluje, jen provádí akci na pozadí
}