import React from 'react';

function Footer() {
  return (
    <div className="bg-[url('/bg2.jpg')] bg-cover bg-center flex flex-col justify-center">
        <div className="bg-black w-full h-10 mb-5"></div>
        <div className="flex md:flex-row md:space-x-20 flex-col space-y-4">
            <div className="flex flex-col items-center">
                <div className="flex flex-row ml-10">
                    <div className="bg-red-100 w-auto h-auto border-2 border-black flex justify-center items-center">
                        <img src="/logo.png" alt="logo" className="w-1/2 h-auto" />
                    </div>
                    <div className="flex flex-col">
                        <div className="bg-black w-auto h-auto py-2 text-center">
                            <p className="font-bold text-white text-3xl">Arkavidia 8.0</p>
                        </div>
                        <div className="bg-green-700 w-auto h-auto py-2 px-10 text-center border-2 border-black">
                            <p className="text-white text-lg">ADAPTIVE COLLABORATION TO <br/> ENCOUNTER DIGITAL DISRUPTION</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row mt-5 ml-10 space-x-2">
                    <div className="bg-white w-auto h-auto px-3 p-2">
                        <p className="text-md text-black">CP: Nelsen (0821-1274-9139)</p>
                    </div>
                    <div className="bg-white w-auto h-auto px-3 p-2">
                        <a href="https://www.instagram.com/arkavidia/">
                        <p className="text-black text-md">Instagram</p>
                        </a>
                    </div>
                    <div className="bg-white w-auto h-auto px-3 p-2">
                        <a href="https://www.tiktok.com/@arkavidia/">
                        <p className="text-black text-md">TikTok</p>
                        </a>
                    </div>
                    <div className="bg-white w-auto h-auto px-3 p-2">
                        <a href="https://www.youtube.com/channel/UC7QQH48TgjZKAIJeZNRrKyw">
                        <p className="text-black text-md">YouTube</p>
                        </a>
                    </div>
                    <div className="bg-white w-auto h-auto px-3 p-2">
                        <a href="https://www.linkedin.com/company/arkavidia">
                        <p className="text-black text-md">LinkedIn</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-white w-auto h-auto">
                <div className="flex flex-row space-x-10 mr-5 justify-center">
                    <div className="flex flex-col ml-5">
                        <div className="bg-black px-10 mt-3">
                            <p className="text-white text-lg font-bold text-center">Competition</p>
                        </div>
                        <a href="" className="text-blue-900">Competitive Programming</a>
                        <a href="" className="text-blue-900">Datavidia</a>
                        <a href="" className="text-blue-900">Arkalogica</a>
                        <a href="" className="text-blue-900">UXvidia</a>
                    </div>
                    <div className="flex flex-col ml-5">
                        <div className="bg-black px-10 mt-3">
                            <p className="text-white text-lg font-bold text-center">Event</p>
                        </div>
                        <a href="" className="text-blue-900">Arkavidia Academya</a>
                        <a href="" className="text-blue-900">Arkavidia For Indonesia</a>
                        <a href="" className="text-blue-900">Arkavidia Goes To School</a>
                        <a href="" className="text-blue-900">Arkavidia Talks</a>
                        <a href="" className="text-blue-900">IT Fest</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-red-100 w-full h-auto mt-3 py-3">
            <p className="text-black text-md ml-3">© 2022 ARKAVIDIA. All rights reserved.</p>
        </div>
    </div>
  );
}

export default Footer