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
		<main className="mx-auto max-w-2xl px-6 py-16">
			<h1 className="text-4xl font-bold">Post History: </h1>
			<ul>
				{posts.map((post) =>
					<li className="mt-4 text-lg text-gray-500" key={post.slug}>
						<Link href={`/blog/${post.slug}`}>{post.title}</Link>
						<p className="mt-1">{post.summary}</p>
					</li>
				)}
			</ul>
		</main>
	);
}