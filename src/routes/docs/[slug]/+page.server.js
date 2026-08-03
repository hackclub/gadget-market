import { error } from '@sveltejs/kit';
import { getDocBySlug } from '$lib/docs.js';

export function load({ params }) {
	const doc = getDocBySlug(params.slug);
	if (!doc) throw error(404, 'Page not found');
	return { doc };
}