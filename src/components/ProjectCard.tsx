import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description?: string;
  image: string;
  tags?: string[];
  hasDetails?: boolean;
  detailsLink?: string;
}

const ProjectCard = ({ title, description, image, tags, hasDetails, detailsLink }: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    if (detailsLink) {
      navigate(detailsLink);
    }
  };
  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>
        
        {description && (
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
        )}
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {hasDetails && (
          <Button 
            onClick={handleViewMore}
            variant="outline"
            className="w-full group"
          >
            View More
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;