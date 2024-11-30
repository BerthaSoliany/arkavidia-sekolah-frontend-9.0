import React from 'react';

function ContactPerson() {
  return (
    <div className="bg-white flex flex-col">
        <div className="mb-10">
        <h1 className="text-6xl font-bold text-black mt-20 text-center">Contact Person</h1>
        <div className="flex md:flex-row flex-col mt-5 justify-center md:space-x-4 space-y-4">
            <div className="w-auto h-auto flex flex-col items-center bg-blue-900 px-16 py-5 rounded-3xl">
                <img src="/wa.svg" alt="wa" className="w-auto h-auto" />
                <p className="text-white text-md">089507646369</p>
                <p className="text-white text-md font-bold">Aira</p>
                <p className="text-white text-md">081283603881</p>
                <p className="text-white text-md font-bold">Ubai</p>
            </div>
            <div className="w-auto h-auto flex flex-col items-center bg-blue-900 px-16 py-5 rounded-3xl">
                <img src="/line.svg" alt="line" className="w-auto h-auto" />
                <p className="text-white text-md">airathalca</p>
                <p className="text-white text-md font-bold">Aira</p>
                <p className="text-white text-md">ubaidillah_ariq</p>
                <p className="text-white text-md font-bold">Ubai</p>
            </div>
            <div className="w-auto h-auto flex flex-col items-center bg-blue-900 px-7 py-5 rounded-3xl">
                <img src="/email.svg" alt="email" className="w-auto h-auto" />
                <p className="text-white text-md">competition@arkavidia.id</p>
            </div>
        </div>
        </div>
    </div>
  );
}

export default ContactPerson