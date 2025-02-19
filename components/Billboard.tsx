"use client";
import Image from "next/image";
import hero from "../public/hero.jpg"
import { Button } from "@/components/ui/button";

export default function Billboard() {
  const openGoogleMaps = () => {
    const destination = '1768, 115/1, General Kumaramangalam Colony, Perambur, Chennai, Tamil Nadu 600082'; // Your destination
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-white">

      <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">A Marketplace for Spares ⚙️</p>
              <h1 className="mt-4 text-2xl font-bold text-black lg:mt-8 sm:text-3xl xl:text-4xl">🔍 Find. 🛒 Buy. 🚗 Drive – The Easiest Way to Get Auto Parts!</h1>
              <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">Drive with Confidence – 100% Genuine Spare Parts!</p>

              <Button onClick={openGoogleMaps} title=""
                 className="inline-flex hover:scale-125 transition-all duration-5000 ease-in items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                 role="button">
                Locate Me 📍
              </Button>
            </div>

            <div>
              <Image className="w-full rounded-md" src={hero} width={500} height={700}  alt="Image" />
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}
