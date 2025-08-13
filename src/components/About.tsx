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
                We are a forward-thinking company dedicated to creating exceptional digital experiences. 
                With years of expertise in web development, design, and digital strategy, we help businesses 
                transform their ideas into powerful, user-friendly solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team combines technical expertise with creative vision to deliver projects that not only 
                meet but exceed expectations. We believe in building long-term partnerships with our clients 
                and being part of their success story.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h4 className="text-xl font-semibold text-foreground mb-2">50+</h4>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h4 className="text-xl font-semibold text-foreground mb-2">99%</h4>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-card">
                <h4 className="text-xl font-semibold text-foreground mb-2">5+</h4>
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