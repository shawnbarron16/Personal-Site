import { getPostBySlug } from "@/lib/posts";
import { getAllPosts } from "@/lib/posts";

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

    return(
        <main>
            <h1>{post.title}</h1>
            <p>{post.summary}</p>
        </main>
    )
}