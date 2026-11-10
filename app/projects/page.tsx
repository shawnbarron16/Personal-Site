import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
	description: "A selection of my projects.",
};

export default function ProjectsPage() {
	return (
		<main className="mx-auto max-w-2xl px-6 py-16">
			<h1 className="text-4xl font-bold">Projects</h1>
			<p className="mt-4 text-lg text-gray-500">Explore a selection of projects I’ve worked on.</p>
		</main>
	);
}
