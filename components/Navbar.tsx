import Link from "next/link";

export function Navbar() {
	return (
		<nav>
			<div>
				<ul className="flex justify-between mx-auto max-w-* py-6 px-50 gap-6">
                    <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                    <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                    <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                    <li><Link href="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
				</ul>
			</div>
		</nav>
	);
}
