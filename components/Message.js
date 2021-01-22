import Link from "next/link";

export default function Message(props) {
	let time = props.time.toLocaleTimeString() + " " + props.time.toDateString();
	let text = props.text.split("\n");
	return (
		<div className="my-2 ">
			<div className="p-2 border-2 border-black">
				{text.map((line) => (
					<p>{line}</p>
				))}
			</div>
			<div className="flex">
				<Link href={`../user/${props.name}`}>
					<a>{props.name}</a>
				</Link>
				<p className="flex-1"></p>
				<Link href={`../post/${props.postID}`}>
					<a>{time}</a>
				</Link>
			</div>
		</div>
	);
}
