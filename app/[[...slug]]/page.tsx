import GameList from "@/data/games.json";
import { Metadata } from "next";
import { getMdxContent } from "@/lib/mdx";
import Gameframe from "@/components/my/gameframe";
import GameItem from "@/components/my/game-item";
import { notFound, redirect } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Head from "next/head";

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
      title: "404",
      description: "Page not found!",
    };
  }

  const { metadata } = getMdxContent(`${gameInfo.slug}.mdx`);
  return {
    title: metadata.title,
    keywords: metadata.keywords,
    description: metadata.description,
  };
}

const getGameInfo = (slug: string) => {
  // console.log("slug=", slug);

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

  const dimain = "https://www.fnfsprunki.top/";
  const canonicalUrl = slug ? dimain + slug[0] : dimain;

  const { content } = getMdxContent(`${gameInfo.slug}.mdx`);

  const popularGames = randomGameList();

  return (
    <>
      <Head>
        <link rel="canonical" href={canonicalUrl} key="canonical" />
      </Head>
      <main className="flex-grow flex flex-col lg:flex-row items-start my-10  gap-8 w-10/12 max-w-7xl mx-auto">
        {/* 左边部分 */}
        <div className="w-full lg:w-3/4">
          {/* 游戏框 */}
          <div className="flex bg-gray-800 rounded-lg shadow-md w-full h-full min-h-[600px] mb-8 overflow-hidden">
            <Gameframe gameInfo={gameInfo} />
          </div>

          {/* 游戏介绍 */}
          <article
            style={{ maxWidth: "100%", borderRadius: "0.5rem" }}
            className="prose lg:prose-xl prose-invert prose-h2:text-pink-500 bg-gray-800 p-8 rounded-lg shadow-md w-full "
          >
            {gameInfo && <MDXRemote source={content} />}
          </article>
        </div>

        {/* 右侧推荐游戏列表 */}
        <aside className="w-full lg:w-1/4 ">
          <div className="bg-gray-800 p-4 rounded-lg mb-6">
            <h2 className="text-2xl font-bold text-pink-500">Popular Games</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-3">
            {popularGames?.map((game, index) => (
              <GameItem gameInfo={game} key={index} />
            ))}
          </div>
        </aside>
      </main>
    </>
  );
}
