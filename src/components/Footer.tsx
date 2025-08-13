const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Your Company</h3>
            <p className="text-background/80 mb-4 leading-relaxed">
              Creating exceptional digital experiences that help businesses thrive in the modern world.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Digital Strategy</li>
              <li>Consulting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-background/80">
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>GitHub</li>
              <li>Dribbble</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;