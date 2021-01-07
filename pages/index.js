import Head from "next/head";
import MessageInput from "../components/MessageInput.js";
import Message from "../components/Message.js";
import { server } from "../config/index.js";
import { useState } from "react";

export default function Home() {
	const [posts, setPosts] = useState([]);
	fetch(`${server}/api/posts`) //happens very quickly, might need to rate limit somehow
		.then((response) => response.json())
		.then((data) => {
			setPosts(data);
		});
	return (
		<div>
			<Head>
				<title>Not Twitter</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="w-4/5 m-auto">
				<MessageInput />
				{posts.map((post) => (
					<Message key={post.id} name={post.userName} text={post.content} />
				))}
			</div>
		</div>
	);
}
