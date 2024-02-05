"use client";

import SwiperItem from "@/components/swiper";
import VideoMedia from "@/components/video/video";
import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import { register } from "swiper/element/bundle";

const data = [
  {
    title: "Sport news",
    desc: "Sport news",
    imageUrl: "/images/1.png",
    videoUrl:
      "https://isport-india.s3.ap-south-1.amazonaws.com/posts/8cqN63aYA6eVJgbVsJWNybkCQvLkdsq4r8cD6qRG.mp4",
  },
  {
    title: "Sport news",
    desc: "desc 2",
    imageUrl: "/images/2.png",
    videoUrl:
      "https://isport-india.s3.ap-south-1.amazonaws.com/posts/Q04KogPbJh1k4rFCWlCJjtlThYaSLRRMpHnW7usL.mp4",
  },
  {
    title: "Sport news",
    desc: "desc 3",
    imageUrl: "/images/3.png",
    videoUrl:
      "https://isport-india.s3.ap-south-1.amazonaws.com/posts/ySzPqvYBUFXnoyyQ3AHEuGHKtOtSxxwOA746jiy2.mp4",
  },
];

export default function Home() {
  const [playing, setPlaying] = useState(true);
  const [videoUrl, setVideoUrl] = useState("");
  const videoRef = useRef<{
    videoContainerRef: any;
    videoRef: any;
    playing: any;
    setPlaying: any;
  }>(null);

  useEffect(() => {
    register();
    setVideoUrl(data[0].videoUrl);

    const swiperEl = document.querySelector("swiper-container");
    if (swiperEl) {
      swiperEl.swiper.on("sliderFirstMove", () => {
        if (videoRef.current) {
          videoRef.current.videoContainerRef.current.style.opacity = 0;
          const thumnailEl = document.querySelectorAll("#thumnail");
          thumnailEl.forEach((el) => el.classList.remove("hidden"));
        }
      });

      swiperEl.swiper.on("touchEnd", () => {
        if (videoRef.current) {
          videoRef.current.videoContainerRef.current.style.opacity = 1;
          const thumnailEl = document.querySelectorAll("#thumnail");
          thumnailEl.forEach((el) => el.classList.add("hidden"));
        }
      });

      swiperEl.addEventListener("swiperslidechange", (event) => {
        const [swiper] = (event as unknown as { detail: [Swiper] }).detail;
        setVideoUrl(data[swiper.activeIndex].videoUrl);
        if (videoRef.current) {
          videoRef.current.videoRef.current.play();
        }
      });
    }
  }, []);

  const handleClick = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.videoRef.current.pause();
        setPlaying(false);
      } else {
        videoRef.current.videoRef.current.play();
        setPlaying(true);
      }
    }
  };

  return (
    <div className="h-[calc(100vh_-_60px)] w-full bg-black">
      <div
        onClick={handleClick}
        className="overflow-hidden relative h-full w-full z-20"
      >
        <swiper-container
          class="absolute left-0 right-0 bottom-0 top-0 z-20"
          slides-per-view={1}
          direction="vertical"
        >
          {data.map((d, i) => {
            return (
              <swiper-slide key={i}>
                <SwiperItem {...d} />
              </swiper-slide>
            );
          })}
        </swiper-container>
      </div>
      <VideoMedia ref={videoRef} playing={playing} videoUrl={videoUrl} />
    </div>
  );
}
