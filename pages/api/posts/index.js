// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../_base";

export default async function handle(req, res) {
	const posts = await prisma.post.findMany();

	res.json(posts);
}
