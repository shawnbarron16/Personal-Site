import { getPostBySlug } from "@/lib/posts";
import { getAllPosts } from "@/lib/posts";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({
    params,
}: {
    params: Promise<{slug: string}>;
}) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    return(
        <main className="mx-auto max-w-2xl px-6 py-16">
            <h1 className="text-4xl font-bold">{post.title}</h1>
            <div className="mt-4 text-lg">
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
        </main>
    )
}