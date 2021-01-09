import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-13M2K3SVQJ"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
					  
						gtag('config', 'G-13M2K3SVQJ');`,
					}}
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
