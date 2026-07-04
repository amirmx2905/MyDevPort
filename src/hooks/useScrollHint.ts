import { useEffect, useState } from "react";

export function useScrollHint(delay = 1600) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showHintTimer = window.setTimeout(() => {
      setIsVisible(true);
    }, delay);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.clearTimeout(showHintTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [delay]);

  return isVisible;
}
