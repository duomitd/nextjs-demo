"use client";

import { GameInfo } from "@/interface/interface";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

interface PropsType {
  gameInfo: GameInfo;
}

export default function GameItem({ gameInfo }: PropsType) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/${gameInfo.slug}`);
      }}
      className="relative flex flex-col items-center justify-center rounded-lg h-[100px] bg-gray-300 hover:border-pink-500 hover:border-4 cursor-pointer"
    >
      <Image
        src={gameInfo.imageUrl}
        alt={gameInfo.slug}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="rounded-lg"
      />
      <span className="absolute bottom-0 left-0 text-sm place-items-center text-gray-800">
        {gameInfo.slug}
      </span>
    </div>
  );
}
