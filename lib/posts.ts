import fs from "fs";
import path from "path";
import matter from "gray-matter";

//Create a path to the posts directory
const postsDirectory = path.join(process.cwd(), "content/posts");

//The "slug" is the file name with the extension ".md" removed.
export type PostMeta = {
    slug: string;
    title: string;
    date: string;
    summary: string;
};

export type Post = PostMeta & { content: string};

//Read every file in the posts folder, return an array of objects, sort with newest first
export function getAllPosts():PostMeta[] {
    //Get the file names from the posts directory, return an array
    const fileNames = fs
        .readdirSync(postsDirectory)
        .filter((fileName) => fileName.endsWith(".md"));

    //Loop over the file names array and return a sorted array of objects
    const posts = fileNames.map((fileName) => {
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
            slug: fileName.replace(/\.md$/, ""),
            title: data.title as string,
            date: data.date as string,
            summary: data.summary as string
        };
    });

    //Sort posts newest to oldest
    posts.sort((a, b) => (a.date < b.date ? 1 : -1));

    return posts;
}

export function getPostBySlug(slug:string): Post {
     const fullPath = path.join(postsDirectory, `${slug}.md`)
     const fileContents = fs.readFileSync(fullPath, "utf8");
     const { data, content } = matter(fileContents);

     return {
            slug: slug,
            title: data.title as string,
            date: data.date as string,
            summary: data.summary as string,
            content: content
        }

}