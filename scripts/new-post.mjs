import fs from "node:fs";
import path from "node:path";

//Read the title from the command line
const title = process.argv.slice(2).join(" ");

if (!title) {
    console.error("No title found.");
    process.exit(1);
};

//Turn the title into a slug
const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

//Add the date
const date = new Date();
const today = [
    date.getFullYear(),
    String(date.getMonth() + 1 ).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
].join("-");

//Write the file
const filePath = path.join(process.cwd(), "context/posts", `${slug}.md`);

try {
    fs.writeFileSync(filePath, contents, {flag:"wx"});
    console.log(`Created ${filePath}`);
}

catch (error) {
        if (error.code === "EXISTS") {
            console.error(`A post already exists at ${filePath}`);
        }
        else {
            console.error(error);
        }
        process.exit(1);
}

const contents = `---
title: ${JSON.stringify(title)}
date: "${today}"
summary: ""
draft: true
---

`;