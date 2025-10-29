import { projects } from "@/contents/projects";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section className="py-20 container max-w-7xl mx-auto px-4 ">
      <h2 className="text-3xl font-bold mb-12 text-center">Feature Projects</h2>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-white dark:bg-dark/50 rounded-lg shadow-md p-6"
          >
            <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={`${tech}-${index}`}
                  className="px-3 py-1 bg-primary/10 rounded-full text-primary text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-2 items-center">
              <Link
                href={project.githubLink}
                className="flex items-center text-secondary gap-2 hover:text-primary transition-colors"
                target="_blank"
              >
                <FaGithub className="w-5 h-5" />
                <span>Code</span>
              </Link>
              <Link
                href={project.githubLink}
                className="flex items-center text-secondary hover:text-primary gap-2 transition-colors"
                target="_blank"
              >
                <FaExternalLinkAlt className="w-5 h-5" />
                <span>Live Demo</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
