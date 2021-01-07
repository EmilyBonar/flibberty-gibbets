// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../_base";
import Cors from "cors";

// Initializing the cors middleware
const cors = Cors({
	methods: ["GET", "HEAD"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result) => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}

export default async function handle(req, res) {
	await runMiddleware(req, res, cors);
	const {
		query: { userName },
	} = req;
	const posts = await prisma.post.findMany({ where: { userName: userName } });
	//console.log(posts);
	res.setHeader("Cache-Control", "public, max-age=0, stale-while-revalidate=1");
	res.json(posts);
}
