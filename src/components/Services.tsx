import { Button } from "@/components/ui/button";

const buildingContractingImg = "/lovable-uploads/318c3364-3d07-48ca-9ff8-8e7d21726bc9.png";
const commercialInteriorsImg = "/lovable-uploads/3ccaed86-9005-4f03-a9de-7cf327f90593.png";
const refurbishmentImg = "/lovable-uploads/5c9d065a-cbfc-4d89-8093-621218f23018.png";

const Services = () => {
  const services = [
    {
      title: "BUILDING CONTRACTING",
      description: "Expert construction of villas and G+4 buildings, where quality and reliability come standard.",
      image: buildingContractingImg,
      alt: "Modern apartment building construction"
    },
    {
      title: "COMMERCIAL INTERIORS", 
      description: "Transforming commercial spaces into elegant, efficient, and inspiring environments.",
      image: commercialInteriorsImg,
      alt: "Commercial interior design for restaurant"
    },
    {
      title: "REFURBISHMENT & MODERNIZATION",
      description: "From small renovations to complete overhauls, we modernize spaces to match today's lifestyle and business needs.",
      image: refurbishmentImg,
      alt: "Modern bedroom refurbishment with contemporary design"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From foundation to finish, we deliver comprehensive construction and interior solutions
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <img 
                      src={service.image} 
                      alt={service.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground mb-2 tracking-wider">
                        SERVICES
                      </p>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <Button 
                      variant="outline"
                      className="bg-foreground text-background hover:bg-foreground/90 border-foreground"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;