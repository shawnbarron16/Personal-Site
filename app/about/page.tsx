import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "Learn more about me.",
};

export default function AboutPage() {
	return (
		<main className="mx-auto max-w-2xl px-6 py-16">
			<h1 className="text-4xl font-bold">About</h1>
			<p className="mt-4 text-lg text-gray-500">A little more about me and what I do.</p>
		</main>
	);
}