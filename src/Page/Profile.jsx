import { Link } from "react-scroll";
import { FaEye, FaPaperPlane } from "react-icons/fa";
import {
  FaFacebookF,
  FaWhatsapp,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

export default function Profile() {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/share/1BzNPJyfh7/",
    },
    { icon: <FaWhatsapp />, url: "https://wa.me/8801330111785" },
    { icon: <FaGithub />, url: "https://github.com/mdtarikulislam1" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/mdtorikul/" },
  ];

  return (
    <div className="pt-28 pb-6 maxwidth">
      <div className="text-white flex flex-col  md:flex-row items-center gap-4">
        <div className="max-w-3xl px-4">
          <h2 className="font-bold md:text-3xl text-2xl">
            Hi! I'm Torikul Islam
          </h2>
          <div className="text-2xl font-semibold text-[#00b4d8] mt-4">
            <span className="text-white">I'm </span>
            <TypeAnimation
              sequence={[
                "a MERN Stack Developer",
                2000,
                "a Frontend Developer",
                2000,
                "a React Developer",
                2000,
                "a Java Script Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <p className="text-gray-400 text-sm">
            "A highly motivated and detail-oriented MERN Stack Developer with a
            passion for crafting fast, secure, and scalable full-stack web
            applications. Skilled in modern technologies like React, Node.js,
            Express, and MongoDB, I love turning ideas into reality through
            clean and efficient code."
          </p>
          <div className="flex flex-col md:flex-row gap-4 py-2">
            <div>
              <h4 className="text-white font-bold textlg">Email:</h4>
              <p className="text-gray-300 text-sm">mdtorikul908765@gmail.com</p>
            </div>
            <div>
              <h4 className="text-white font-bold textlg">Number</h4>
              <p className="text-gray-400 text-sm">01330111785</p>
            </div>
          </div>

          <div className="flex gap-4 mt-2">
            {/* Download CV Button */}

            <a
              target="_blank"
              href="https://drive.google.com/file/d/1MNyIvAZqrRl6zYbuXLvP8Z4PvQmecMmB/view?usp=sharing"
            >
              <button className="social-button">
                <span className="icon-text">
                  <FaEye />
                  View Resume
                </span>
              </button>
            </a>

            {/* Hire Me Button */}
            {/* dsjhd dhd */}
            <Link
              to="contact"
              smooth={true}
              duration={200}
              className="cursor-pointer"
            >
              <button className="social-button">
                <span className="icon-text">
                  <FaPaperPlane />
                  Hire Me
                </span>
              </button>
            </Link>
          </div>
          <div className="flex gap-4 flex-wrap mt-20">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-button"
              >
                <span className="icon-text">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="relative">
            <img
              data-aos="fade-up"
              className="min-w-84 z-10 relative my_image"
              src="https://i.postimg.cc/25wS61DF/193250547-1-removebg-preview.png"
              alt="profile image"
            />

            <img
              className="absolute top-0 left-0 z-0"
              src="https://i.postimg.cc/7L1k3fhW/mix-icon-for-react-vector-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
