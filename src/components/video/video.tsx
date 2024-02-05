"use client";

import { PlayIcon } from "@heroicons/react/24/solid";
import { useRef, useState, useImperativeHandle, forwardRef, useEffect, useLayoutEffect } from "react";

interface Props {
  videoUrl: string
  playing: boolean
}
function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default forwardRef(function Video({ videoUrl, playing }: Props, ref) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    return {
      videoRef,
      videoContainerRef,
      playing,
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      if (videoRef.current.muted) {
        videoRef.current.muted = false
      } else {
        videoRef.current.muted = true
      }
    }
  }
  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.muted = false
      videoRef.current.autoplay = true
      videoRef.current.load()
    }
  }

  useEffect(() => {
    if (videoUrl) {
      if (videoRef.current) {
        playVideo()
      }
    }
  }, [videoUrl, videoRef])

  return (
    <div
      ref={videoContainerRef}
      className="absolute transition-all bg-black duration-500 top-0 z-10 right-0 bottom-0 left-0 w-full h-full"
    >
      <video
        ref={videoRef}
        className="object-cover w-full h-full absolute top-0 left-0 right-0 bottom-0"
        preload="auto"
        loop
        muted={false}
        playsInline
        src={videoUrl}
      ></video>
      <div className="absolute flex items-center justify-center top-0 right-0 bottom-0 left-0 w-full h-full">
        {
          !playing && <PlayIcon className="w-16 h-16 opacity-50 text-white" />
        }
      </div>
    </div>
  );
}
)
