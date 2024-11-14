"use client";

import { useState, useEffect } from "react";

export default function MDXLoader({ filename }: { filename: string }) {
  const [MDXComponent, setMDXComponent] = useState<React.ComponentType | null>(
    null
  );

  useEffect(() => {
    const loadMDX = async () => {
      try {
        // 动态导入 MDX 文件
        const myModule = await import(`@/mdx/games/${filename}.mdx`);
        setMDXComponent(() => myModule.default);
      } catch (error) {
        console.error(`Error loading MDX file: ${filename}.mdx`, error);
        setMDXComponent(null);
      }
    };

    loadMDX();
  }, [filename]);

  if (!MDXComponent) {
    return <div>Loading...</div>;
  }

  return <MDXComponent />;
}
