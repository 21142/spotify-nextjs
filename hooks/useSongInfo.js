import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { currentTrackIdState } from "../atoms/songAtom";
import useSpotify from "./useSpotify";

function useSongInfo() {
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const spotifyApi = useSpotify();
  const [songInfo, setSongInfo] = useState(null);

  useEffect(() => {
    const fetchChosenSongInfo = async () => {
      if (currentTrackId) {
        const songInfo = await fetch(
          `https://api.spotify.com/v1/tracks/${currentTrackId}`,
          {
            headers: {
              Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
            },
          }
        ).then((res) => res.json());

        setSongInfo(songInfo);
      }
    };

    fetchChosenSongInfo();
  }, [currentTrackId, spotifyApi]);

  return songInfo;
}

export default useSongInfo;
