// import { MdOutlineMailOutline } from "react-icons/md";
// import { CiLocationArrow1 } from "react-icons/ci";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid text-white grid-cols-1 md:grid-cols-2 gap-6 w-full">

//           {/* Left Section */}
//           <div className="py-4 text-center md:text-left">
//             <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-pink-400 
//                text-transparent bg-clip-text border-b-4  pb-2 inline-block">
//               Hey, I'm AI ClimaTalk
//             </h1>

//             <p className="mt-4 text-sm text-gray-200 max-w-2xl text-justify">
//               I am your AI-powered debate assistant, designed to provide insightful discussions, facts, and arguments
//               on pollution and environmental issues. Whether you're debating air pollution, climate change, or sustainable
//               solutions, I help you build strong, data-driven points for a meaningful conversation. Let's make every discussion impactful!
//             </p>

            
//               <Link href="#contact">
//                 <button className="mt-4 text-lg flex w-full md:w-auto justify-center md:justify-start border-2 border-amber-50 items-center font-extrabold bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text  py-1 px-2 rounded-lg hover:text-xl ease-in duration-300 cursor-pointer"> Start here... <CiLocationArrow1 className="ml-2 text-amber-200 text-lg " />
//                 </button>
//               </Link>
          
//           </div>

//           {/* Right Section */}
//           <div className="">
           
//           </div>

//         </div>
//       </div>

//     </>
//   )
// }

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CiLocationArrow1 } from "react-icons/ci";
import Link from "next/link";

export default function Home() {
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
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid text-white grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {/* Left Section */}
          <div className="py-4 md:pt-20 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-pink-400 
               text-transparent bg-clip-text border-b-4 pb-2 inline-block">
              Hey, I'm AI ClimaTalk
            </h1>

            <p className="mt-4 text-sm text-gray-200 max-w-2xl text-justify">
              I am your AI-powered debate assistant, designed to provide insightful discussions, facts, and arguments
              on pollution and environmental issues. Whether you're debating air pollution, climate change, or sustainable
              solutions, I help you build strong, data-driven points for a meaningful conversation. Let's make every discussion impactful! 
            </p>

            <Link href="/main">
              <button className="mt-4 text-lg flex w-full md:w-auto justify-center md:justify-start border-2 border-amber-50 items-center font-extrabold bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text py-1 px-2 rounded-lg hover:text-xl ease-in duration-300 cursor-pointer">
                Start here... <CiLocationArrow1 className="ml-2 text-amber-200 text-lg " />
              </button>
            </Link>
          </div>

          {/* Right Section - Carousel */}
          <div className="relative w-full  overflow-hidden rounded-lg ">
            <Image
              src={images[currentImageIndex]}
              alt="Carousel Image"
              width={600}
              height={400}
              className="w-full h-full md:h-100 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
