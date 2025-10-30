import { blogs } from "@/contents/blogs";
import Link from "next/link";
import { FaCalendarAlt, FaClock } from "react-icons/fa";

export default function BlogsPage() {
  return (
    <div className="container mx-auto max-w-7xl py-20">
      <h1 className="text-4xl font-bold mb-4 text-center">My Projects</h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mb-12">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
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
          </article>
        ))}
      </div>
    </div>
  );
}
