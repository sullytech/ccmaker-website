/**
 * Format a Date object for display in event listings and blog posts.
 * Always uses Eastern Time (America/New_York) since all events are on Cape Cod.
 */
export function formatDate(date: Date, includeTime = false): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/New_York',
  };

  if (includeTime) {
    options.hour = 'numeric';
    options.minute = '2-digit';
    options.timeZoneName = 'short';
  }

  return date.toLocaleDateString('en-US', options);
}

/**
 * Returns true if the date is in the future relative to now.
 */
export function isUpcoming(date: Date): boolean {
  return date.getTime() > Date.now();
}
