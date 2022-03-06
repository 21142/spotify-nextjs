import React from "react";
import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

function Songs() {
  const playlist = useRecoilValue(playlistState);

  return (
    <div className="flex flex-col px-8 pb-28 space-y-1 text-white">
      {playlist?.tracks.items.map((song, i) => (
        <Song key={song.track.id} song={song} order={i} />
      ))}
    </div>
  );
}

export default Songs;
