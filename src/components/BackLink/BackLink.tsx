"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { hasInAppHistory, requestScrollRestore } from "./history";

type BackLinkProps = {
  /** Where to go when there is no in-site history, e.g. after opening a shared link. */
  fallbackHref?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Goes back like the browser's back button when the visitor came from within
 * the site — same place, same scroll position, clean URL. Otherwise it links
 * to the fallback page.
 */
export function BackLink({ fallbackHref = "/", className, children }: BackLinkProps) {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
    if (modified || !hasInAppHistory()) return;
    event.preventDefault();
    requestScrollRestore();
    router.back();
  };

  return (
    <Link href={fallbackHref} className={className} onClick={handleClick} transitionTypes={["nav-back"]}>
      {children}
    </Link>
  );
}
