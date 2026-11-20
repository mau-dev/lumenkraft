// In-site navigation memory for BackLink: whether the visitor has moved between
// pages during this visit, where they came from, and how far down each page they were.

let navigatedInApp = false;
let previousPathname: string | null = null;
let pendingRestore: string | null = null;
const scrollPositions = new Map<string, number>();

export function recordNavigation(from: string) {
  navigatedInApp = true;
  previousPathname = from;
}

export function hasInAppHistory(): boolean {
  return navigatedInApp;
}

export function rememberScroll(pathname: string, y: number) {
  scrollPositions.set(pathname, y);
}

/** Called by BackLink just before going back. */
export function requestScrollRestore() {
  pendingRestore = previousPathname;
}

/** Returns the saved position if a restore was requested for this page. */
export function takeScrollRestore(pathname: string): number | undefined {
  if (pendingRestore !== pathname) return undefined;
  pendingRestore = null;
  return scrollPositions.get(pathname);
}
