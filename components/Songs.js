import { ClockIcon } from "@heroicons/react/outline";
import React from "react";
import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

function Songs() {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="flex flex-col px-8 space-y-1 text-white">
      <div className="grid grid-cols-2 text-[#a7a7a7] py-2 px-3">
        <div className="flex space-x-4 items-center">
          <p className="text-sm">#</p>
          <div>
            <p className="w-18 lg:w-32 text-center lg:pl-3 text-sm">TITLE</p>
          </div>
        </div>

        <div className="flex items-center justify-between ml-auto md:ml-0">
          <p className="lg:w-36 md:w-20 hidden md:inline text-sm">ALBUM</p>
          <p>
            <ClockIcon className="h-5 w-5" />
          </p>
        </div>
      </div>
      <hr className="border-t-[0.1px] border-gray-800" />
      {playlist?.tracks.items.map((song, i) => (
        <Song key={song.track.id} song={song} order={i} />
      ))}
    </div>
  );
}

export default Songs;
