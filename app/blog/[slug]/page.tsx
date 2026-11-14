import { getPostBySlug } from "@/lib/posts";
import { getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";

// Pre-render one blog route for each post in the content directory.
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

//Set dynamic metadata based on the title of the blog pulled
export async function generateMetadata({
    params,
}: {
    params: Promise<{slug: string}>;
}): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        // The page handles missing posts with notFound(); provide no metadata here.
        return {};
    }

    return {
        title: post.title,
        description: post.summary,
    }
}