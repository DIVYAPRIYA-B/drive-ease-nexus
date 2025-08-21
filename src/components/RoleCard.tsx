import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface RoleCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  onSelect: () => void;
}

export const RoleCard = ({ title, description, features, icon: Icon, onSelect }: RoleCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-card-hover animate-smooth cursor-pointer group h-full">
      <CardHeader className="text-center pb-4">
        <div className="mx-auto mb-4 w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 animate-smooth">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <CardTitle className="text-xl font-semibold text-gradient">{title}</CardTitle>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
        <Button 
          onClick={onSelect}
          variant="primary" 
          className="w-full"
          size="lg"
        >
          Get Started as {title}
        </Button>
      </CardContent>
    </Card>
  );
};