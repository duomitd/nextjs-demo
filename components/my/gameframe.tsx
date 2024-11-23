"use client";

import { GameInfo } from "@/interface/interface";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Maximize } from "lucide-react";

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
        <div className="flex-1 flex flex-col bg-black text-white justify-center items-center">
          <div className="rounded-lg overflow-hidden border w-1/2">
            {gameInfo && (
              <Image
                src={gameInfo?.imageUrl}
                width={1024}
                height={768}
                alt={gameInfo?.slug}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            )}
          </div>

          <Button
            onClick={() => setPlaying(true)}
            className="bg-pink-500 hover:bg-pink-800 mt-14 rounded-full text-2xl font-medium px-8 py-6 lg:scale-125"
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
