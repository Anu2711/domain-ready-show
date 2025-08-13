import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
                Let's Start a Conversation
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground">hello@yourcompany.com</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-foreground mb-2">Office</h4>
                  <p className="text-muted-foreground">
                    123 Business Street<br />
                    Suite 100<br />
                    City, State 12345
                  </p>
                </div>
              </div>
            </div>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Project Type
                    </label>
                    <Input placeholder="Web Development, Design, Consulting..." />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-hero shadow-elegant hover:shadow-lg transition-all duration-300"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;