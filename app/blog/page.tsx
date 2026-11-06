import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { getPostBySlug } from "@/lib/posts";

export const metadata: Metadata = {
	title: "Blog",
	description: "Articles, thoughts, and updates.",
};

export default function Blog() {
	//Test the getALlPosts function
	const posts = getAllPosts();
	console.log(posts);
	//End of test
	return (
		<main>
			<h1>Blog</h1>
			<p>Articles, thoughts, and updates.</p>
		</main>
	);
}