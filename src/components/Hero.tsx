import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-subtle py-20">
      <div className="container mx-auto px-6 text-center pt-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Building Beyond
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Expectations
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            We shape spaces across the UAE with excellence in construction and interior design. 
            Explore our portfolio of successful projects and see how we bring elegance, functionality, and innovation to every detail.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-hero shadow-elegant hover:shadow-lg transition-all duration-300 text-lg px-8 py-6"
            >
              View Our Work
            </Button>
            <Button 
              onClick={scrollToAbout}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 border-2 hover:bg-accent transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
          
          <div className="max-w-5xl mx-auto mt-8">
            <img 
              src="/lovable-uploads/05a50e98-63b3-49b6-a4b5-11e8265aa01c.png" 
              alt="Metrotec Engineering LLC - Luxury interior staircase design showcasing our construction and design expertise"
              className="w-full h-auto rounded-lg shadow-elegant"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;