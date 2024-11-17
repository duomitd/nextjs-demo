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
      className="group flex flex-col items-center justify-center rounded-lg h-[120px] bg-gray-300 hover:border-pink-500 hover:border-4 cursor-pointer"
    >
      <div className="flex-1 relative w-full">
        <Image
          src={gameInfo.imageUrl}
          alt={gameInfo.slug}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg"
        />

        <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 left-0 flex flex-col justify-end h-1/2 w-full bg-gradient-to-b from-transparent to-black px-1 pb-2">
          <p className="text-xs text-center  text-white">{gameInfo.slug}</p>
        </div>
      </div>
    </div>
  );
}
