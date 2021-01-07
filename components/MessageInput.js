import { server } from "../config/index.js";

export default function MessageInput() {
	return (
		<form className="my-2" onSubmit={(e) => postMessage(e)}>
			<textarea
				required
				id="text"
				placeholder="Enter your message"
				className="w-full p-2 border-2 border-black"
			></textarea>
			<div className="flex">
				<input required id="name" placeholder="Name"></input>
				<div className="flex-1"></div>
				<button type="submit">Send Message</button>
			</div>
		</form>
	);
}

function postMessage(e) {
	e.preventDefault();
	let content = document.querySelector("#text");
	let author = document.querySelector("#name");
	fetch(`${server}/api/posts/write`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ content: content.value, author: author.value }),
	})
		.catch((error) => console.error("WriteError", error))
		.finally(() => {
			content.value = "";
			author.value = "";
		});
}
