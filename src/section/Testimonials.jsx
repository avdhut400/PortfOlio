import { motion } from "framer-motion";


export default function Certificates() {
  return (
    <section id="certificates" className="bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-14"
        >
          Certificates
        </motion.h2>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* GSSoC Certificate */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#0e0e0e] border border-gray-800 rounded-xl overflow-hidden"
          >
            <img
              src="/Avdhut_magar_certificate.png"
              alt="GirlScript Summer of Code Certificate"
              className="w-full object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="font-semibold text-lg">
                GirlScript Summer of Code 2025
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Certificate of Appreciation for contributions as an Open Source
                Contributor.
              </p>
            </div>
          </motion.div>

          {/* SIH Internal Hackathon Certificate */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-[#0e0e0e] border border-gray-800 rounded-xl overflow-hidden"
          >
            <img
              src="/WhatsApp Image 2026-01-28 at 5.55.03 PM.jpeg"
              alt="DYPIU Internal Hackathon Certificate"
              className="w-full object-cover"
            />
            <div className="p-5 text-left">
              <h3 className="font-semibold text-lg">
                Smart India Hackathon 2025 – Internal Hackathon
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Participated in DYPIU Internal Hackathon as a member of Team
                Pravah.
              </p>
            </div>
          </motion.div>

        </div>

        {/* Project Admin Comment (Text Only) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 max-w-3xl mx-auto bg-[#0e0e0e]
          border border-gray-800 rounded-xl p-6"
        >
          <p className="text-gray-400 text-sm leading-relaxed">
            Appreciated by the Project Admin for meaningful open-source
            contributions under ECWoC.
          </p>

          <a
            href="https://www.linkedin.com/posts/vinaykumar812_github-harshyadav152savebook-savebook-activity-7421883308206317569-wvX9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm text-[#9ACD8D] hover:underline"
          >
            View Project Admin’s LinkedIn Comment →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
