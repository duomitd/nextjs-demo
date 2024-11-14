"use client";

import { GameInfo } from "@/interface/interface";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";

interface PropsType {
  gameInfo: GameInfo;
}

export default function Gameframe({ gameInfo }: PropsType) {
  const [isPlaying, setPlaying] = useState(false);

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const toggleFullscreen = () => {
    if (!iframeRef.current) return;

    if (iframeRef.current.requestFullscreen) {
      iframeRef.current.requestFullscreen();
    }
  };

  return (
    <>
      {!isPlaying && (
        <div className="flex-1 bg-black text-white justify-center items-center place-items-center">
          <div className="relative w-1/2 h-1/2 mt-14">
            {gameInfo && (
              <Image
                src={gameInfo?.imageUrl}
                priority
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={gameInfo?.slug}
              />
            )}
          </div>

          <Button
            onClick={() => setPlaying(true)}
            className="bg-pink-500 hover:bg-pink-800 hover:scale-105 mt-14 rounded-full text-4xl font-medium p-8"
          >
            <span>Play Now</span>
          </Button>
        </div>
      )}

      {isPlaying && (
        <div className="flex-1">
          <iframe
            ref={iframeRef}
            src={gameInfo?.gameUrl}
            className="w-full h-[600px] border-none"
            title="Sprunki Game"
            allowFullScreen
          ></iframe>
          <div className=" bg-gray-800 w-full h-10 opacity-50">
            <Button onClick={toggleFullscreen}>Full Screen</Button>
          </div>
        </div>
      )}
    </>
  );
}
