import React from "react";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 px-6 bg-gray-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Achievements
        </h2>

        <div className="bg-[#0f172a] border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-white mb-4">
            🏆 CuraLink Hackathon v2.0
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed">
            Awarded the{" "}
            <span className="font-bold text-white">
              Certificate of Distinction
            </span>{" "}
            at{" "}
            <span className="font-bold text-white">
              CuraLink Hackathon v2.0
            </span>{" "}
            organized by Humanity Founders. Recognized among the{" "}
            <span className="font-bold text-green-400">
              Top 100 out of 7000+ participants
            </span>{" "}
            and 100+ submissions for building an AI-powered HealthTech
            solution using{" "}
            <span className="font-semibold text-green-400">
              LLMs, RAG, React, and MERN Stack
            </span>
            . The hackathon focused on solving real-world medical and
            research challenges through intelligent AI systems.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
              React
            </span>

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
              MERN Stack
            </span>

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
              LLM
            </span>

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
              RAG
            </span>

            <span className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm">
              HealthTech
            </span>
          </div>

          <a
            href="https://drive.google.com/file/d/1OfY4R1lr-5aeA2v27U_gckI3L_CruoQS/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-green-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-green-400 transition duration-300"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;