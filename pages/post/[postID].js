import Head from "next/head";
import Message from "../../components/Message.js";
import Logo from "../../components/Logo.js";
import { server } from "../../config/index.js";
import { useState } from "react";
import { useRouter } from "next/router";

const Post = () => {
	const [posts, setPosts] = useState([]);
	const router = useRouter();
	const { postID } = router.query;
	fetch(`${server}/api/posts/${postID}`) //happens very quickly, might need to rate limit somehow
		.then((response) => response.json())
		.then((data) => {
			data.createdAt = new Date(data.createdAt);
			setPosts([data]);
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
					{posts.map((post) => (
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

export default Post;
