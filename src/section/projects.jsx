import { motion } from "framer-motion";

const projects = [
  {
    title: "AlgoAI — Full-Stack AI SaaS Platform",
    desc: "A production-ready AI SaaS platform offering text generation, image processing, and resume analysis. Built with React, Tailwind, Node.js, Express, and integrated with Google Gemini API, Clerk authentication, and cloud deployment.",
    link: "https://app.algoai.shop/",
  },
  {
    title: "IndeHaven — Property Rental Platform",
    desc: "A full-stack property rental web application tailored for Indian users. Features secure authentication, role-based access, property listings, image uploads via Cloudinary, and a scalable backend using Node.js and MongoDB.",
    link: "https://github.com/avdhut400/IndeHaven",
  },
  {
    title: "PhotoFlux — Federated Social Media Platform",
    desc: "A federated social media application built with React, Node.js, Express, and MongoDB using the ActivityPub protocol. Supports user authentication, post creation, local follow/unfollow, remote Mastodon user discovery, and federated content sharing.",
    link: "https://fediverse-rho.vercel.app/",
  },
];


export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
           Projects
      </h2>


      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-gray-400">{p.desc}</p>
            <a href={p.link} className="text-purple-400 mt-4 inline-block">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
