import React from 'react';

function Prize() {
  return (
    <div className="bg-blue-900 flex flex-col justify-center">
        <img src="/star.png" alt="star" className="hidden md:block w-auto h-auto -mt-10"/>
        <h1 className="text-5xl text-center font-bold text-white">PRIZE</h1>
        <div className="flex flex-row items-start w-full mt-4 mb-5">
            <img src="/trophy.jpg" alt="trophy" className="hidden md:block w-1/5 h-1/3 object-contain ml-10"/>
            <div className="flex flex-col justify-center items-center w-full mr-8 ml-4">
                <div className="bg-red-700 border-4 border-black w-full h-auto py-3 text-center mt-5">
                    <p className="font-bold text-white text-3xl">Juara 1</p>
                    <p className="font-bold text-white text-6xl mt-2">Rp 7.000.000,-</p>
                </div>
                <div className="bg-red-700 border-4 border-black w-full h-auto py-3 text-center mt-5">
                    <p className="font-bold text-white text-3xl">Juara 2</p>
                    <p className="font-bold text-white text-6xl mt-2">Rp 5.000.000,-</p>
                </div>
                <div className="bg-red-700 border-4 border-black w-full h-auto py-3 text-center mt-5">
                    <p className="font-bold text-white text-3xl">Juara 3</p>
                    <p className="font-bold text-white text-6xl mt-2">Rp 3.000.000,-</p>
                </div>
                <div className="bg-red-700 border-4 border-black w-full h-auto py-3 text-center mt-5">
                    <p className="font-bold text-white text-3xl">First Solver on Final</p>
                    <p className="font-bold text-white text-6xl mt-2">Rp 100.000,-/soal</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Prize