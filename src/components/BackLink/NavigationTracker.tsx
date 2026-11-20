"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { recordNavigation, rememberScroll, takeScrollRestore } from "./history";

/**
 * Tracks client-side navigation and scroll positions so BackLink can return the
 * visitor to exactly where they were. Renders nothing.
 */
export function NavigationTracker() {
  const pathname = usePathname();
  const lastPathname = useRef(pathname);

  useEffect(() => {
    if (pathname !== lastPathname.current) {
      recordNavigation(lastPathname.current);
      lastPathname.current = pathname;
    }

    // Returning via BackLink: reapply the saved position once the page has laid out.
    const saved = takeScrollRestore(pathname);
    const timers: number[] = [];
    if (saved !== undefined) {
      const restore = () => window.scrollTo({ top: saved, behavior: "instant" });
      requestAnimationFrame(() => requestAnimationFrame(restore));
      timers.push(window.setTimeout(restore, 350));
    }

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => rememberScroll(pathname, window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      timers.forEach(window.clearTimeout);
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
}
