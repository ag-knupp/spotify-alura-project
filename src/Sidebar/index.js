import React from "react";
import logoSpotify from "./logo-spotify.png"

const Sidebar = () => {
  return (
    <div className="top-0 left-0 bottom-0 py-3 px-2 mr-0 rounded flex flex-col gap-2 w-96">
      <nav className="bg-zinc-900 rounded p-4 max-h-screen">
        <div className="logo flex flex-col bg-zinc-900 rounded px-4 pt-4 pb-0 gap-6">
          <img
            src={logoSpotify}
            alt="Spotify Logo"
            className="w-20"
          />
          <ul className="gap-4 flex pl-2 flex-col">
            <li>
              <a href="" className="text-white font-semibold text-sm">
                <span className="flex gap-2 items-center font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block flex gap-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"
                    />
                  </svg>
                  Home
                </span>
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-zinc-400 font-semibold text-sm hover:text-white"
              >
                <span className="flex gap-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block gap-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  Search
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav className="bg-zinc-900 rounded flex flex-col gap-2 text-zinc-400">
        <div className="flex items-center">
          <button className="flex items-center justify-between p-4 font-semibold space-x-2 hover:text-white">
            <span className="flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 gap-2 inline-block"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                />
              </svg>
              Your Library
            </span>
          </button>
          <button className="ml-auto hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-y-auto max-h-14 2xl:max-h-screen playlist-scrollbar">
          <section className="p-4 mb-4 bg-zinc-800 rounded-lg mx-2">
            <span>
              <h3 className="font-bold text-white mb-1">
                Create your first playlist
              </h3>
              <p className="text-xs mb-4 text-white">
                It's easy, we'll help you
              </p>
            </span>
            <button className="text-sm bg-white text-black px-4 py-2 rounded-full font-bold transform transition-transform hover:scale-105">
              Create playlist
            </button>
          </section>
          <section className="p-4 my-2 bg-zinc-800 rounded-lg mx-2">
            <span>
              <h3 className="font-bold text-white mb-1">
                Let's find some podcasts to follow
              </h3>
              <p className="text-xs mb-4 text-white">
                We'll keep you updated on new episodes
              </p>
            </span>
            <button className="text-sm bg-white text-black px-4 py-2 rounded-full font-bold transform transition-transform hover:scale-105">
              Browse podcasts
            </button>
          </section>
        </div>
        <div className="ml-3">
          <div className="flex flex-wrap mt-2">
            <div className="m-2">
              <a href="" className="text-xs">
                Legal
              </a>
            </div>
            <div className="m-2">
              <a href="" className="text-xs">
                Privacy Center
              </a>
            </div>
            <div className="m-2">
              <a href="" className="text-xs">
                Privacy Policy
              </a>
            </div>
            <div className="flex flex-wrap">
              <div className="m-2">
                <a href="" className="text-xs">
                  Cookies
                </a>
              </div>
              <div className="m-2">
                <a href="" className="text-xs">
                  About Ads
                </a>
              </div>
              <div className="m-2">
                <a href="" className="text-xs">
                  Accessibility
                </a>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="m-2">
                <a href="" className="text-xs">
                  Notice at Collection
                </a>
              </div>
              <div className="m-2">
                <a href="" className="text-xs">
                  Cookies Settings
                </a>
              </div>
            </div>
          </div>
          <div className="m-2">
            <a href="" className="text-xs hover:underline">
              Cookies
            </a>
          </div>
          <div>
            <button className="flex items-center text-white rounded-full py-1 px-2 font-bold text-sm border-zinc-400 border transition-border hover:border-white transform transition-transform hover:scale-105 my-7 ml-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M16.555 5.412a8.028 8.028 0 0 0-3.503-2.81 14.899 14.899 0 0 1 1.663 4.472 8.547 8.547 0 0 0 1.84-1.662ZM13.326 7.825a13.43 13.43 0 0 0-2.413-5.773 8.087 8.087 0 0 0-1.826 0 13.43 13.43 0 0 0-2.413 5.773A8.473 8.473 0 0 0 10 8.5c1.18 0 2.304-.24 3.326-.675ZM6.514 9.376A9.98 9.98 0 0 0 10 10c1.226 0 2.4-.22 3.486-.624a13.54 13.54 0 0 1-.351 3.759A13.54 13.54 0 0 1 10 13.5c-1.079 0-2.128-.127-3.134-.366a13.538 13.538 0 0 1-.352-3.758ZM5.285 7.074a14.9 14.9 0 0 1 1.663-4.471 8.028 8.028 0 0 0-3.503 2.81c.529.638 1.149 1.199 1.84 1.66ZM17.334 6.798a7.973 7.973 0 0 1 .614 4.115 13.47 13.47 0 0 1-3.178 1.72 15.093 15.093 0 0 0 .174-3.939 10.043 10.043 0 0 0 2.39-1.896ZM2.666 6.798a10.042 10.042 0 0 0 2.39 1.896 15.196 15.196 0 0 0 .174 3.94 13.472 13.472 0 0 1-3.178-1.72 7.973 7.973 0 0 1 .615-4.115ZM10 15c.898 0 1.778-.079 2.633-.23a13.473 13.473 0 0 1-1.72 3.178 8.099 8.099 0 0 1-1.826 0 13.47 13.47 0 0 1-1.72-3.178c.855.151 1.735.23 2.633.23ZM14.357 14.357a14.912 14.912 0 0 1-1.305 3.04 8.027 8.027 0 0 0 4.345-4.345c-.953.542-1.971.981-3.04 1.305ZM6.948 17.397a8.027 8.027 0 0 1-4.345-4.345c.953.542 1.971.981 3.04 1.305a14.912 14.912 0 0 0 1.305 3.04Z" />
                </svg>
              </span>
              <span className="ml-1">English</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Sidebar;
