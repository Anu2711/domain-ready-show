import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Villa at Emirates Hills project images
  const projectImages = [
    "/lovable-uploads/85886e66-deb3-409d-94b5-41cfca55b3c5.png",
    "/lovable-uploads/8a7c0480-f366-45e6-b7b7-f94676680081.png",
    "/lovable-uploads/4b60e59d-144c-470a-993c-95fcf52e059d.png",
    "/lovable-uploads/8cd78c6f-ef0e-444e-8b63-a684ebf47884.png",
    "/lovable-uploads/3ddc8776-ea24-4437-b6f3-d0bbebabfcc8.png",
    "/lovable-uploads/1a093977-ee95-4de4-b74e-42f9a9769ee7.png",
    "/lovable-uploads/8ef95410-3d15-4dda-888e-0251382f6e87.png",
    "/lovable-uploads/51b16cdf-21d5-4d95-a01f-475a0d14d76c.png",
    "/lovable-uploads/1f85295f-a2df-46c9-b86a-d24f9325a954.png",
    "/lovable-uploads/0e9e38e0-da0e-42a2-b5eb-6a7d52e991ea.png"
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
            <h1 className="text-2xl font-bold text-foreground">Villa at Emirates Hills</h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Villa at Emirates Hills
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A stunning contemporary villa showcasing modern architecture with luxurious amenities, 
              featuring expansive outdoor spaces, reflective pools, and seamless indoor-outdoor living.
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
                  alt={`Villa at Emirates Hills - Image ${index + 1}`}
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
                  <h4 className="text-xl font-semibold text-foreground mb-3">Architecture & Design</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Contemporary minimalist design featuring clean lines, large glass panels, 
                    and seamless integration with the landscape. The villa showcases modern 
                    luxury living at its finest.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Outdoor Spaces</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Expansive outdoor areas including infinity pools, landscaped gardens, 
                    and entertainment zones that create a resort-like atmosphere.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Interior Features</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Open-plan living spaces with high ceilings, natural light throughout, 
                    and premium finishes that reflect sophistication and comfort.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Location</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Situated in the prestigious Emirates Hills community, offering privacy, 
                    exclusivity, and stunning views in one of Dubai's most sought-after locations.
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

export default ProjectDetail;