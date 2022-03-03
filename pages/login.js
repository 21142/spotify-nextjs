import { getProviders, signIn } from "next-auth/react";
import React from "react";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black">
      <img
        className="w-36 mb-5"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
        alt=""
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.key} className="">
          <button
            onClick={() => signIn(provider.id, { callbackUrl: "/" })}
            className="bg-[#18D860] text-white p-4 rounded-full"
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
