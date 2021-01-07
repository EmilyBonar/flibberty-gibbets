export default function Message(props) {
	return (
		<div className="my-2 ">
			<div className="p-2 border-2 border-black">{props.text}</div>
			<div className="flex">
				<p>{props.name}</p>
				<p className="flex-1"></p>
				<p>{props.time.toString()}</p>
			</div>
		</div>
	);
}
