import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsCard } from "@/components/StatsCard";
import { VehicleCard } from "@/components/VehicleCard";
import { 
  Car, 
  DollarSign, 
  Calendar, 
  Star,
  Plus,
  LogOut,
  Bell,
  Settings,
  TrendingUp,
  Users,
  Activity
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import vehicle images
import vehicleSUV from "@/assets/vehicle-suv.jpg";
import vehicleSports from "@/assets/vehicle-sports.jpg";
import vehicleSedan from "@/assets/vehicle-sedan.jpg";

const VendorDashboard = () => {
  const navigate = useNavigate();

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
      availability: false,
      vendor: "Luxury Fleet"
    }
  ];

  const bookings = [
    {
      id: "B001",
      vehicle: "Premium SUV",
      customer: "John Doe",
      dates: "Dec 24-26, 2024",
      status: "Active",
      amount: 267
    },
    {
      id: "B002",
      vehicle: "Sports Coupe", 
      customer: "Jane Smith",
      dates: "Dec 28-30, 2024",
      status: "Confirmed",
      amount: 477
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
              <span className="ml-4 text-sm font-medium text-muted-foreground">Vendor Portal</span>
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
          <h1 className="text-3xl font-bold text-gradient mb-2">Vendor Dashboard</h1>
          <p className="text-muted-foreground">Manage your vehicle fleet and track performance</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <StatsCard
            title="Total Vehicles"
            value="12"
            icon={Car}
            description="Listed vehicles"
          />
          <StatsCard
            title="Active Bookings"
            value="8"
            icon={Calendar}
            description="Current rentals"
            trend={{ value: 15, label: "vs last month", positive: true }}
          />
          <StatsCard
            title="Monthly Revenue"
            value="$12,450"
            icon={DollarSign}
            description="This month"
            trend={{ value: 23, label: "vs last month", positive: true }}
          />
          <StatsCard
            title="Average Rating"
            value="4.7"
            icon={Star}
            description="Customer satisfaction"
          />
          <StatsCard
            title="Active Vehicles"
            value="10"
            icon={Activity}
            description="Currently available"
          />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="vehicles">My Vehicles</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Bookings */}
              <div className="glass rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Recent Bookings</h3>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                <div className="space-y-3">
                  {bookings.slice(0, 3).map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{booking.vehicle}</p>
                        <p className="text-sm text-muted-foreground">
                          {booking.customer} • {booking.dates}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-success">${booking.amount}</p>
                        <span className="text-xs px-2 py-1 bg-success/10 text-success rounded-full">
                          {booking.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Chart Placeholder */}
              <div className="glass rounded-lg p-6">
                <h3 className="font-semibold mb-4">Revenue Overview</h3>
                <div className="h-64 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground">Revenue chart will be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* My Vehicles */}
          <TabsContent value="vehicles" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Your Vehicles</h2>
              <Button variant="primary">
                <Plus className="h-4 w-4 mr-2" />
                Add Vehicle
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {vehicles.map((vehicle) => (
                <VehicleCard
                  key={vehicle.id}
                  {...vehicle}
                  onView={(id) => navigate(`/vehicle/${id}`)}
                />
              ))}
            </div>
          </TabsContent>

          {/* Bookings */}
          <TabsContent value="bookings" className="mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Manage Bookings</h2>
              <div className="grid gap-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="glass rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{booking.vehicle}</h3>
                        <p className="text-sm text-muted-foreground">
                          Customer: {booking.customer}
                        </p>
                        <p className="text-sm text-muted-foreground">{booking.dates}</p>
                        <p className="text-lg font-bold text-success mt-2">${booking.amount}</p>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                          {booking.status}
                        </span>
                        <div className="mt-3 space-x-2">
                          <Button size="sm" variant="outline">View Details</Button>
                          <Button size="sm" variant="primary">Contact Customer</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="mt-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="glass rounded-lg p-6">
                <h3 className="font-semibold mb-4">Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Booking Rate</span>
                    <span className="font-bold">73%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Average Daily Rate</span>
                    <span className="font-bold">$95</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Customer Satisfaction</span>
                    <span className="font-bold">4.7/5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue Growth</span>
                    <span className="font-bold text-success">+23%</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-lg p-6">
                <h3 className="font-semibold mb-4">Top Performing Vehicles</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Premium SUV</span>
                    <span className="text-success font-medium">$2,140</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sports Coupe</span>
                    <span className="text-success font-medium">$1,890</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Economy Sedan</span>
                    <span className="text-success font-medium">$1,450</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VendorDashboard;