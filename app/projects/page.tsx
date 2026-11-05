import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects",
	description: "A selection of my projects.",
};

export default function ProjectsPage() {
	return (
		<main>
			<h1>Projects</h1>
			<p>Explore a selection of projects I’ve worked on.</p>
		</main>
	);
}
