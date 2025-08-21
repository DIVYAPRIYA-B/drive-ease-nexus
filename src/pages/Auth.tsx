import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, ArrowLeft } from "lucide-react";

const Auth = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuth = async (type: "login" | "register") => {
    setIsLoading(true);
    // Simulate auth process
    setTimeout(() => {
      setIsLoading(false);
      // Navigate to appropriate dashboard
      navigate(`/dashboard/${role}`);
    }, 1500);
  };

  const roleConfig = {
    user: {
      title: "User Portal",
      description: "Sign in to book vehicles and manage rentals"
    },
    vendor: {
      title: "Vendor Dashboard", 
      description: "Manage your vehicle fleet and bookings"
    },
    admin: {
      title: "Admin Panel",
      description: "Oversee platform operations and analytics"
    },
    mechanic: {
      title: "Mechanic Portal",
      description: "Provide roadside assistance services"
    }
  };

  const currentRole = roleConfig[role as keyof typeof roleConfig];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center mb-4">
            <Car className="h-8 w-8 text-primary mr-2" />
            <span className="font-bold text-xl text-gradient">VehicleRent</span>
          </div>
          <h1 className="text-2xl font-bold">{currentRole?.title}</h1>
          <p className="text-muted-foreground text-sm mt-2">
            {currentRole?.description}
          </p>
        </div>

        {/* Auth Card */}
        <Card className="shadow-card-hover glass">
          <CardHeader>
            <CardTitle className="text-center">Welcome</CardTitle>
            <CardDescription className="text-center">
              Sign in to your account or create a new one
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="register">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password"
                  />
                </div>
                <Button 
                  className="w-full" 
                  variant="primary"
                  onClick={() => handleAuth("login")}
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </TabsContent>
              
              <TabsContent value="register" className="space-y-4 mt-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-reg">Email</Label>
                  <Input 
                    id="email-reg" 
                    type="email" 
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-reg">Password</Label>
                  <Input 
                    id="password-reg" 
                    type="password" 
                    placeholder="Create a password"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input 
                    id="confirm-password" 
                    type="password" 
                    placeholder="Confirm your password"
                  />
                </div>
                <Button 
                  className="w-full" 
                  variant="primary"
                  onClick={() => handleAuth("register")}
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;