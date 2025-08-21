import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RoleCard } from "@/components/RoleCard";
import { 
  Car, 
  Shield, 
  Store, 
  Wrench,
  MapPin,
  Star,
  Users,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  
  const roles = [
    {
      title: "User",
      description: "Rent vehicles easily and securely",
      icon: Car,
      features: [
        "Browse available vehicles",
        "Book with secure payments",
        "GPS-based emergency support", 
        "Rate and review experiences",
        "Manage bookings and profile"
      ],
      route: "/auth/user"
    },
    {
      title: "Vendor", 
      description: "List and manage your vehicle fleet",
      icon: Store,
      features: [
        "List vehicles with details",
        "Track bookings and revenue",
        "Analytics dashboard",
        "Manage customer interactions",
        "Monitor vehicle performance"
      ],
      route: "/auth/vendor"
    },
    {
      title: "Admin",
      description: "Oversee the entire platform",
      icon: Shield,
      features: [
        "Approve vendors and mechanics",
        "Monitor platform analytics",
        "Manage user reviews",
        "System-wide insights",
        "Revenue and growth tracking"
      ],
      route: "/auth/admin"
    },
    {
      title: "Mechanic",
      description: "Provide emergency roadside assistance",
      icon: Wrench,
      features: [
        "Receive GPS-based requests",
        "View user locations",
        "Manage service requests",
        "Build customer ratings",
        "Track earnings"
      ],
      route: "/auth/mechanic"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl text-gradient">VehicleRent</span>
            </div>
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => navigate("/auth/user")}
            >
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Smart Vehicle</span>
            <br />
            Rental Platform
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect vehicle owners, renters, and mechanics in one seamless platform. 
            Experience the future of vehicle sharing with GPS tracking, secure payments, 
            and instant support.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Vehicles Available</div>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
            <div className="glass p-6 rounded-lg text-center">
              <div className="text-3xl font-bold text-success mb-2">4.8★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Role</h2>
            <p className="text-muted-foreground text-lg">
              Join our platform in the role that best fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role) => (
              <RoleCard
                key={role.title}
                title={role.title}
                description={role.description}
                features={role.features}
                icon={role.icon}
                onSelect={() => navigate(role.route)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Platform Features</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need for a seamless vehicle rental experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">GPS Integration</h3>
              <p className="text-muted-foreground text-sm">
                Real-time location tracking and emergency mechanic suggestions
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Review System</h3>
              <p className="text-muted-foreground text-sm">
                Transparent ratings and reviews for all users and services
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Secure Payments</h3>
              <p className="text-muted-foreground text-sm">
                Safe and secure payment processing with multiple options
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Car className="h-6 w-6 text-primary mr-2" />
            <span className="font-semibold text-gradient">VehicleRent</span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 VehicleRent. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;