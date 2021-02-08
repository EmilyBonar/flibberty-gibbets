import Link from "next/link";

export default function Message(props) {
	let time = props.time.toLocaleTimeString() + " " + props.time.toDateString();
	let text = props.text.split("\n");
	return (
		<div className="my-2 text-gray-800">
			<div className="p-2 bg-white border-2 border-gray-700 shadow">
				{text.map((line) => (
					<p>{line}</p>
				))}
			</div>
			<div className="flex">
				<Link href={`../user/${props.name}`}>
					<a>{props.name}</a>
				</Link>
				<span className="flex-1"></span>
				<Link href={`../post/${props.postID}`}>
					<a>{time}</a>
				</Link>
			</div>
		</div>
	);
}
