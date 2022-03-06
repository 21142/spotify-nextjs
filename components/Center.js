import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { shuffle } from "lodash";
import { playlistIdState, playlistState } from "../atoms/playlistAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import useSpotify from "../hooks/useSpotify";
const colors = [
  "from-blue-800",
  "from-purple-800",
  "from-pink-800",
  "from-indigo-800",
  "from-green-800",
  "from-red-800",
  "from-yellow-800",
  "from-amber-800",
  "from-lime-800",
  "from-emerald-800",
  "from-teal-800",
  "from-sky-800",
  "from-fuchsia-800",
  "from-rose-800",
  "from-cyan-800",
];

function Center() {
  const { data: session } = useSession();
  const spotifyApi = useSpotify();
  const [color, setColor] = useState(null);
  const playlistId = useRecoilValue(playlistIdState);
  const [playlist, setPlaylist] = useRecoilState(playlistState);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [playlistId]);

  useEffect(() => {
    spotifyApi
      .getPlaylist(playlistId)
      .then((data) => {
        setPlaylist(data.body);
      })
      .catch((error) => console.log("Error message: ", error));
  }, [spotifyApi, playlistId]);

  return (
    <div className="flex-grow">
      <header className="absolute top-5 right-8">
        <div className="flex items-center bg-black space-x-2 opacity-90 hover:opacity-75 hover:bg-black cursor-pointer rounded-full p-1 pr-2">
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt=""
          />
          <h2 className="font-medium text-white">{session?.user.name}</h2>
          <ChevronDownIcon className="w-6 h-6 text-white" />
        </div>
      </header>

      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 p-8 text-white`}
      >
        <img className="h-44 w-44" src={playlist?.images?.[0]?.url} alt="" />
        <div className="">
          <p>PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
            {playlist?.name}
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Center;

export { colors };
