import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/">
			<a className="leading-tight">
				<p className="font-bold">flibberty</p>
				<p className="relative font-bold left-4">gibbets</p>
			</a>
		</Link>
	);
}
