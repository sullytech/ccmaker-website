import ical from 'node-ical';

export interface MeetupEvent {
  uid: string;
  title: string;
  description: string;
  location: string;
  date: Date;
  endDate: Date | null;
  url: string;
}

const ICAL_URL = 'https://www.meetup.com/cape-cod-makers/events/ical/';

export async function getMeetupEvents(): Promise<MeetupEvent[]> {
  try {
    const events = await ical.async.fromURL(ICAL_URL);

    return Object.values(events)
      .filter((e): e is ical.VEvent => e.type === 'VEVENT')
      .map(e => ({
        uid: String(e.uid ?? ''),
        title: String(e.summary ?? 'Untitled Event'),
        description: stripHtml(String(e.description ?? '')),
        location: String(e.location ?? '204 Sisson Road, Harwich, MA 02645'),
        date: e.start instanceof Date ? e.start : new Date(e.start),
        endDate: e.end instanceof Date ? e.end : e.end ? new Date(e.end) : null,
        url: extractUrl(e.url),
      }))
      .filter(e => e.date >= new Date())
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  } catch (err) {
    console.error('Failed to fetch Meetup events:', err);
    return [];
  }
}

function extractUrl(url: unknown): string {
  const fallback = 'https://www.meetup.com/cape-cod-makers/events/';
  if (!url) return fallback;
  if (typeof url === 'string') return url;
  if (typeof url === 'object') {
    const obj = url as Record<string, unknown>;
    if (typeof obj.val === 'string') return obj.val;
    if (typeof obj.href === 'string') return obj.href;
  }
  return fallback;
}

function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').trim();
}
