import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  // Initialize from matchMedia synchronously to avoid flash
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`).matches;
  });

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Debounced handler - only triggers state update after 150ms of no changes
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    
    const onChange = (e: MediaQueryListEvent) => {
      // Clear pending update
      if (timeoutId) clearTimeout(timeoutId);
      
      // Debounce: wait 150ms before committing state
      timeoutId = setTimeout(() => {
        setIsMobile(e.matches);
      }, 150);
    };
    
    mql.addEventListener("change", onChange);
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      mql.removeEventListener("change", onChange);
    };
  }, []);

  return isMobile;
}
