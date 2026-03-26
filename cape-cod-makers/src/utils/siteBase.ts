const raw = import.meta.env.BASE_URL;
export const siteBase = raw.endsWith('/') ? raw : raw + '/';
