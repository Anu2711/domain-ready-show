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
    "/lovable-uploads/f5f493b6-8b27-42b1-90b6-f6a040556858.png",
    "/lovable-uploads/ffbc12b3-4198-488c-9ca9-ed194ae91135.png",
    "/lovable-uploads/afe97130-6a50-4bfe-aa49-9e763395fa9b.png",
    "/lovable-uploads/d78ef156-d778-455f-b968-b5b06bbdba26.png",
    "/lovable-uploads/3e1ebc6e-679e-4c24-bc49-4172b1afb554.png",
    "/lovable-uploads/2e15b1b2-3094-4278-9c31-8f4a102a0cdd.png",
    "/lovable-uploads/1d1ad5af-4a07-48c2-9ab3-2b553a4c69e8.png",
    "/lovable-uploads/7b6772d8-25c6-4be6-b468-2be0624ec660.png",
    "/lovable-uploads/2edf0a83-2e19-4269-b767-871d86678517.png",
    "/lovable-uploads/9b9a2c91-f34c-4890-9aac-ae4546dc0bd7.png"
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