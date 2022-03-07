import { useRecoilState } from "recoil";
import { currentTrackIdState, isPlayingState } from "../atoms/songAtom";
import useSpotify from "../hooks/useSpotify";
import { millisecondsAsMinutesAndSeconds } from "../lib/timeFormatter";

function Song({ song, order }) {
  const spotifyApi = useSpotify();
  const [currentTrackId, setCurrentTrackId] =
    useRecoilState(currentTrackIdState);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);

  const playSong = () => {
    setCurrentTrackId(song.track.id);
    setIsPlaying(true);
    spotifyApi.play({
      uris: [song.track.uri],
    });
  };

  return (
    <div
      className="grid grid-cols-2 text-[#a7a7a7] py-4 px-3 hover:bg-[#2a2a2a] rounded-lg cursor-pointer"
      onClick={playSong}
    >
      <div className="flex space-x-4 items-center">
        <p>{order + 1}</p>
        <img className="w-10 h-10" src={song.track.album.images[0]?.url} />
        <div>
          <p className="w-36 lg:w-64 truncate text-white">{song.track.name}</p>
          <p className="w-40">{song.track.artists[0].name}</p>
        </div>
      </div>

      <div className="flex items-center justify-between ml-auto md:ml-0">
        <p className="lg:w-72 md:w-40 hidden md:inline">
          {song.track.album.name}
        </p>
        <p>{millisecondsAsMinutesAndSeconds(song.track.duration_ms)}</p>
      </div>
    </div>
  );
}

export default Song;
