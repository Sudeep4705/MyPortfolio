import React from "react";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 px-6 bg-[#020d2b]"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Achievements
        </h2>

        <div className="bg-[#0b1736] border border-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold text-white mb-4">
            🏆 Hackathon Achievement
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed">
            Ranked in the{" "}
            <span className="font-bold text-white">
              Top 100
            </span>{" "}
            among{" "}
            <span className="font-bold text-white">
              7000+ participants
            </span>{" "}
            in a national-level hackathon competition and
            received an achievement certificate.
          </p>

          <a
            href="https://drive.google.com/file/d/1OfY4R1lr-5aeA2v27U_gckI3L_CruoQS/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-green-500 text-black font-semibold px-6 py-3 rounded-xl hover:bg-green-400 transition duration-300"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;