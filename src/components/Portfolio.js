import Section from "./common/Section";
import {
    FaGithub,
    FaExternalLinkSquareAlt,
    FaExternalLinkAlt,
} from "react-icons/fa";

const Portfolio = () => {
    const projects = [
        {
            id: "01",
            category: "PROFESSIONAL · ENTERPRISE · FULL STACK",
            title: "Dredging Corporation of India (DCI)",
            description:
                "Enterprise management platform developed for Dredging Corporation of India using a microservices-based architecture. Contributed to a Turborepo monorepo with module federation for scalable and modular frontend development, building modules for management, assets, inventory, administration, and depot operations. Implemented authentication, role-based permissions, API integration, and state management. On the backend, worked with Redis for caching and real-time synchronization, RabbitMQ for event-driven notifications, and WebSockets for real-time communication.",
            stack: [
                "React.js",
                "Next.js",
                "TypeScript",
                "Turborepo",
                "Module Federation",
                "Tailwind CSS",
                "Redux Toolkit",
                "Zustand",
                "TanStack Query",
                "Redis",
                "RabbitMQ",
                "WebSockets",
                "REST APIs",
            ],
            github: "",
            demo: "",
        },

        {
            id: "02",
            category: "PROFESSIONAL · FULL STACK · NEXT.JS",
            title: "Depot Management System",
            description:
                "Full-stack depot management platform built with Next.js and TypeScript for managing depot operations and organizational workflows. Developed responsive frontend modules with authentication, role-based permissions, persistent state management, and efficient client-side data handling. Also contributed to backend development by designing and implementing REST APIs, integrating frontend workflows with backend services, and handling data validation and API error scenarios.",
            stack: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Redux Toolkit",
                "Redux Persist",
                "IndexedDB",
                "TanStack Query",
                "REST APIs",
                "Backend Services",
            ],
            github: "",
            demo: "",
        },


        {
            id: "03",
            category: "PROFESSIONAL · FRONTEND",
            title: "Altiux Project",
            description:
                "Frontend development work focused on responsive interfaces, reusable components, API integration, debugging, and building maintainable web application experiences.",
            stack: [
                "React.js",
                "JavaScript",
                "HTML",
                "CSS",
                "REST APIs",
            ],
            github: "",
            demo: "https://www.altiux.com/",
        },

        {
            id: "04",
            category: "PROFESSIONAL · FRONTEND",
            title: "KarmaLifeAI Project",
            description:
                "Frontend development experience gained in a startup environment, contributing to responsive web interfaces, reusable components, styling, and professional development workflows.",
            stack: [
                "React.js",
                "JavaScript",
                "HTML",
                "CSS",
            ],
            github: "",
            demo: "https://karmalife.ai/",
        },

        {
            id: "05",
            category: "FREELANCE · WORDPRESS",
            title: "Freelance Website",
            description:
                "Client website developed using WordPress with responsive layouts, customized components, content management, website configuration, and production deployment.",
            stack: [
                "WordPress",
                "HTML",
                "CSS",
                "Responsive Design",
            ],
            github: "",
            demo: "",
        },
    ];

    return (
        <Section
            title="Selected Work"
            subtitle="A selection of professional and freelance projects I've contributed to throughout my development journey."
        >
            <div className="mt-12 space-y-7">

                {projects.map(
                    ({
                        id,
                        category,
                        title,
                        description,
                        stack,
                        github,
                        demo,
                    }) => (
                        <article
                            key={id}
                            className="
                group relative overflow-hidden
                rounded-3xl
                border border-gray-200
                dark:border-gray-700
                bg-white
                dark:bg-gray-900
                p-6 md:p-8
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-2xl
                hover:shadow-indigo-500/10
              "
                        >

                            {/* Background number */}
                            <div
                                className="
                  absolute -right-4 -top-10
                  text-[140px] md:text-[180px]
                  font-bold
                  text-gray-100
                  dark:text-gray-800
                  leading-none
                  select-none
                  pointer-events-none
                  transition-all duration-500
                  group-hover:text-indigo-100
                  dark:group-hover:text-gray-800
                  group-hover:scale-110
                "
                            >
                                {id}
                            </div>

                            <div className="relative z-10">

                                {/* Header */}
                                <div className="relative">

                                    {/* Centered heading */}
                                    <div className="text-center px-12">

                                        <span
                                            className="
                        inline-block
                        text-xs
                        font-semibold
                        tracking-[0.2em]
                        text-indigo-600
                        dark:text-indigo-400
                        mb-3
                      "
                                        >
                                            {category}
                                        </span>

                                        <h3
                                            className="
                        text-2xl md:text-3xl
                        font-bold
                        text-gray-900
                        dark:text-white
                        tracking-tight
                        transition-colors duration-300
                        group-hover:text-indigo-600
                        dark:group-hover:text-indigo-400
                      "
                                        >
                                            {title}
                                        </h3>
                                    </div>

                                    {/* Project links */}
                                    <div
                                        className="
                      absolute
                      right-0
                      top-0
                      flex
                      items-center
                      gap-2
                    "
                                    >
                                        {github && (
                                            <a
                                                href={github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${title} GitHub`}
                                                className="
                          w-10 h-10
                          rounded-full
                          border border-gray-200
                          dark:border-gray-700
                          flex items-center justify-center
                          text-gray-600
                          dark:text-gray-400
                          hover:bg-indigo-600
                          hover:text-white
                          hover:border-indigo-600
                          transition-all duration-300
                        "
                                            >
                                                <FaGithub />
                                            </a>
                                        )}

                                        {demo && (
                                            <a
                                                href={demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={`${title} live website`}
                                                className="
                          w-10 h-10
                          rounded-full
                          border border-gray-200
                          dark:border-gray-700
                          flex items-center justify-center
                          text-gray-600
                          dark:text-gray-400
                          hover:bg-indigo-600
                          hover:text-white
                          hover:border-indigo-600
                          transition-all duration-300
                        "
                                            >
                                                <FaExternalLinkSquareAlt />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Divider */}
                                <div
                                    className="
                    mt-6
                    h-px
                    bg-gray-100
                    dark:bg-gray-800
                  "
                                />

                                {/* Description */}
                                <p
                                    className="
                    mt-6
                    max-w-3xl
                    mx-auto
                    text-center
                    text-gray-600
                    dark:text-gray-400
                    leading-7
                    text-sm md:text-base
                  "
                                >
                                    {description}
                                </p>

                                {/* Bottom section */}
                                <div
                                    className="
                    mt-7
                    pt-5
                    border-t
                    border-gray-100
                    dark:border-gray-800
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    md:justify-between
                    gap-5
                  "
                                >

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                                        {stack.map((technology) => (
                                            <span
                                                key={technology}
                                                className="
                          px-3 py-1.5
                          rounded-full
                          bg-gray-50
                          dark:bg-gray-800
                          border
                          border-gray-200
                          dark:border-gray-700
                          text-xs
                          font-medium
                          text-gray-600
                          dark:text-gray-300
                          transition-all duration-300
                          group-hover:border-indigo-200
                          dark:group-hover:border-indigo-800
                        "
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>

                                    {/* View project */}
                                    {demo && (
                                        <a
                                            href={demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                        inline-flex
                        items-center
                        justify-center
                        gap-2
                        text-sm
                        font-semibold
                        text-gray-700
                        dark:text-gray-300
                        whitespace-nowrap
                        hover:text-indigo-600
                        dark:hover:text-indigo-400
                        transition-colors duration-300
                      "
                                        >
                                            View project
                                            <FaExternalLinkAlt className="text-xs" />
                                        </a>
                                    )}

                                </div>
                            </div>
                        </article>
                    )
                )}

            </div>
        </Section>
    );
};

export default Portfolio;
