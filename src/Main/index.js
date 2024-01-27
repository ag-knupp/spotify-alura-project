import React from 'react';
import Header from '../Header';

const Main = () =>{
    return(
        <main classNameName="flex-grow mt-0 relative">
        <div classNameName="">
          <Header/>
        </div>
        <section id="result-playlists" className="p-4 bg-zinc-800 mt-24 mr-3 rounded max-h-[458px] overflow-y-auto playlist-scrollbar">
          <h1 className="font-bold text-white text-xl mb-6 mt-4">Browse all</h1>

          <div
            className="grid grid-cols-5 gap-3"
          >
            <a
              href=""
              className="bg-emerald-800 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden"
            >
              <div className="">
                <h2 className="text-lg text-white font-bold mb-2">Podcasts</h2>
                <img src="https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
              </div>
            </a>

            <a href="" className="bg-purple-600 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden">
              <div className="">
                <img src="https://concerts.spotifycdn.com/images/live-events_category-image.jpg" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
                <h2 className="text-lg text-white font-bold mb-2">Live Events</h2>
              </div>
            </a>

            <a href="" className="bg-indigo-900 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden">
              <div className="">
                <img src="https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
                <h2 className="text-lg text-white font-bold mb-2">Made For You</h2>
              </div></a>

            <a href="" className="bg-pink-700 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden">
              <div className="">
                <img src="https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
                <h2 className="text-lg text-white font-bold mb-2">New Releases</h2>
              </div></a>

            <a
              href=""
              className="bg-emerald-600 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden"
            >
              <div className="">
                <img src="https://i.scdn.co/image/ab67fb8200005caf097a46192e6bb67e52cdff60" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
                <h2 className="text-lg text-white font-bold mb-2">Summer</h2>
              </div></a>

            <a
              href=""
              className="bg-amber-300 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden"
            >
              <div className="">
                <img src="https://i.scdn.co/image/ab67706f00000002d28bebbf4c5bbbf02763b0f6" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
                <h2 className="text-lg text-white font-bold mb-2">Brazil</h2>
              </div></a>

            <a href="" className="bg-indigo-400 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden">
              <div className="">
                <img src="https://i.scdn.co/image/ab67fb8200005caf47cd260b964b0ea8babfb45d" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
                <h2 className="text-lg text-white font-bold mb-2">Sertanejo</h2>
              </div></a>

            <a href="" className="bg-indigo-700 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden">
              <div className="">
                <img src="https://i.scdn.co/image/ab67fb8200005caf341265d27be641506e56c346" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
                <h2 className="text-lg text-white font-bold mb-2">In the car</h2>
              </div></a>

            <a href="" className="bg-blue-600 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden">
              <div className="">
                <img src="https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
                <h2 className="text-lg text-white font-bold mb-2">
                  Podcast Charts
                </h2>
              </div></a>

            <a
              href=""
              className="bg-purple-500 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden"
            >
              <div className="max-w-32">
                <img src="https://t.scdn.co/images/209c867f5bb34076b0dcc9deeb1868e6" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
                <h2 className="text-lg text-white font-bold mb-2">
                  Brazil Podcasts Releases
                </h2>
              </div></a>

            <a
              href=""
              className="bg-red-600 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden"
            >
              <div className="">
                <img src="https://i.scdn.co/image/ab6765630000ba8a7816cf087d5372059d5242c1" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
                <h2 className="text-lg text-white font-bold mb-2">Brazilian Creators</h2>
              </div></a>

            <a href="" className="bg-indigo-800 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden">
              <div className="max-w-32">
                <img src="https://i.scdn.co/image/ab67656300005f1fb02b40e89324364b8b5f75b2" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
                <h2 className="text-lg text-white font-bold mb-2">Only on Spotify Brazil</h2>
              </div></a>

            <a href="" className="bg-purple-400 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden">
              <div className="">
                <img src="https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
                <h2 className="text-lg text-white font-bold mb-2">Charts</h2>
              </div></a>

            <a href="" className="bg-rose-600 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden">
              <div className="">
                <img src="https://i.scdn.co/image/ab67fb8200005cafb8011aa2ee5d5f50cafddea4" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
                <h2 className="text-lg text-white font-bold mb-2">
                  Brazilian Funk
                </h2>
              </div></a>

            <a
              href=""
              className="bg-green-700 p-2 px-3 rounded-md shadow-md h-44 relative overflow-hidden"
            >
              <div className="">
                <img src="https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768" alt="" className="rotate-[24deg] object-contain h-24 w-24 absolute top-20 left-[96px] ml-auto"/>
                <h2 className="text-lg text-white font-bold mb-2">
                  Pop
                </h2>
              </div></a>
          </div>
        </section>
        <div id="result-artist" className="hidden max-w-[250px] mt-24 py-5 px-5">
              <div className="bg-stone-900 border rounded-md flex-1 p-4 isolate relative transition duration-300 hover:bg-zinc-800 w-full">
                  <div className="pb-[100%] relative w-full mb-4">
                      <img id="artist-img" className="h-full w-full rounded-full absolute left-0 top-0" />
                      <div classNameName="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" classNameName="w-6 h-6 absolute right-0 top-120px p-1 bg-green-500 rounded-full text-white opacity-0 transition-all ease-in-out duration-400">
                          <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                        </svg>
                      </div>
                  </div>
                  <div classNameName="flex flex-col text-white overflow-hidden whitespace-nowrap min-h-[62px]">
                      <a title="Foo Fighters" classNameName="vst block max-w-full" href=""></a>
                      <span classNameName="text-[16px] font-bold pb-[8]" id="artist-name"></span>
                      <span classNameName="text-zinc-400 text-sm font-semibold">Artist</span>
                  </div>
              </div>
      </div>
      
      </main>
    )
};

export default Main;