import { motion } from "framer-motion";


export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur">
      <div className="max-w-7xl mx-auto px-10 py-4 flex justify-between items-center text-white">
        <span className="font-bold tracking-widest">AVDHUT</span>
        <div className="space-x-6 text-sm text-gray-300">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Experience</a>
           <a href="#projects">projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
