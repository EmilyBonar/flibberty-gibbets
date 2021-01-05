export default function MessageInput() {
	return (
		<div className="my-2">
			<textarea
				placeholder="Enter your message"
				className="w-full p-2 border-2 border-black"
			></textarea>
			<div className="flex">
				<input placeholder="Name"></input>
				<div className="flex-1"></div>
				<button>Send Message</button>
			</div>
		</div>
	);
}
