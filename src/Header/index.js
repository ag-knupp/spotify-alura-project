import React from 'react';

const Header = () =>{
    return(
        <nav
        className="fixed top-0 left-80 right-0 flex justify-between items-center py-8 px-4 my-3 mr-6 rounded bg-zinc-900 ml-16 h-20"
      >
        <div className="absolute top-0 left-0 p-4 flex items-center">
          <button
            className="arrow-left flex items-center justify-center w-8 h-8 bg-zinc-950 rounded-full ml-2 mr-1 my-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-zinc-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            className="arrow-right flex items-center justify-center w-8 h-8 bg-zinc-950 rounded-full ml-1 my-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-zinc-400"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <div
            className="flex items-center ml-4 bg-zinc-800 rounded-full border border-transparent text-zinc-800 border-2 focus-within:border-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 text-white ml-2"
            >
              <path
                fill-rule="evenodd"
                d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              type="text"
              id="search-input"
              maxlength="800"
              placeholder="What do you want to listen to?"
              className="bg-transparent w-80 h-12 border-none px-2 py-0 outline-none cursor-text::placeholder text-white placeholder:text-zinc-500"
            />
          </div>
        </div>
        <div className="flex items-center ml-auto mr-0 mt-0">
          <button
            className="signup text-zinc-400 font-bold mt-0 mr-4 hover:scale-105 hover:text-white"
          >
            Sign up
          </button>
          <button
            className="login w-28 h-12 text-black font-bold bg-white ml-4 rounded-full hover:scale-105"
          >
            Log in
          </button>
        </div>
      </nav>
    )
};

export default Header;