import { shuffle } from "lodash";
import { getProviders, signIn } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { colors } from "../components/Center";

function Login({ providers }) {
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-t to-black ${color}`}
    >
      <img
        className="w-36 mb-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
        alt=""
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.id} className="">
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="bg-[#18D860] text-black font-semibold p-4 rounded-full"
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
