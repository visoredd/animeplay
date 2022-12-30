import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-center items-center flex-col bg-zinc-800 p-4 w-full mt-10">
      <div className="text-gray-400">
        Watch HD Anime for Free ©2022-2023 AnimePlay
      </div>
      <div className="text-gray-600">
        Disclaimer: This site does not store any files on its server. All
        contents are provided by non-affiliated third parties. Reach out for
        suggestions and help at{" "}
        <a className="hover:text-blue-300" href="https://discord.gg/3cSKkpWVAk">
          Discord
        </a>
      </div>
    </div>
  );
};

export default Footer;
