import { getAllDocs } from '$lib/docs.js';

export function load() {
	return { docs: getAllDocs() };
}