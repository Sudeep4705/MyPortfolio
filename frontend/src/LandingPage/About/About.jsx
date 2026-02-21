import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white rounded-3xl shadow-xl flex flex-col md:flex-row items-center">
        
        {/* Left Side: Image/Visual */}
        <div className="w-full md:w-1/3 bg-emerald-600 p-12 flex justify-center items-center relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute w-64 h-64 bg-emerald-500 rounded-full -top-10 -left-10 opacity-50" />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            <img
              src="Images/Rounded.jpg"
              alt="Sudeep"
              className="w-48 h-48 rounded-2xl object-cover shadow-2xl border-4 border-emerald-400/30"
            />
            <div className="mt-6 text-center">
              <h3 className="text-white font-bold text-xl tracking-wide">SUDEEP</h3>
              <p className="text-emerald-100 text-sm font-medium">Bengaluru, India</p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-2/3 p-8 md:p-14">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-emerald-600 font-semibold tracking-widest uppercase text-sm mb-2">
              Introduction
            </h2>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              Full Stack Developer <span className="text-emerald-500">specializing in MERN.</span>
            </h1>
            
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                I build production-ready applications, ranging from 
                <span className="text-slate-900 font-medium"> payment-integrated platforms </span> 
                to <span className="text-slate-900 font-medium">real-time video conferencing systems</span> and 
                AI-powered tools. 
              </p>
              <p>
                My expertise lies in crafting scalable backend architectures and seamless user experiences using the 
                MERN stack. I have a deep understanding of REST APIs, secure authentication flows, and 
                performance optimization.
              </p>
            </div>

            {/* Quick Stats/Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'].map((skill) => (
                <span key={skill} className="px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold border border-emerald-100">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;