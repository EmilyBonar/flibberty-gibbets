import Head from "next/head";
import MessageInput from "../components/MessageInput.js";
import Message from "../components/Message.js";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Not Twitter</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="w-4/5 m-auto">
				<MessageInput />
				<Message
					name="test"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt augue ut mauris tincidunt, eu pharetra quam accumsan. Mauris tempor lobortis dapibus. Etiam at dapibus risus. Nullam consequat pharetra neque sit amet dignissim. Quisque fermentum lorem et tincidunt luctus. Etiam posuere volutpat enim ac condimentum. Duis ut ipsum finibus, condimentum ligula sit amet, rutrum lectus. Phasellus sed diam erat. Donec vestibulum quis diam sed condimentum. Nullam aliquam justo nunc, eu finibus turpis commodo vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean vitae diam eget nibh tincidunt aliquam non sit amet orci. Maecenas elementum rutrum eleifend. Vivamus consequat fringilla placerat. Phasellus facilisis sit amet quam ac porta. "
				/>
				<Message
					name="test"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt augue ut mauris tincidunt, eu pharetra quam accumsan. Mauris tempor lobortis dapibus. Etiam at dapibus risus. Nullam consequat pharetra neque sit amet dignissim. Quisque fermentum lorem et tincidunt luctus. Etiam posuere volutpat enim ac condimentum. Duis ut ipsum finibus, condimentum ligula sit amet, rutrum lectus. Phasellus sed diam erat. Donec vestibulum quis diam sed condimentum. Nullam aliquam justo nunc, eu finibus turpis commodo vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean vitae diam eget nibh tincidunt aliquam non sit amet orci. Maecenas elementum rutrum eleifend. Vivamus consequat fringilla placerat. Phasellus facilisis sit amet quam ac porta. "
				/>
				<Message
					name="test"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt augue ut mauris tincidunt, eu pharetra quam accumsan. Mauris tempor lobortis dapibus. Etiam at dapibus risus. Nullam consequat pharetra neque sit amet dignissim. Quisque fermentum lorem et tincidunt luctus. Etiam posuere volutpat enim ac condimentum. Duis ut ipsum finibus, condimentum ligula sit amet, rutrum lectus. Phasellus sed diam erat. Donec vestibulum quis diam sed condimentum. Nullam aliquam justo nunc, eu finibus turpis commodo vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean vitae diam eget nibh tincidunt aliquam non sit amet orci. Maecenas elementum rutrum eleifend. Vivamus consequat fringilla placerat. Phasellus facilisis sit amet quam ac porta. "
				/>
			</div>
		</div>
	);
}
