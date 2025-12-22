// import React, { useEffect } from "react"
// import Glide from "@glidejs/glide"
// import { motion } from "motion/react";
// function ProjectDemo(){
//     useEffect(() => {
//     const slider = new Glide(".glide-01", {
//       type: "carousel",
//       focusAt: "center",
//       perView: 3,
//       autoplay: 3000,
//       animationDuration: 700,
//       gap: 24,
//       classNames: {
//         nav: {
//           active: "[&>*]:bg-wuiSlate-700",
//         },
//       },
//       breakpoints: {
//         1024: {
//           perView: 2,
//         },
//         640: {
//           perView: 1,
//         },
//       },
//     }).mount()

//     return () => {
//       slider.destroy()
//     }
//   }, [])
//     return(
//         <>
//         {/* <motion.h1 className="text-emerald-400 text-center text-5xl mt-1"
//         initial={{y:50}}
//         animate={{y:0
//         }}
//         transition={{duration:1}}>ProjectDemo</motion.h1> */}
//          <div className="glide-01 relative w-full mt-5">
//         {/*    <!-- Slides --> */}
//         <div className="overflow-hidden" data-glide-el="track">
//           <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
//             <li>
//               <img
//                 src="Images/airbnb.png"
//                 className="m-auto max-h-full h-full w-full max-w-full"
//               />
//             </li>
//             <li>
//               <img
//                 src="Images/formula1.png"
//                 className="m-auto max-h-full h-full w-full max-w-full"
//               />
//             </li>
//             <li>
//               <img
//                 src="Images/gamers.png"
//                 className="m-auto max-h-full h-full w-full max-w-full"
//               />
//             </li>
//             <li>
//               <img
//                 src="Images/go4give.png"
//                 className="m-auto max-h-full h-full w-full max-w-full"
//               />
//             </li>
//             <li>
//               <img
//                 src="Images/levelup.png"
//                 className="m-auto max-h-full h-full w-full max-w-full"
//               />
//             </li>
//           </ul>
//         </div>
//         {/*    <!-- Controls --> */}
//         <div
//           className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
//           data-glide-el="controls"
//         >
//           <button
//             className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-black text-red-800 transition duration-300 hover:border-slate-900 hover:text-green-400 focus-visible:outline-none lg:h-12 lg:w-12"
//             data-glide-dir="<"
//             aria-label="prev slide"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <title>prev slide</title>
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
//               />
//             </svg>
//           </button>
//           <button
//             className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-black text-red-800 transition duration-300 hover:text-green-400 focus-visible:outline-none lg:h-12 lg:w-12"
//             data-glide-dir=">"
//             aria-label="next slide"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="h-5 w-5"
//             >
//               <title>next slide</title>
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

 

//         </>
//     )
// }

// export default ProjectDemo;

import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import { motion } from "framer-motion";


const projectsData = [
  {
    src: "Images/airbnb.png",
    alt: "Airbnb Clone Project",
  },
  {
    src: "Images/formula1.png",
    alt: "Formula 1 Website Project",
  },
  {
    src: "Images/gamers.png",
    alt: "Gamers Community Project",
  },
  {
    src: "Images/go4give.png",
    alt: "Charity Website Project",
  },
  {
    src: "Images/levelup.png",
    alt: "E-learning Platform Project",
  },
  {
    src: "Images/foodzo.png",
    alt: "Food Delivery App",
  },
  {
    src: "Images/fitnessHelper.png",
    alt: "fitnessHelper",
  },
];

function ProjectDemo() {
  useEffect(() => {
  
    const slider = new Glide(".glide-01", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 16,
        },
      },
    }).mount();

  
    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <section className="bg-gray-900 py-12 md:py-20">
      <div className="container mx-auto px-4">
        
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white text-center mb-12"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          Project Showcase
        </motion.h1>

        <motion.div
          className="glide-01 relative w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
    
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              {projectsData.map((project, index) => (
                <li key={index} className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={project.src}
                    alt={project.alt}
                    className="m-auto h-full w-full max-w-full object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div
            className="absolute left-0 top-1/2 flex h-0 w-full -translate-y-1/2 items-center justify-between px-2 sm:px-4"
            data-glide-el="controls"
          >
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800/80 text-gray-300 transition duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white focus:outline-none lg:h-12 lg:w-12"
              data-glide-dir="<"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800/80 text-gray-300 transition duration-300 hover:border-emerald-500 hover:bg-emerald-500 hover:text-white focus:outline-none lg:h-12 lg:w-12"
              data-glide-dir=">"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectDemo;