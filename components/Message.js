export default function Message(props) {
	//console.log(props.time);
	return (
		<div className="my-2 ">
			<div className="p-2 border-2 border-black">{props.text}</div>
			<div className="flex gap-2">
				<p>{props.name}</p>
				<p>{props.time.toString()}</p>
			</div>
		</div>
	);
}
