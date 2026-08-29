import { site } from '$lib/data/site';

export const prerender = true;

const pages = ['/'];

export function GET() {
	const urls = pages
		.map((path) => `\t<url>\n\t\t<loc>${site.url}${path}</loc>\n\t</url>`)
		.join('\n');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
		{ headers: { 'content-type': 'application/xml' } }
	);
}
