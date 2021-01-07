import { server } from "../config/index.js";

export default function MessageInput() {
	return (
		<div className="my-2">
			<textarea
				id="text"
				placeholder="Enter your message"
				className="w-full p-2 border-2 border-black"
			></textarea>
			<div className="flex">
				<input id="name" placeholder="Name"></input>
				<div className="flex-1"></div>
				<button onClick={postMessage}>Send Message</button>
			</div>
		</div>
	);
}

function postMessage() {
	let content = document.querySelector("#text").value;
	let author = document.querySelector("#name").value;
	fetch(`${server}/api/posts/write`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ content: content, author: author }),
	});
}
