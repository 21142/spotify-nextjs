import useSpotify from "../hooks/useSpotify";

function Song({ song, order }) {
  const spotifyApi = useSpotify();

  return (
    <div className="grid grid-cols-2 text-gray-500 py-4 px-3 hover:bg-gray-900 rounded-lg cursor-pointer">
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
        <p>02:22</p>
      </div>
    </div>
  );
}

export default Song;
