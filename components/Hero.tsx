"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, scaleIn } from "@/app/utils/animation";

const Hero = () => {
  return (
    <section className="py-28 container max-w-7xl mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          {...scaleIn}
          transition={{ delay: 0.2 }}
          className="flex flex-col mb-4 items-center"
        >
          <Image
            src="/profile.avif"
            width={100}
            height={100}
            alt="Profile Img"
            className="rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary"
          />
        </motion.div>
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl mb-6 font-bold"
        >
          Hi, I'm{" "}
          <motion.span {...fadeInUp} transition={{ delay: 0.8 }}>
            John Doe
          </motion.span>
        </motion.h1>
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
        >
          Full Stack Developer | UI & UX Enthusiast | Open Source Contributor
        </motion.p>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="flex justify-center space-x-4 mb-8"
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300"
          >
            <FaTwitter />
          </motion.a>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={"/"}
              className="bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Project
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={"/"}
              className="bg-gray-600 inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-gray-500/90 transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
