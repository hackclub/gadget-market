import { marked } from 'marked';

// Vite feature: grabs all matching files at build time, as raw text
const docFiles = import.meta.glob('/src/lib/content/docs/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
});

// Turn "/src/lib/content/docs/getting-started.md" into "getting-started"
function slugify(path) {
	return path.split('/').pop().replace(/\.md$/, '');
}

export function getAllDocs() {
	return Object.entries(docFiles).map(([path, raw]) => {
		const slug = slugify(path);
		const firstLine = raw.split('\n').find((l) => l.trim().startsWith('#'));
		const title = firstLine ? firstLine.replace(/^#+\s*/, '') : slug;
		return { slug, title };
	});
}

export function getDocBySlug(slug) {
	const entry = Object.entries(docFiles).find(([path]) => slugify(path) === slug);
	if (!entry) return null;

	const [, raw] = entry;
	const html = marked(raw);
	const firstLine = raw.split('\n').find((l) => l.trim().startsWith('#'));
	const title = firstLine ? firstLine.replace(/^#+\s*/, '') : slug;

	return { slug, title, html };
}