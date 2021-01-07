// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../_base";

export default async function handle(req, res) {
	const posts = await prisma.post.findMany({ include: { author: true } });
	let correctedPosts = posts.map((post) => {
		post.author = post.author.name;
		return post;
	});
	res.setHeader(
		"Cache-Control",
		"public, max-age=120, stale-while-revalidate=60",
	);
	res.json(correctedPosts);
}
