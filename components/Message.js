export default function Message(props) {
	return (
		<div className="my-2 ">
			<div className="p-2 border-2 border-black">{props.text}</div>
			{props.name}
		</div>
	);
}
