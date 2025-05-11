import React from "react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A modern e-commerce solution with a seamless checkout process and comprehensive admin dashboard.",
    image: "/api/placeholder/600/340",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Weather Application",
    description:
      "Real-time weather forecasting app with location detection and beautiful visualizations.",
    image: "/api/placeholder/600/340",
    tags: ["JavaScript", "API Integration", "CSS3"],
  },
  {
    title: "Task Management Tool",
    description:
      "Collaborative project management application with drag-and-drop interface and real-time updates.",
    image: "/api/placeholder/600/340",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for monitoring social media performance across multiple platforms.",
    image: "/api/placeholder/600/340",
    tags: ["React", "Chart.js", "Redux"],
  },
  {
    title: "Portfolio Generator",
    description:
      "Tool that helps developers create beautiful portfolios with minimal configuration.",
    image: "/api/placeholder/600/340",
    tags: ["TypeScript", "Next.js", "Vercel"],
  },
  {
    title: "AI Image Generator",
    description:
      "Web application that uses machine learning to generate unique images from text descriptions.",
    image: "/api/placeholder/600/340",
    tags: ["Python", "TensorFlow", "Flask"],
  },
];

export default function ProjectsSection() {
  return (
    <div className="w-full px-4 py-6 md:px-12 md:py-12">
      {/* Intro Section */}
      <section className="flex items-center justify-center h-screen bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-4xl font-bold text-gray-800 text-center">
          Scroll to see my projects
        </h2>
      </section>

      {/* Projects Section */}
      <section className="bg-white min-h-screen">
        <div className="mb-8 relative inline-block">
          <h2 className="text-2xl font-semibold mb-2 text-gray-900 section-title">
            Projects
          </h2>
          <span className="absolute left-0 -bottom-1 w-10 h-[3px] bg-gray-800 rounded"></span>
        </div>
        <div className="flex flex-col gap-8 w-full">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 w-full"
            >
              <div className="h-44 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 