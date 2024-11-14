import { getMdxContent } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = getMdxContent("abgerny.mdx");
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function AboutPage({ content }: { content: string }) {
  return (
    <article
      style={{ maxWidth: "100%", borderRadius: "0.5rem" }}
      className="prose lg:prose-xl prose-invert prose-h2:text-pink-500 bg-gray-800 p-8 rounded-lg shadow-md w-full "
    >
      <MDXRemote source={content} />
    </article>
  );
}
