import React from "react";

export default function About() {
  return (
    <div className="maxwidth px-4 py-16 overflow-hidden">
      <h3
        className="text-3xl font-bold text-[#00b4d8] text-center mb-10"
        data-aos="fade-up"
      >
        About Me
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* LEFT SIDE — IMAGE + BASIC INFO */}
        <div className="flex flex-col gap-3">
          <div
            className="bg-gradient-to-br from-[#0b1a2a] to-[#101b30] p-8 rounded-xl shadow-lg border border-[#00b4d8]/40"
            data-aos="fade-right"
          >
            <h4 className="text-white text-xl font-semibold mb-4">
              Personal Information
            </h4>

            <div className="space-y-3 text-gray-300">
              <p>
                <span className="font-semibold text-white">Location:</span>{" "}
                Rajshahi, Bangladesh
              </p>

              <p>
                <span className="font-semibold text-white">Experience:</span> 2
                months (Frontend Developer)
              </p>

              <p>
                <span className="font-semibold text-white">Focus:</span>{" "}
                Fullstack Development, Modern Web Technologies
              </p>

              <p>
                <span className="font-semibold text-white">
                  Current Learning:
                </span>{" "}
                Type Script (Deep Dive) & Advanced JavaScript
              </p>
            </div>
          </div>
          {/* COMPANY PROFILE SECTION */}
          <div
            className="bg-gradient-to-br from-[#0b1a2a] to-[#101b30] p-8 rounded-xl shadow-lg border border-[#00b4d8]/40 mt-6"
            data-aos="fade-right"
          >
            <h4 className="text-white text-xl font-semibold mb-4">
              Company Profile
            </h4>

            <div className="flex items-start gap-5">
              {/* Company Image */}
              <img
                src="https://i.postimg.cc/3xHk8C8f/company-logo.png"
                alt="Company Logo"
                className="w-20 h-20 rounded-lg border border-[#00b4d8]/40 shadow-md object-cover"
              />

              {/* Company Info */}
              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="font-semibold text-white">
                    Company Name:
                  </span>{" "}
                  Bsheba
                </p>

                <p>
                  <span className="font-semibold text-white">Role:</span>{" "}
                  Frontend Developer (Intern)
                </p>

                <p>
                  <span className="font-semibold text-white">Joined:</span>{" "}
                  October 2025
                </p>

                <p>
                  <span className="font-semibold text-white">Location:</span>{" "}
                  Dhaka, Bangladesh
                </p>

                <p>
                  <span className="font-semibold text-white">Tech Stack:</span>{" "}
                  React, Tailwind, Node.js (basic)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — FULL BIO */}
        <div
          className="bg-gradient-to-tr from-[#0b1a2a] to-[#101b30] p-8 rounded-xl shadow-lg border border-[#00b4d8]/40"
          data-aos="fade-left"
        >
          <h4 className="text-white text-xl font-semibold mb-4">My Journey</h4>

          <p className="text-gray-300 leading-7">
            I am a passionate Frontend Developer with a strong eagerness to
            learn modern technologies. My journey started in school, where I
            completed my early education and graduated from Class 5 with GPA 5.
            Later, I studied in a Madrasha and completed my Hifz. After that, I
            appeared for my SSC exam and discovered my interest in programming.
            <br />
            <br />
            I started learning coding from Programming Hero and built my
            foundation in JavaScript, React, and modern web development tools.
            Currently, I am learning Next.js and revisiting core JavaScript
            concepts to strengthen my skillset.
            <br />
            <br />
            Additionally, I have **2 months of job experience as a Frontend
            Developer**, where I worked with real-life projects, teamwork,
            deadlines, and clean coding practices.
            <br />
            <br />
            My long-term goal is to become a skilled Fullstack Developer and
            contribute to impactful projects in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
}
