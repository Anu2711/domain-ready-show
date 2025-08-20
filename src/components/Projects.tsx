import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Villa at Dubai Hills",
      image: "/lovable-uploads/eb285087-d727-406e-9798-5db26743def9.png"
    },
    {
      title: "Penthouse Interior Fitout at Palm Jumeirah",
      image: "/lovable-uploads/cf025679-25c8-4fed-92ea-41dc2778d7af.png",
      hasDetails: true,
      detailsLink: "/projects/penthouse-palm-jumeirah"
    },
    {
      title: "Interior Fitout Works for Indian Restaurant",
      image: "/lovable-uploads/e4d58b1d-d934-4fd7-b31b-0d71fd47c9aa.png"
    },
    {
      title: "Villa at Emirates Hills",
      image: "/lovable-uploads/85886e66-deb3-409d-94b5-41cfca55b3c5.png",
      hasDetails: true,
      detailsLink: "/projects/villa-emirates-hills"
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
              image={project.image}
              hasDetails={project.hasDetails}
              detailsLink={project.detailsLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;