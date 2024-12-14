"use client";
// import YouTube from "react-youtube";
import React from "react";
import ReactPlayer from 'react-player/youtube';

export default function VideoPlayer(props) {
  return (
    <div className="relative m-auto flex w-full flex-col justify-center lg:m-0 border border-gray-500 border-opacity-20">
      {/* <YouTube videoId={props.video_key} className="w-full h-full" /> */}
      <ReactPlayer
        playing={true}
        width="100%"
        url={`https://www.youtube.com/watch?v=${props.video_key}`}
      />
    </div>
  );
}
