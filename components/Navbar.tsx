import Link from "next/link";

export default function Navbar() {
	return (
		<nav>
			<div>
				<ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
				</ul>
			</div>
		</nav>
	);
}
