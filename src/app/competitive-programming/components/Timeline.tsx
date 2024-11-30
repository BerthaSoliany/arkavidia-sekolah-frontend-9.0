import React from 'react';

function Timeline() {
  return (
    <div className="bg-yellow-500 flex flex-col items-center">
        <img src="/3star.png" alt="3star" className="hidden md:block w-auto h-auto absolute left-0 mt-10"/>
        <img src="/game.png" alt="game" className="hidden md:block w-auto h-auto absolute right-0 mt-16"/>
        <h1 className="text-6xl text-center font-bold text-black mt-20">TIMELINE</h1>
        <div className="bg-black w-[70px] py-2 mt-20 items-center"></div>
        <div className="flex flex-col mt-3">
            <div className="flex justify-center space-x-4 mt-3">
                <div className="bg-white px-8 py-12 border-2 border-black rounded-xl"></div>
                <div className="bg-white px-8 py-12 border-2 border-black rounded-xl"></div>
                <p className="font-bold text-black text-5xl mt-5">:</p>
                <div className="bg-white px-8 py-12 border-2 border-black rounded-xl"></div>
                <div className="bg-white px-8 py-12 border-2 border-black rounded-xl"></div>
                <p className="font-bold text-black text-5xl mt-5">:</p>
                <div className="bg-white px-8 py-12 border-2 border-black rounded-xl"></div>
                <div className="bg-white px-8 py-12 border-2 border-black rounded-xl"></div>
            </div>
            <div className="flex justify-center space-x-[150px] mt-1 mb-5">
                <p className="font-bold text-white text-sm">DAYS</p>
                <p className="font-bold text-white text-sm">HOURS</p>
                <p className="font-bold text-white text-sm">MINUTES</p>
            </div>
        </div>
    </div>
  )
}

export default Timeline