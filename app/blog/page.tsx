import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
	description: "Articles, thoughts, and updates.",
};

export default function BlogPage() {
	return (
		<main>
			<h1>Blog</h1>
			<p>Articles, thoughts, and updates.</p>
		</main>
	);
}