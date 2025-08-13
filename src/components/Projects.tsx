import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Dashboard",
      description: "A comprehensive analytics dashboard built for enterprise clients, featuring real-time data visualization and advanced reporting capabilities.",
      image: project1,
      tags: ["React", "TypeScript", "Analytics", "Dashboard"]
    },
    {
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with seamless user experience, payment integration, and inventory management system.",
      image: project2,
      tags: ["Next.js", "Stripe", "E-commerce", "Mobile"]
    },
    {
      title: "Corporate Website",
      description: "Professional corporate website with modern design, CMS integration, and optimized performance for lead generation.",
      image: project3,
      tags: ["Web Design", "CMS", "SEO", "Performance"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our recent work and see how we've helped businesses 
            achieve their digital goals through innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;