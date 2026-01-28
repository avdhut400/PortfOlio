import { FaLinkedin, FaGithub } from "react-icons/fa";


export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white flex items-center px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center w-full">

        {/* Profile Image */}
        <div className="flex justify-center md:justify-start">
          <div
            className="h-[360px] w-[360px] md:h-[420px] md:w-[420px]
            rounded-full overflow-hidden bg-[#0e0e0e]
            border border-gray-800 shadow-[0_0_60px_rgba(154,205,141,0.15)]"
          >
            <img
              src="/WhatsApp Image 2026-01-27 at 10.08.02 PM.jpeg"
              alt="Avdhut Magar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-400 mb-4 leading-relaxed">
            I am a computer science student and aspiring full-stack web developer
            with a strong interest in building clean, functional, and user-friendly
            web applications.
          </p>

          <p className="text-gray-500 leading-relaxed">
            I enjoy working with modern web technologies, contributing to
            open-source projects, and learning by building real-world applications.
            I am continuously improving my skills and looking for opportunities
            to grow as a developer.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-6">
            <a
              href="https://www.linkedin.com/in/avdhut-magar-94088333b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9ACD8D] transition"
            >
              <FaLinkedin size={28} />
            </a>

            <a
              href="https://github.com/avdhut400"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#9ACD8D] transition"
            >
              <FaGithub size={28} />
            </a>
          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-8 px-7 py-3 bg-[#9ACD8D]
            text-black font-medium rounded-md hover:opacity-90 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
