import { FaCode, FaLaptopCode } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-7xl py-20">
      <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>

      {/* Bio Section */}
      <section className="mb-16">
        <p className="text-lg text-secondary max-w-3xl text-center mx-auto">
          I’m Ced, a working student with 2 years of experience as a full-stack
          developer. I like to explore new frameworks and emerging technologies.
          I focus on improving incrementally through consistent work and staying
          active outside of coding to keep a clear mind.
        </p>
      </section>

      {/* Skill Section */}
      <section className="mb-16">
        <h2 className="section-title">Tools I've used before</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg flex flex-col ">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <ul className="text-secondary space-y-2">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg flex flex-col ">
            <FaLaptopCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <ul className="text-secondary space-y-2">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg flex flex-col ">
            <FaCode className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Tools & Others</h3>
            <ul className="text-secondary space-y-2">
              <li>Git / Github</li>
              <li>Figma</li>
              <li>Postman</li>
              <li>CI / CD</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-16">
        <h2 className="section-title">Experiences</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Ownly Internship */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-4">Ownly • 2023</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Worked part-time as a full stack developer intern</li>
              <li>Helped build and maintain parts of the company website</li>
            </ul>
          </div>

          {/* Freelance Work */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-4">Freelance • 2024</p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Worked as a freelance full stack developer</li>
              <li>
                Created components, pages, and handled some backend features
              </li>
            </ul>
          </div>

          {/* Capstone Project */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Mobile Developer</h3>
            <p className="text-primary mb-4">Capstone Project • 2024 - 2025 </p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>
                Developed a tinder-like mobile application from scratch with
                real-time features
              </li>
              <li>
                Built authentication, messaging, and swipe-based matching flow
              </li>
              <li>Handled backend integration and database setup</li>
            </ul>
          </div>

          {/* Personal Projects */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
            <p className="text-primary mb-4">
              Personal Projects • 2025 - Present
            </p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>
                Building personal full stack projects for learning and
                improvement
              </li>
              <li>Exploring new tools, frameworks, and backend integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-16">
        <h2 className="section-title">Education</h2>

        <div className="max-w-3xl mx-auto space-y-6">
          {/*  */}
          <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">
              Bachelor of Science in Information Technology
            </h3>
            <p className="text-primary mb-4">
              Divine Word College of Legazpi • 2022 - 2026
            </p>
            <ul className="text-secondary space-y-2 list-disc list-inside">
              <li>Dean's List from 2nd to 4th year</li>
              <li>Best in Capstone</li>
              <li>Best in Presentation</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
