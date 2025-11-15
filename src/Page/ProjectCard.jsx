import React, { useRef } from "react";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { Link } from "react-router";

export default function ProjectCard({ d }) {
  const iframeRef = useRef(null);

  // Auto-scroll on hover
  const handleHover = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.contentWindow.scrollTo({
      top: iframe.contentWindow.document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  // Reset scroll when mouse leaves
  const handleLeave = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.contentWindow.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="
        bg-[#0f172a]/60 backdrop-blur-xl 
        rounded-xl overflow-hidden 
        shadow-lg shadow-cyan-900/40 
        border border-cyan-700/30
        hover:shadow-cyan-400/50 
        transition-all duration-300 
        max-w-[380px] w-full
      "
    >
      {/* Iframe wrapper */}
      <div
        className="overflow-hidden"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <iframe
          ref={iframeRef}
          src={d?.live}
          height={260}
          frameBorder="0"
          className="w-full rounded-b-none"
        ></iframe>
      </div>

      {/* TEXT area */}
      <div className="py-5 px-4 text-white">
        <h4 className="font-semibold text-xl">
          {d?.["project-name"]}
        </h4>

        {/* Technology badges inside card */}
        <div className="flex flex-wrap gap-2 pt-3">
          {d?.tecnology?.map((t, i) => (
            <span
              key={i}
              className="
                bg-cyan-600/40 border border-cyan-500/40 
                px-2 py-1 text-sm rounded-md
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center pt-4">
          <a
            className="text-cyan-400 hover:text-cyan-300 transition-all"
            href={d?.live}
            target="_blank"
          >
            <LiaExternalLinkSquareAltSolid size={35} />
          </a>

          <Link
            to={`/details/${d?.id}`}
            className="
              bg-cyan-600 hover:bg-cyan-500 
              px-3 py-2 rounded-md 
              transition-all duration-300
            "
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
