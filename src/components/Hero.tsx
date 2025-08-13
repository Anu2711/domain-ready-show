import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Creating Digital
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            We craft innovative solutions that transform ideas into reality. 
            Discover our portfolio of exceptional projects and see how we can help your business thrive.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-hero shadow-elegant hover:shadow-lg transition-all duration-300 text-lg px-8 py-6"
            >
              View Our Work
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 hover:bg-accent transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;