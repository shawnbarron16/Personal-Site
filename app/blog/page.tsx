import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Blog",
	description: "Articles, thoughts, and updates.",
};

export default function Blog() {
	const posts = getAllPosts();
	return (
		<main>
			<h1>Post History: </h1>
			<ul>
				{posts.map((post) =>
					<li key={post.slug}>
						<Link href={`/blog/${post.slug}`}>{post.title}</Link>
						<p>{post.summary}</p>
					</li>
				)}
			</ul>
		</main>
	);
}