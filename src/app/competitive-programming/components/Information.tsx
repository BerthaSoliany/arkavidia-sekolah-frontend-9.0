"use client";

import React from 'react';

function Information() {
  return (
    <div className="bg-white p-5 w-auto flex flex-col justify-between h-auto mt-[160px]">
        <img src="/LogoCP.png" alt="logoCP" className="w-1/3 h-auto mx-auto mb-4 -mt-[170px]"/>
        <div>
          <h1 className="text-6xl font-bold mb-5 text-black text-center">Competitive <br/> Programming</h1>
          <p className="text-black text-center">
            Competitive Programming adalah kompetisi yang menguji kemampuan analisis <br/>
            para peserta dalam pemecahan masalah dan berpikir komputasional dengan <br/>
            menyelesaikan persoalan - persoalan yang diberikan dengan menggunakan <br/>
            bahasa pemrograman tertentu dan tidak melanggar batasan waktu dan memori <br/>
            yang ditentukan. Kompetisi ini ditujukan untuk Mahasiswa S1/D3/D4 se-Indonesia.
          </p>
        </div>
        <div className="flex justify-center space-x-4 mt-7">
            <a href="" className="bg-white border-2 border-blue-900 text-blue-900 font-bold hover:border-opacity-75 hover:text-opacity-75 py-2 px-5 rounded-md">Download Guidebook</a>
            <a href="" className="bg-blue-900 text-white font-bold hover:bg-opacity-75 py-2 px-5 rounded-md">Register Now</a>
        </div>
    </div>
  );
}

export default Information