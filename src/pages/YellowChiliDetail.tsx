import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const YellowChiliDetail = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Yellow Chili Restaurant project images
  const projectImages = [
    "/lovable-uploads/5173706d-6292-47e5-9662-b5d3ac58a2c0.png",
    "/lovable-uploads/dc541146-3a6b-4245-89ed-966004089a01.png",
    "/lovable-uploads/5c366ee6-d05c-4d49-9c49-23a6673f792b.png",
    "/lovable-uploads/cef160df-5849-4df4-b849-de649c342d9d.png",
    "/lovable-uploads/934f846a-fb29-416c-99b8-0c89d1597252.png",
    "/lovable-uploads/0a8fd9b0-93b0-46de-afb0-597faa5ea621.png"
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
            <h1 className="text-2xl font-bold text-foreground">Fitout Works for Yellow Chili Restaurant</h1>
            <div></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Yellow Chili Restaurant
              <span className="block bg-gradient-hero bg-clip-text text-transparent">
                Interior Fitout
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Contemporary restaurant design featuring modern Indian aesthetics, 
              custom wooden screens, sophisticated lighting, and premium finishes 
              creating an inviting dining atmosphere for authentic Indian cuisine.
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
                  alt={`Yellow Chili Restaurant - View ${index + 1}`}
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
              Design Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Contemporary Design</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Modern interior design blending traditional Indian elements with 
                    contemporary aesthetics, creating a sophisticated dining environment.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Custom Wooden Screens</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Intricate laser-cut wooden partition screens featuring traditional 
                    Indian motifs, providing both privacy and decorative elements.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Premium Materials</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    High-quality finishes including polished marble floors, 
                    warm wood tones, and luxurious upholstery throughout the space.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Sophisticated Lighting</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Multi-layered lighting design with statement chandeliers, 
                    ambient cove lighting, and focused task lighting for dining areas.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Flexible Seating</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Variety of seating options including booth seating, traditional tables, 
                    and intimate dining alcoves to accommodate different group sizes.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">Brand Integration</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Seamless integration of Yellow Chili branding elements throughout 
                    the space while maintaining elegant and sophisticated ambiance.
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

export default YellowChiliDetail;