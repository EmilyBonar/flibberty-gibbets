// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient, Post } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handle(req, res) {
	const posts = await prisma.post.findMany();

	res.json(posts);
}
