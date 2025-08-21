import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VehicleCard } from "@/components/VehicleCard";
import { StatsCard } from "@/components/StatsCard";
import { 
  Search, 
  Filter, 
  Car, 
  Calendar, 
  MapPin,
  Bell,
  User,
  Settings,
  LogOut,
  Star,
  CreditCard,
  Clock,
  AlertTriangle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import vehicle images
import vehicleSUV from "@/assets/vehicle-suv.jpg";
import vehicleSports from "@/assets/vehicle-sports.jpg";
import vehicleSedan from "@/assets/vehicle-sedan.jpg";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data
  const vehicles = [
    {
      id: "1",
      name: "Premium SUV",
      image: vehicleSUV,
      type: "SUV",
      fuelType: "Gasoline",
      location: "New York, NY",
      dailyRate: 89,
      rating: 4.8,
      capacity: 7,
      availability: true,
      vendor: "Elite Motors"
    },
    {
      id: "2", 
      name: "Sports Coupe",
      image: vehicleSports,
      type: "Sports",
      fuelType: "Premium",
      location: "Los Angeles, CA",
      dailyRate: 159,
      rating: 4.9,
      capacity: 2,
      availability: true,
      vendor: "Luxury Fleet"
    },
    {
      id: "3",
      name: "Economy Sedan",
      image: vehicleSedan,
      type: "Sedan", 
      fuelType: "Hybrid",
      location: "Chicago, IL",
      dailyRate: 49,
      rating: 4.6,
      capacity: 5,
      availability: false,
      vendor: "City Cars"
    }
  ];

  const bookings = [
    {
      id: "B001",
      vehicle: "Premium SUV",
      dates: "Dec 24-26, 2024",
      status: "Confirmed",
      amount: 267
    },
    {
      id: "B002", 
      vehicle: "Economy Sedan",
      dates: "Jan 15-18, 2024",
      status: "Pending",
      amount: 147
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Top Navigation */}
      <nav className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Car className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl text-gradient">VehicleRent</span>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => navigate("/")}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gradient mb-2">Welcome back, John!</h1>
          <p className="text-muted-foreground">Find your perfect vehicle for your next journey</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Active Bookings"
            value="2"
            icon={Calendar}
            description="Current rentals"
          />
          <StatsCard
            title="Total Spent"
            value="$1,247"
            icon={CreditCard}
            description="This year"
            trend={{ value: 12, label: "vs last year", positive: true }}
          />
          <StatsCard
            title="Reviews Given"
            value="8"
            icon={Star}
            description="Helpful feedback"
          />
          <StatsCard
            title="Emergency Requests"
            value="0"
            icon={AlertTriangle}
            description="All resolved"
          />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit">
            <TabsTrigger value="browse">Browse Vehicles</TabsTrigger>
            <TabsTrigger value="bookings">My Bookings</TabsTrigger>
            <TabsTrigger value="emergency">Emergency</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Browse Vehicles */}
          <TabsContent value="browse" className="mt-6">
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search vehicles by name, type, or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" className="sm:w-auto">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Button variant="outline" className="sm:w-auto">
                  <MapPin className="h-4 w-4 mr-2" />
                  Near Me
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {vehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  {...vehicle}
                  onView={(id) => navigate(`/vehicle/${id}`)}
                  onBook={(id) => navigate(`/book/${id}`)}
                />
              ))}
            </div>
          </TabsContent>

          {/* My Bookings */}
          <TabsContent value="bookings" className="mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Your Bookings</h2>
              <div className="grid gap-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="glass rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{booking.vehicle}</h3>
                        <p className="text-sm text-muted-foreground">{booking.dates}</p>
                        <p className="text-lg font-bold text-success mt-2">${booking.amount}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          booking.status === "Confirmed" 
                            ? "bg-success/10 text-success" 
                            : "bg-warning/10 text-warning"
                        }`}>
                          {booking.status}
                        </span>
                        <div className="mt-3 space-x-2">
                          <Button size="sm" variant="outline">View Details</Button>
                          <Button size="sm" variant="primary">Contact Vendor</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Emergency Support */}
          <TabsContent value="emergency" className="mt-6">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold mb-4">Emergency Support</h2>
              <div className="glass rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-destructive mb-2">Need immediate help?</h3>
                <p className="text-muted-foreground mb-4">
                  Our GPS system will find the nearest mechanics to assist you.
                </p>
                <Button variant="primary" size="lg" className="w-full">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Request Emergency Support
                </Button>
              </div>
              
              <div className="glass rounded-lg p-6">
                <h3 className="font-semibold mb-4">Recent Emergency Requests</h3>
                <div className="text-center py-8 text-muted-foreground">
                  <AlertTriangle className="h-12 w-12 mx-auto mb-3 text-muted-foreground/50" />
                  <p>No emergency requests found</p>
                  <p className="text-sm">Hope you never need this feature!</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Profile */}
          <TabsContent value="profile" className="mt-6">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
              <div className="glass rounded-lg p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">John Doe</h3>
                    <p className="text-muted-foreground">john.doe@example.com</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Change Photo
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <Input value="John Doe" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <Input value="john.doe@example.com" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Phone</label>
                    <Input value="+1 (555) 123-4567" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">License Number</label>
                    <Input value="DL123456789" className="mt-1" />
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="primary">Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserDashboard;