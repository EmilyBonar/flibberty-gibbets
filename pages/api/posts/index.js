// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../_base";

export default async function handle(req, res) {
	const posts = await prisma.post.findMany({ include: { author: true } });
	let correctedPosts = posts.map((post) => {
		post.author = post.author.name;
		return post;
	});
	res.json(correctedPosts);
}
