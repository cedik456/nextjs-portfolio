"use client";

import { blogs } from "@/contents/blogs";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  cardHoverSmall,
  fadeInUp,
  staggerContainer,
} from "@/app/utils/animation";

const Blogs = () => {
  return (
    <section className="py-20  ">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.h2
          {...fadeInUp}
          className="text-3xl font-bold mb-12 text-center"
        >
          Blogs
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-3 grid-cols-1 gap-8 mb-12"
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.slug}
              className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{
                type: "spring" as const,
                stiffness: 250,
                damping: 20,
              }}
            >
              <Link href={`blog/${blog.slug}`}>
                <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {blog.excerpt}
              </p>

              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
                <span className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  {new Date(blog.date).toLocaleString()}
                </span>

                <span className="flex items-center">
                  <FaClock className="mr-2" />
                  {blog.readTime}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={"/blogs"}
              className="bg-primary inline-block w-full md:w-auto text-center text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              View All Posts
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
