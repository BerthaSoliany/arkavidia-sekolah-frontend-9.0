"use client";
import React, { useState } from 'react';

function FAQ() {
  const [openDropdowns, setOpenDropdowns] = useState([false, false]);

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => {
      const newOpenDropdowns = [...prev];
      newOpenDropdowns[index] = !newOpenDropdowns[index];
      return newOpenDropdowns;
    });
  };

  return (
    <div className="bg-yellow-500 flex flex-col mt-5 mb-2">
      <img src="/qmark.png" alt="qmark" className="hidden md:block w-1/5 h-auto absolute -left-20 mt-10" />
      <h1 className="text-6xl text-center font-bold text-black mt-20">F.A.Q.</h1>
      <div className="flex flex-col justify-center items-center z-10">
        <div className="w-full max-w-3xl mt-10">
            <button onClick={() => toggleDropdown(0)} className="w-full bg-black text-white text-xl py-4 rounded-xl">
            Apa itu Competitive Programming? <span>&#9662;</span>
            </button>
            {openDropdowns[0] && (
            <div className="bg-white border-2 border-black rounded-xl -mt-4">
                <div className="p-5">
                <p className="mt-1 text-black">
                    Competitive Programming (CP) Arkavidia adalah sebuah kompetisi pemrograman yang bertujuan untuk menguji
                    kemampuan analisis pemecahan masalah (problem solving) dan berpikir komputasional dengan cara menyelesaikan 
                    persoalan yang diberikan dengan bahasa pemrograman tertentu dalam batasan waktu dan memori yang telah
                    ditentukan. Kompetisi terdiri dari dua tahap yaitu babak penyisihan dan babak final.
                </p>
                </div>
            </div>
            )}
        </div>
        <div className="w-full max-w-3xl mt-5">
            <button onClick={() => toggleDropdown(1)} className="w-full bg-black text-white text-xl py-4 rounded-xl">
            Siapa yang bisa berpartisipasi? <span>&#9662;</span>
            </button>
            {openDropdowns[1] && (
            <div className="bg-white border-2 border-black rounded-xl -mt-4">
                <div className="p-5">
                <p className="mt-1 text-black">
                1. Peserta lomba merupakan 1 tim yang terdiri dari maksimal 3 mahasiswa tingkat S1 atau sederajat dari institusi yang sama. <br/>
                2. Peserta bukan merupakan anggota Himpunan Mahasiswa Informatika (HMIF) Institut Teknologi Bandung. <br/>
                3. Setiap peserta hanya terdaftar pada 1 tim pada cabang kompetisi yang sama.
                </p>
                </div>
            </div>
            )}
        </div>
        <div className="w-full max-w-3xl mt-5">
            <button onClick={() => toggleDropdown(2)} className="w-full bg-black text-white text-xl py-4 rounded-xl">
            Apakah Competitive Programming diadakan secara berkelompok? <span>&#9662;</span>
            </button>
            {openDropdowns[2] && (
            <div className="bg-white border-2 border-black rounded-xl -mt-4">
                <div className="p-5">
                <p className="mt-1 text-black">
                Competitive Programming diladakan secara kelompok yang terdiri dari 1-3 orang.
                </p>
                </div>
            </div>
            )}
        </div>
        <div className="w-full max-w-3xl mt-5">
            <button onClick={() => toggleDropdown(3)} className="w-full bg-black text-white text-xl py-4 rounded-xl">
            Berapa biaya pendaftaran Competitive Programming? <span>&#9662;</span>
            </button>
            {openDropdowns[3] && (
            <div className="bg-white border-2 border-black rounded-xl -mt-4">
                <div className="p-5">
                <p className="mt-1 text-black">
                Biaya pendaftaran untuk perlombaan Competitive Programming adalah Rp 90.000,- per tim.
                </p>
                </div>
            </div>
            )}
        </div>
        <div className="w-full max-w-3xl mt-5">
            <button onClick={() => toggleDropdown(4)} className="w-full bg-black text-white text-xl py-4 rounded-xl">
            Berapa orang peserta yang akan lolos ke final? <span>&#9662;</span>
            </button>
            {openDropdowns[4] && (
            <div className="bg-white border-2 border-black rounded-xl -mt-4">
                <div className="p-5">
                <p className="mt-1 text-black">
                Peserta Competitive Programming dinyatakan lolos ke final jika peserta termasuk 10 tim terbaik pada babak penyisihan atau 5 tim terbaik dari Institusi berbeda yang tidak masuk ke dalam 10 tim sebelumnya yang menyelesaikan sekurang-kurangnya 1 (satu) soal.
                </p>
                </div>
            </div>
            )}
        </div>
        <div className="w-full max-w-3xl mt-5">
            <button onClick={() => toggleDropdown(5)} className="w-full bg-black text-white text-xl py-4 rounded-xl">
            Bagaimana teknis perlombaan Competitive Programming? <span>&#9662;</span>
            </button>
            {openDropdowns[5] && (
            <div className="bg-white border-2 border-black rounded-xl -mt-4">
                <div className="p-5">
                <p className="mt-1 text-black">
                Perlombaan akan diadakan melalui platform DOMjudge dengan jumlah soal 12 pada setiap babak
                </p>
                </div>
            </div>
            )}
        </div>
        <div className="w-full max-w-3xl mt-5">
            <button onClick={() => toggleDropdown(6)} className="w-full bg-black text-white text-xl py-4 rounded-xl">
            Apakah kegiatan perlombaan akan diadakan secara offline? <span>&#9662;</span>
            </button>
            {openDropdowns[6] && (
            <div className="bg-white border-2 border-black rounded-xl -mt-4">
                <div className="p-5">
                <p className="mt-1 text-black">
                Pada perlombaan Competitive Programming, babak penyisihan akan diadakan secara online dan babak final akan diadakan secara offline dan akan bertempat di Institut Teknologi Bandung.
                </p>
                </div>
            </div>
            )}
        </div>
      </div>
      <img src="/qmark.png" alt="qmark" className="hidden md:block w-auto h-auto mx-auto transform scale-x-[-1] mr-1 -mt-[300px] relative z-0" />
      <img src="/stamp.png" alt="stamp" className="hidden md:block w-1/3 h-auto -ml-[200px] -mt-[300px] relative z-0" />
      <img src="/tapes.jpg" alt="tapes" className="hidden md:block w-auto h-auto mx-auto -mb-10 -mt-2 relative z-0" />
    </div>
  );
}

export default FAQ;