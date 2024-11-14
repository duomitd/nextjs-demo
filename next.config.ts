import withMDX from "@next/mdx";
import { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  reactStrictMode: true,
};

export default withMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})(nextConfig);
