"use client";

import { GameInfo } from "@/interface/interface";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { CirclePlay, Maximize } from "lucide-react";

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
        <div className="relative w-full bg-black text-white aspect-video">
          <div className="relative w-full h-full">
            {gameInfo && (
              <Image src={gameInfo?.imageUrl} fill alt={gameInfo?.slug} />
            )}
          </div>
          <div className="bg-gray-800 absolute left-0 top-0 w-full h-full opacity-90 "></div>

          <div className="absolute left-0 top-0 w-full h-full flex flex-col justify-center items-center gap-4">
            <div className="relative w-1/4 aspect-video overflow-hidden rounded-lg">
              <Image
                src={gameInfo?.imageUrl}
                fill
                title={gameInfo?.slug}
                alt={gameInfo?.slug}
              />
            </div>
            <div className="font-semibold text-3xl">{gameInfo?.slug}</div>
            <Button
              onClick={() => setPlaying(true)}
              className="cursor-pointer bg-pink-500 hover:bg-pink-600 rounded-full sm:px-8 sm:py-4 sm:text-xl font-semibold hover:scale-110 hover:transition-transform flex flex-row justify-center items-center gap-2"
            >
              Play Now <CirclePlay />
            </Button>
          </div>

          {/* <Button
            onClick={() => setPlaying(true)}
            className="bg-pink-500 hover:bg-pink-800 mt-14 rounded-full text-2xl font-medium px-8 py-6 lg:scale-125"
          >
            <span>Play Now</span>
          </Button> */}
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
            <Button onClick={toggleFullscreen}>
              <Maximize />
              Full Screen
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
