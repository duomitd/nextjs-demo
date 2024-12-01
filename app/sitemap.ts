import { MetadataRoute } from "next";
import GameList from "@/data/games.json";

function fetchGameList() {
  return GameList;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 获取动态产品 ID
  const gameList = fetchGameList();

  // 生成产品页面的 URL
  const productUrls = gameList.map((item) => ({
    url: `https://fnfsprunki.top/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  // 静态页面
  const staticUrls: MetadataRoute.Sitemap = [
    {
      url: "https://fnfsprunki.top",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  // 合并静态和动态 URL
  return [...staticUrls, ...productUrls];
}
