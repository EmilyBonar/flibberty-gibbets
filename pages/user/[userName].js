import Head from "next/head";
import Message from "../../components/Message.js";
import Logo from "../../components/Logo.js";
import { server } from "../../config/index.js";
import { useState } from "react";
import { useRouter } from "next/router";

const User = () => {
	const [posts, setPosts] = useState([]);
	const router = useRouter();
	const { userName } = router.query;
	fetch(`${server}/api/users/${userName}`) //happens very quickly, might need to rate limit somehow
		.then((response) => response.json())
		.then((data) => {
			setPosts(
				data.map((message) => {
					message.createdAt = new Date(message.createdAt);
					return message;
				}),
			);
		})
		.catch((error) => console.error("ReadError", error));
	return (
		<div>
			<Head>
				<title>Not Twitter</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="w-4/5 m-auto">
				<Logo />
				<div className="my-4">
					{posts
						.sort((a, b) => b.createdAt - a.createdAt)
						.map((post) => (
							<Message
								key={post.id}
								postID={post.id}
								name={post.userName}
								text={post.content}
								time={post.createdAt}
							/>
						))}
				</div>
			</div>
		</div>
	);
};

export default User;
