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
        <main>
            <h1>{post.title}</h1>
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </main>
    )
}