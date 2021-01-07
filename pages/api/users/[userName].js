// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../_base";

export default async function handle(req, res) {
	const {
		query: { userName },
	} = req;
	const posts = await prisma.post.findMany({ where: { userName: userName } });
	//console.log(posts);
	res.setHeader("Cache-Control", "public, max-age=0, stale-while-revalidate=1");
	res.json(posts);
}
