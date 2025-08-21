import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Fuel, 
  Star, 
  DollarSign,
  Users,
  Calendar
} from "lucide-react";

interface VehicleCardProps {
  id: string;
  name: string;
  image: string;
  type: string;
  fuelType: string;
  location: string;
  dailyRate: number;
  rating: number;
  capacity: number;
  availability: boolean;
  vendor: string;
  onView: (id: string) => void;
  onBook?: (id: string) => void;
}

export const VehicleCard = ({
  id,
  name,
  image,
  type,
  fuelType,
  location,
  dailyRate,
  rating,
  capacity,
  availability,
  vendor,
  onView,
  onBook
}: VehicleCardProps) => {
  return (
    <Card className="overflow-hidden shadow-card hover:shadow-card-hover animate-smooth group">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 animate-smooth"
        />
        <div className="absolute top-3 right-3">
          <Badge variant={availability ? "default" : "destructive"}>
            {availability ? "Available" : "Booked"}
          </Badge>
        </div>
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="glass">
            {type}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg">{name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-warning text-warning" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">by {vendor}</p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Fuel className="w-4 h-4" />
              <span>{fuelType}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{capacity} seats</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-success" />
            <span className="text-2xl font-bold text-success">${dailyRate}</span>
            <span className="text-sm text-muted-foreground">/day</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => onView(id)}
            className="flex-1"
          >
            View Details
          </Button>
          {onBook && availability && (
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => onBook(id)}
              className="flex-1"
            >
              Book Now
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};