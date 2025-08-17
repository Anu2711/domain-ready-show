import ProjectCard from "./ProjectCard";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Villa at Dubai Hills",
      image: "/lovable-uploads/eb285087-d727-406e-9798-5db26743def9.png"
    },
    {
      title: "Penthouse Interior Fitout at Palm Jumeirah",
      image: "/lovable-uploads/cf025679-25c8-4fed-92ea-41dc2778d7af.png"
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
            Take a look at some of our recent work
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