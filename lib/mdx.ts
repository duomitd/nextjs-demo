import path from "path";
import fs from "fs";
import matter from "gray-matter";

export function getMdxContent(filename: string) {
  const filePath = path.join(process.cwd(), "mdx/games", filename);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return { metadata: data, content };
}
