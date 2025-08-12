import React from "react";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";

export default function ContactCards() {
  return (
    <div name="contact">
      <h4 className="text-2xl font-semibold text-center text-[#00b4d8]">
        Contact me
      </h4>
      <div className="flex gap-6 justify-center flex-wrap py-10">
        {/* Facebook Card */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/share/1BzNPJyfh7/"
        >
          <div className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 rounded-full shadow-lg w-20 h-20 cursor-pointer">
            <FaFacebookF className="text-2xl" />
          </div>
        </a>

        {/* WhatsApp Card */}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/8801330111785"
        >
          <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-400 text-white p-6 rounded-full shadow-lg w-20 h-20 cursor-pointer">
            <FaWhatsapp className="text-2xl" />
          </div>
        </a>
      </div>
    </div>
  );
}
