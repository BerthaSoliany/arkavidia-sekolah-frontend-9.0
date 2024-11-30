import React from "react";
import NavBar from "./components/NavBar";
import Information from "./components/Information";
import CloseRegis from "./components/CloseRegis";
import Prize from "./components/Prize";
import Timeline from "./components/Timeline";
import Timeline2 from "./components/Timeline2";
import FAQ from "./components/FAQ";
import ContactPerson from "./components/ContactPerson";
import Footer from "./components/Footer";

function CompetitiveProgramming(){
    return(
        <div className="bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen flex flex-col">
            <NavBar />
            <div className="flex-grow flex justify-center items-center w-full">
                <Information />
            </div>
            <div className="mt-10">
                <CloseRegis />
            </div>
            <div className="">
                <Prize />
            </div>
            <div className="bg-yellow-500">
                <Timeline />
                <div className="ml-10 mr-10">
                    <Timeline2 />
                </div>
                <FAQ />
            </div>
            <ContactPerson />
            <Footer />
        </div>
    );
}

export default CompetitiveProgramming;