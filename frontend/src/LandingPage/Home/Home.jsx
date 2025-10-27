import { motion } from "motion/react";
import "./Home.css";
import About from "../About/About";
import Education from "../Education/Education";
import ProjectDemo from "../ProjectDemo/ProjectDemo";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
function Home() {
  return (
    <>
    <div className="navbar">
	
	<div className="navbar-center">
	<motion.h1 
		className="text-red-500 text-3xl"
		initial={{ opacity: 0, y: -25 }}
		animate={{ opacity: 1, y: 0 }}   
		transition={{ duration: 0.5 }}    
	>
		MyPortfolio
	</motion.h1>
</div>
	
</div>
      <div
        style={{
          position: "relative",
          backgroundImage: 'url("/Images/Hero1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "80vh",
            width: "100%",
            zIndex: 1,
         
          }}
        ></div>
       
      

        {/* Main Box */}
        <div className="flex flex-col md:flex-row justify-evenly items-center text-center box">
          {/* Box1 */}
          <div className="md:mt-90">
            <motion.p
              style={{
                position: "relative",
                zIndex: 2,
                color: "red",
                top: "50%",
              }}
              className="text-3xl sm:text-4xl m-4"
              initial={{
                opacity: 0,
                y: 50,
                rotateY: 90,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              MongoDB
            </motion.p>
            <motion.p
              style={{
                position: "relative",
                zIndex: 2,
                color: "black",
                top: "50%",
              }}
              className="text-3xl sm:text-4xl m-4"
              initial={{
                opacity: 0,
                y: 50,
                rotateY: 90,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: 0,
              }}
              transition={{
                delay: 2,
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              NodeJs
            </motion.p>
          </div>

          {/* Box2 */}
          <div className="md:mt-90">
            <motion.p
              style={{
                position: "relative",
                zIndex: 2,
                color: "black",
                top: "50%",
              }}
              className="text-3xl sm:text-4xl m-4"
              initial={{
                opacity: 0,
                y: 50,
                rotateY: 90,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: 0,
              }}
              transition={{
                delay: 3,
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              ExpressJs
            </motion.p>
            <motion.p
              style={{
                position: "relative",
                zIndex: 2,
                color: "red",
                top: "50%",
              }} 
              className="text-3xl sm:text-4xl m-4"
              initial={{
                opacity: 0,
                y: 50,
                rotateY: 90,
              }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: 0,
              }}
              transition={{
                delay: 4,
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              ReactJs
            </motion.p>
          </div>
        </div>
      </div>

      <About />
      <Education/>
       <Skills/>
      <ProjectDemo/>
      <Projects/>
      <Contact/>
    
     
    </>
  );
}

export default Home;
