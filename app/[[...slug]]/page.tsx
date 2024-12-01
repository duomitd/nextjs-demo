import GameList from "@/data/games.json";
import { Metadata } from "next";
import { getMdxContent } from "@/lib/mdx";
import Gameframe from "@/components/my/gameframe";
import GameItem from "@/components/my/game-item";
import { notFound, redirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

interface PropsType {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PropsType): Promise<Metadata> {
  const slug = (await params).slug;
  const gameInfo = slug ? getGameInfo(slug[0]) : getGameInfo("fnf-sprunki");

  if (!gameInfo) {
    return {
      title: "Page not found",
      description: "Sorry, This Game isn't available.",
    };
  }

  const dimain = "https://www.fnfsprunki.top/";
  const canonicalUrl = slug ? dimain + slug[0] : dimain;

  const { metadata } = getMdxContent(`${gameInfo.slug}.mdx`);
  return {
    title: metadata.title,
    keywords: metadata.keywords,
    description: metadata.description,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const getGameInfo = (slug: string) => {
  return GameList.find((item) => item.slug === slug);
};

const randomGameList = () => {
  return GameList.sort(() => Math.random() - 0.5);
};

export default async function GamePage({ params }: PropsType) {
  const slug = (await params).slug;
  if (slug && slug === "fnf-sprunki") {
    redirect("/");
  }

  const gameInfo = slug ? getGameInfo(slug[0]) : getGameInfo("fnf-sprunki");

  if (!gameInfo) {
    notFound();
  }

  const { content } = getMdxContent(`${gameInfo.slug}.mdx`);

  const popularGames = randomGameList();

  return (
    <main>
      {/* 游戏框 */}
      <div className="flex bg-gray-800 rounded-lg shadow-md w-full   mb-20 overflow-hidden">
        <Gameframe gameInfo={gameInfo} />
      </div>

      {/* 推荐游戏列表 */}
      <section className="w-full mb-20 bg-gray-800 p-4 lg:p-8 rounded-lg">
        <div className="mb-6 text-xl font-bold text-white border-l-4 border-pink-500 px-2">
          <span>Game Recommendations</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-3">
          {popularGames?.map((game, index) => (
            <GameItem gameInfo={game} key={index} />
          ))}
        </div>
      </section>

      {/* 游戏介绍 */}
      <article
        style={{ maxWidth: "100%", borderRadius: "0.5rem" }}
        className="prose lg:prose-xl prose-invert prose-h2:text-pink-500 prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg bg-gray-800 p-4 lg:p-8 rounded-lg shadow-md w-full "
      >
        {gameInfo && <MDXRemote source={content} />}
      </article>
    </main>
  );
}
