import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const VillaDubaiHillsDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectImages = [
    "/lovable-uploads/1a093977-ee95-4de4-b74e-42f9a9769ee7.png",
    "/lovable-uploads/1afec573-65a5-4469-b7ef-ffdd18e714df.png",
    "/lovable-uploads/1f85295f-a2df-46c9-b86a-d24f9325a954.png",
    "/lovable-uploads/33c9d41e-da33-4e1e-a7eb-978cbe2ab477.png",
    "/lovable-uploads/3ddc8776-ea24-4437-b6f3-d0bbebabfcc8.png",
    "/lovable-uploads/4b60e59d-144c-470a-993c-95fcf52e059d.png",
    "/lovable-uploads/50c5f524-8201-4707-ae6c-01a3f1f66973.png",
    "/lovable-uploads/51b16cdf-21d5-4d95-a01f-475a0d14d76c.png",
    "/lovable-uploads/8a7c0480-f366-45e6-b7b7-f94676680081.png",
    "/lovable-uploads/8cd78c6f-ef0e-444e-8b63-a684ebf47884.png"
  ];

  const handleBack = () => {
    navigate("/#projects");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={handleBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Villa at Dubai Hills
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A stunning residential project showcasing modern luxury living with sophisticated design elements 
            and premium finishes throughout this beautiful villa in Dubai Hills Estate.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectImages.map((image, index) => (
              <div 
                key={index} 
                className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Villa at Dubai Hills - Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
            Project Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Architecture & Design</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Contemporary architectural design with clean lines</li>
                <li>• Premium material selection throughout</li>
                <li>• Sophisticated color palette and finishes</li>
                <li>• Integration of modern technology</li>
                <li>• Emphasis on natural light and ventilation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Interior Features</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Spacious open-plan living areas</li>
                <li>• High-end kitchen with premium appliances</li>
                <li>• Luxurious bedroom suites</li>
                <li>• Designer bathrooms with quality fixtures</li>
                <li>• Custom built-in storage solutions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Outdoor Spaces</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Beautifully landscaped gardens</li>
                <li>• Outdoor entertainment areas</li>
                <li>• Swimming pool and deck area</li>
                <li>• Private courtyards and terraces</li>
                <li>• Covered outdoor dining spaces</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Location</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Prime location in Dubai Hills Estate</li>
                <li>• Access to golf course and club facilities</li>
                <li>• Close to Dubai Hills Mall</li>
                <li>• Excellent connectivity to major highways</li>
                <li>• Family-friendly community environment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VillaDubaiHillsDetail;