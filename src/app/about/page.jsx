
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function About() {
  const images = [
    "/images/image1.png",
    "/images/image1.png",
   
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 md:min-h-screen">
      <Link href="/">
                    <button className="mt-4 text-lg flex ml-5 md:w-auto justify-center md:justify-start border-2 items-center font-extrabold bg-gradient-to-r   bg-clip-text py-1 px-2 rounded-lg hover:text-xl ease-in duration-300 cursor-pointer">
                        <FaArrowLeft className="mr-2 text-amber-200 text-lg " /> 
                    </button>
                </Link>
        <div className=" text-white w-full">
          {/* Left Section */}
          <div className="py-4 md:pt-20 text-center md:text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-pink-400 
               text-transparent bg-clip-text border-b-4 pb-2 inline-block">
              AI ClimaTalk
            </h1><br />
            <p className="text-3xl md:text-xl font-extrabold bg-gradient-to-r from-red-300 to-pink-100 
               text-transparent bg-clip-text border-b-4 pb-2 inline-block">
             Version 1.1
            </p>

            <p className="mt-4 text-sm text-gray-200 ">
              I am your AI-powered debate assistant, designed to provide insightful discussions, facts, and arguments
              on pollution and environmental issues. Whether you're debating air pollution, climate change, or sustainable
              solutions, I help you build strong, data-driven points for a meaningful conversation. Let's make every discussion impactful! 
            </p>

            
          </div>

          {/* Right Section - Carousel
          <div className="relative w-full  overflow-hidden rounded-lg ">
            <Image
              src={images[currentImageIndex]}
              alt="Carousel Image"
              width={600}
              height={400}
              className="w-full h-full md:h-100 object-cover"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
