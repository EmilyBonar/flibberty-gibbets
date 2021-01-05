export default function Message(props) {
	return (
		<div className="my-2 ">
			<div className="p-2 border-2 border-black">{props.text}</div>
			<div className="flex">
				{props.name}
				{props.time}
			</div>
		</div>
	);
}
