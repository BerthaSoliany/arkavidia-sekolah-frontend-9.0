import React from 'react';

function CloseRegis() {
  return (
    <div className="bg-blue-900 flex flex-col">
        <div className="overflow-hidden border-2 border-black w-full bg-white">
            <p className="font-bold text-black text-3xl whitespace-nowrap">CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION</p>
        </div>
        <div className="bg-black w-full h-auto flex flex-col">
            <p className="font-bold text-white text-xl text-center mt-6">Sabtu, 31 Desember 2022 - 23:59 WIB</p>
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
        <img src="/disk.png" alt="disk" className="hidden md:block w-auto h-auto mx-auto -mt-[120px]"/>
    </div>
  );
}

export default CloseRegis