import OfficeMap from "./OfficeMap";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to start your next project? Let's discuss how we can help bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground">metrotecengg@yahoo.com</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Phone</h4>
                  <p className="text-muted-foreground">+971 4 3889771</p>
                </div>
                
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Our Location
              </h3>
              <div className="bg-muted rounded-lg p-6">
                <p className="text-muted-foreground mb-4">
                  502 Al Tayer Building<br />
                  Al Raffa Area<br />
                  Burdubai, Dubai, UAE
                </p>
                <a 
                  href="https://share.google/MV3ubUwfCMuUYLP7x" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;