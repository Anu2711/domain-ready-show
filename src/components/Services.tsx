const buildingContractingImg = "/lovable-uploads/318c3364-3d07-48ca-9ff8-8e7d21726bc9.png";
const commercialInteriorsImg = "/lovable-uploads/3ccaed86-9005-4f03-a9de-7cf327f90593.png";
const refurbishmentImg = "/lovable-uploads/5c9d065a-cbfc-4d89-8093-621218f23018.png";

const Services = () => {
  const services = [
    {
      title: "Building Contracting",
      description: "Expert construction of villas and G+4 buildings, where quality and reliability come standard.",
      image: buildingContractingImg,
      alt: "Modern apartment building construction"
    },
    {
      title: "Commercial Interiors", 
      description: "Transforming commercial spaces into elegant, efficient, and inspiring environments.",
      image: commercialInteriorsImg,
      alt: "Commercial interior design for restaurant"
    },
    {
      title: "Refurbishment & Modernization",
      description: "From small renovations to complete overhauls, we modernize spaces to match today's lifestyle and business needs.",
      image: refurbishmentImg,
      alt: "Modern bedroom refurbishment with contemporary design"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From foundation to finish, we deliver comprehensive construction and interior solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
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