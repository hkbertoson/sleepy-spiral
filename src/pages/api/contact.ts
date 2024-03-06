import type {APIRoute} from 'astro';

export const GET: APIRoute = async ({request, locals}) => {
	console.log(locals);
	return new Response('Hello, world!');
};
