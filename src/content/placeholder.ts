const MARKER = "[Placeholder]";

/**
 * Marks copy that still needs to be written. It renders visibly on the site,
 * so unfinished text can never pass as real content.
 */
export function placeholder(note: string): string {
  return `${MARKER} ${note}`;
}

export function isPlaceholder(value: string | undefined): boolean {
  return value?.startsWith(MARKER) ?? false;
}
