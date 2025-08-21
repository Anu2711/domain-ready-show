import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const VillaLakesDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Villa in Lakes project images
  const projectImages = [
    "/lovable-uploads/c38b8070-f630-4aaa-bf11-bc08ea65a6d3.png",
    "/lovable-uploads/932e850d-a088-4e95-8c70-ceebd55498f7.png",
    "/lovable-uploads/24d6ee34-02ac-46bf-8b9f-3fe1bab5c51b.png",
    "/lovable-uploads/5d9343e5-8e23-49ee-b8c1-f0a9b507b51c.png",
    "/lovable-uploads/f7e1b03c-7f8b-4ee9-b025-e58a94368971.png",
    "/lovable-uploads/85278074-5a3b-4009-af94-94d9df007f8e.png",
    "/lovable-uploads/02c826a0-a87c-42bd-b7d8-ac095a1fcd33.png"
  ];

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/80 backdrop-blur-md border-b border-border py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Button 
              onClick={handleBack}
              variant="ghost"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
            <h1 className="text-2xl font-bold text-foreground">Refurbishment of Villa in Lakes</h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Villa Refurbishment
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Emirates Lakes
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Complete refurbishment of a luxury villa featuring modern design elements, 
              premium finishes, and sophisticated living spaces that blend contemporary 
              style with timeless elegance in the prestigious Emirates Lakes community.
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((image, index) => (
              <div 
                key={index}
                className="group overflow-hidden rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                <img 
                  src={image} 
                  alt={`Villa Lakes Refurbishment - Image ${index + 1}`}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
              Project Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Modern Kitchen Design</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    State-of-the-art kitchen with premium wood finishes, integrated appliances, 
                    and marble countertops that combine functionality with contemporary aesthetics.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Luxury Bathrooms</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Spa-inspired bathrooms featuring premium marble, glass-enclosed showers, 
                    and custom lighting that creates an atmosphere of luxury and relaxation.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Custom Storage Solutions</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Bespoke walk-in closets with integrated LED lighting, premium wood finishes, 
                    and custom organization systems maximizing both storage and visual appeal.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Open Living Spaces</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Elegant open-plan living areas with premium marble flooring, 
                    modern pendant lighting, and seamless indoor-outdoor flow.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Premium Materials</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Finest materials throughout including marble surfaces, premium wood veneers, 
                    and custom fixtures that define luxury residential living.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Emirates Lakes Location</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Nestled in the exclusive Emirates Lakes community, offering privacy, 
                    luxury amenities, and stunning waterfront views.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VillaLakesDetail;