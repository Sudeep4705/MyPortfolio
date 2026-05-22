


import React from "react";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-16 px-6 bg-gray-100"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Achievements
        </h2>

        <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition duration-300">
          <h3 className="text-2xl font-semibold mb-4">
            🏆 Hackathon Achievement
          </h3>

          <p className="text-gray-700 text-lg leading-relaxed">
            Ranked in the{" "}
            <span className="font-bold text-black">
              Top 100
            </span>{" "}
            among{" "}
            <span className="font-bold text-black">
              7000+ participants
            </span>{" "}
            in a national-level hackathon competition and
            received an achievement certificate.
          </p>

          <a
            href="https://drive.google.com/file/d/1OfY4R1lr-5aeA2v27U_gckI3L_CruoQS/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition duration-300"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;


