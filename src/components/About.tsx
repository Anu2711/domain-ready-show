const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            About Our Company
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Crafting Digital Excellence
              </h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We provide exceptional contracting service to the clients in U.A.E. We transcend the capabilities of a typical Construction/Interiors firm by delivering a level of expertise in and passion for Building Construction and Interiors that is simply without parallel.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are a Construction company whose relationship with Clients extends beyond concrete and steel to a place where they have total peace of mind and receive a brand of service that continually exceeds their expectations.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A team of seasoned professionals, who are on top of every little detail, take care of all the technical challenges to bring a smile to your face. You will be proud to have such people on your jobsites.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h4 className="text-xl font-semibold text-foreground mb-2">100+</h4>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h4 className="text-xl font-semibold text-foreground mb-2">99%</h4>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h4 className="text-xl font-semibold text-foreground mb-2">18+</h4>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;