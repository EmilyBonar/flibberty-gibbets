// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../_base";

export default async function handle(req, res) {
	const posts = await prisma.post.findMany();
	console.log(posts);
	res.setHeader(
		"Cache-Control",
		"public, max-age=120, stale-while-revalidate=60",
	);
	res.json(posts);
}
