import Head from "next/head";
import MessageInput from "../components/MessageInput.js";
import Message from "../components/Message.js";
import Logo from "../components/Logo.js";
import { server } from "../config/index.js";
import { useState } from "react";

export default function Home() {
	const [posts, setPosts] = useState([]);
	fetch(`${server}/api/posts`) //happens very quickly, might need to rate limit somehow
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
				<MessageInput />
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
}
