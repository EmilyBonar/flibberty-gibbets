// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../_base";

export default async function handle(req, res) {
	console.log(req.body);
	const user = await prisma.post.create({
		data: {
			content: req.body.content,
			author: {
				connectOrCreate: {
					where: { name: req.body.author },
					create: { name: req.body.author },
				},
			},
		},
	});
	res.json({ user: user });
}
