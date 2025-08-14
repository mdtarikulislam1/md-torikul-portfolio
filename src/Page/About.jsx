import React from "react";

export default function About() {
  return (
    <div className="maxwidth">
      <h4 className="font-semibold text-cyan-400 text-2xl text-center">
        About me
      </h4>
      <div className="flex flex-wrap justify-center items-center gap-5 my-10">
        <div>
          <img
            className="min-w-84"
            src="https://i.postimg.cc/hvDJV187/IMG-20250805-155343-284-1-removebg-preview.png"
            alt="profile image"
          />
        </div>
        <div className="text-white mx-3 max-w-[500px]">
          <h5 className="font-semibold text-xl pb-4">Name: Md Torikul Islam</h5>
          <p className="font-semibold text-lg pb-1">Location: Rajshahi,Bangladesh</p>
          <p className="text-gray-200">
            I am a passionate Frontend Developer with a strong eagerness to
            explore and learn new technologies. Currently, I am learning Next.js
            while recapping my JavaScript skills to strengthen my foundations.
            My learning journey started in school, where I completed my early
            education and graduated from Class 5 with GPA 5. Later, I enrolled
            in a Madrasha and successfully completed my Hifz. After that, I
            appeared for my SSC examination and began my journey into the world
            of programming. I learned coding from Programming Hero and have been
            improving my skills through continuous practice and projects. My
            ambition is to become a skilled Fullstack Developer and work on
            impactful projects that make a difference in the tech industry.
          </p>
        </div>
      </div>
    </div>
  );
}
