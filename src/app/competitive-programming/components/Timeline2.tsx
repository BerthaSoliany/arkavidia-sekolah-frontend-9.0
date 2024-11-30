import React from 'react';

function Timeline2() {
  return (
    <div className="bg-yellow-500 flex flex-col items-center mt-20">
      <div className="flex flex-col mt-3 w-full overflow-x-auto">
        <div className="flex justify-start space-x-4 mt-3 w-max">
          <div className="bg-white px-8 py-12 border-2 border-black rounded-xl min-w-[200px]">
            <p className="font-bold text-black text-center text-xl">Registration</p>
            <p className="font-bold text-black text-center text-lg">27 November 2022</p>
          </div>
          <div className="bg-white px-8 py-12 border-2 border-black rounded-xl min-w-[200px]">
            <p className="font-bold text-black text-center text-xl">Close Registration</p>
            <p className="font-bold text-black text-center text-lg">31 Desember 2022</p>
          </div>
          <div className="bg-white px-8 py-12 border-2 border-black rounded-xl min-w-[200px]">
            <p className="font-bold text-black text-center text-xl">Warmup Penyisihan</p>
            <p className="font-bold text-black text-center text-lg">20 Januari 2023</p>
          </div>
          <div className="bg-white px-8 py-12 border-2 border-black rounded-xl min-w-[200px]">
            <p className="font-bold text-black text-center text-xl">Penyisihan</p>
            <p className="font-bold text-black text-center text-lg">21 Januari 2023</p>
          </div>
          <div className="bg-white px-8 py-12 border-2 border-black rounded-xl min-w-[200px]">
            <p className="font-bold text-black text-center text-xl">Pengumuman Finalis</p>
            <p className="font-bold text-black text-center text-lg">4 Februari 2023</p>
          </div>
          <div className="bg-white px-8 py-12 border-2 border-black rounded-xl min-w-[200px]">
            <p className="font-bold text-black text-center text-xl">Warm Up Final</p>
            <p className="font-bold text-black text-center text-lg">24 Februari 2023</p>
          </div>
          <div className="bg-white px-8 py-12 border-2 border-black rounded-xl min-w-[200px]">
            <p className="font-bold text-black text-center text-xl">Final</p>
            <p className="font-bold text-black text-center text-lg">25 Februari 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline2;