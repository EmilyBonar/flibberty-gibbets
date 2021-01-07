// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prismaWrite } from "../_base";

export default async function handle(req, res) {
	console.log(req.body);
	const user = await prismaWrite.post.create({
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
