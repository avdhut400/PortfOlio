import { motion } from "framer-motion";
import ThreeBackground from "../component/ThreeBackground";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black">

      {/* 3D Background */}
      <ThreeBackground />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-20 text-center px-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 50, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Hi, I’m <span className="text-purple-400 px-40">Avdhut</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg text-gray-300 max-w-xl mx-auto"
        >
          
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center gap-6"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition"
          >
            View Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};




