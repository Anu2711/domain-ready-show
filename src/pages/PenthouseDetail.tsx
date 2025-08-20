import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PenthouseDetail = () => {
  const navigate = useNavigate();

  // Penthouse Palm Jumeirah project images
  const projectImages = [
    "/lovable-uploads/1afec573-65a5-4469-b7ef-ffdd18e714df.png",
    "/lovable-uploads/c1c09e86-16cc-402f-bd48-3d2cd0281072.png",
    "/lovable-uploads/a5543118-639f-4914-aec7-39267f9e59e6.png",
    "/lovable-uploads/33c9d41e-da33-4e1e-a7eb-978cbe2ab477.png",
    "/lovable-uploads/50c5f524-8201-4707-ae6c-01a3f1f66973.png",
    "/lovable-uploads/9f16f6a1-1243-4f95-8c6a-bc468c0b5d56.png"
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
            <h1 className="text-2xl font-bold text-foreground">Penthouse Interior Fitout at Palm Jumeirah</h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Penthouse Interior Fitout
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Palm Jumeirah
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Luxurious penthouse interior design featuring premium marble finishes, 
              contemporary styling, and bespoke elements that define sophisticated urban living 
              in one of Dubai's most prestigious locations.
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
                  alt={`Penthouse Palm Jumeirah - Image ${index + 1}`}
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
              Project Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Premium Materials</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Finest marble finishes throughout, including Calacatta marble in bathrooms 
                    and living areas, complemented by warm wood veneers and premium fixtures.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Luxury Bathrooms</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Spa-inspired bathrooms with freestanding tubs, rainfall showers, 
                    and custom lighting that creates a serene, hotel-like experience.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Custom Storage</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Bespoke walk-in closets with integrated lighting and premium wood finishes, 
                    maximizing storage while maintaining aesthetic appeal.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Open Living Spaces</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Expansive open-plan design with floor-to-ceiling windows, 
                    creating seamless flow between indoor and outdoor living areas.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Gourmet Kitchen</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    State-of-the-art kitchen with marble island, premium appliances, 
                    and custom cabinetry designed for both functionality and elegance.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Prime Location</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Located on the iconic Palm Jumeirah, offering stunning views and 
                    access to world-class amenities and beachfront lifestyle.
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

export default PenthouseDetail;