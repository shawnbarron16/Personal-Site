import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "Learn more about me.",
};

export default function AboutPage() {
	return (
		<main>
			<h1>About</h1>
			<p>A little more about me and what I do.</p>
		</main>
	);
}