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

function slugifyHeading(text) {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^a-z0-9\s-]/g, '')
		.replace(/\s+/g, '-')
		.replace(/-+/g, '-');
}

// Give every rendered heading an id, so sidebar subheading links can
// jump straight to it with an anchor (#id).
marked.use({
	renderer: {
		heading({ tokens, depth, text }) {
			const id = slugifyHeading(text);
			return `<h${depth} id="${id}">${this.parser.parseInline(tokens)}</h${depth}>\n`;
		}
	}
});

// Controls sidebar/listing order. Slugs not listed here are appended
// alphabetically after these.
const DOC_ORDER = [
	'start',
	'design-requirements',
	'submit',
	'list',
	'trade',
	'mail',
	'skip',
	'prizes',
	'pcb-art'
];

function orderIndex(slug) {
	const i = DOC_ORDER.indexOf(slug);
	return i === -1 ? DOC_ORDER.length : i;
}

function parseDoc(raw) {
	const tokens = marked.lexer(raw);
	const firstHeading = tokens.find((t) => t.type === 'heading');
	// ## headings become the subheading list shown under a doc in the sidebar
	const headings = tokens
		.filter((t) => t.type === 'heading' && t.depth === 2)
		.map((t) => ({ id: slugifyHeading(t.text), text: t.text }));
	return { tokens, title: firstHeading?.text, headings };
}

export function getAllDocs() {
	return Object.entries(docFiles)
		.map(([path, raw]) => {
			const slug = slugify(path);
			const { title, headings } = parseDoc(raw);
			return { slug, title: title ?? slug, headings };
		})
		.sort((a, b) => orderIndex(a.slug) - orderIndex(b.slug) || a.slug.localeCompare(b.slug));
}

export function getDocBySlug(slug) {
	const entry = Object.entries(docFiles).find(([path]) => slugify(path) === slug);
	if (!entry) return null;

	const [, raw] = entry;
	const { tokens, title, headings } = parseDoc(raw);
	const html = marked.parser(tokens);

	return { slug, title: title ?? slug, html, headings };
}
