import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsCard } from "@/components/StatsCard";
import { 
  Wrench, 
  MapPin, 
  Phone, 
  Clock,
  Star,
  DollarSign,
  LogOut,
  Bell,
  Settings,
  Navigation,
  User,
  AlertTriangle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const MechanicDashboard = () => {
  const navigate = useNavigate();

  // Mock data
  const emergencyRequests = [
    {
      id: "ER001",
      customer: "John Doe",
      vehicle: "Premium SUV",
      location: "Times Square, NY",
      distance: "2.3 miles",
      issue: "Engine overheating",
      timestamp: "10 mins ago",
      phone: "+1 (555) 123-4567"
    },
    {
      id: "ER002", 
      customer: "Sarah Wilson",
      vehicle: "Compact Car",
      location: "Central Park, NY", 
      distance: "4.1 miles",
      issue: "Flat tire",
      timestamp: "25 mins ago",
      phone: "+1 (555) 987-6543"
    }
  ];

  const serviceHistory = [
    {
      id: "SH001",
      customer: "Mike Johnson",
      service: "Battery replacement",
      date: "Dec 18, 2024",
      rating: 5,
      earnings: 85
    },
    {
      id: "SH002",
      customer: "Lisa Brown",
      service: "Tire change",
      date: "Dec 17, 2024", 
      rating: 4,
      earnings: 45
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Top Navigation */}
      <nav className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Wrench className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl text-gradient">VehicleRent</span>
              <span className="ml-4 text-sm font-medium text-muted-foreground">Mechanic Portal</span>
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
          <h1 className="text-3xl font-bold text-gradient mb-2">Mechanic Dashboard</h1>
          <p className="text-muted-foreground">Respond to emergency requests and manage your services</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Active Requests"
            value="3"
            icon={AlertTriangle}
            description="Pending responses"
          />
          <StatsCard
            title="Services Completed"
            value="127"
            icon={Wrench}
            description="Total jobs"
            trend={{ value: 8, label: "this month", positive: true }}
          />
          <StatsCard
            title="Average Rating"
            value="4.8"
            icon={Star}
            description="Customer satisfaction"
          />
          <StatsCard
            title="Monthly Earnings"
            value="$2,340"
            icon={DollarSign}
            description="This month"
            trend={{ value: 15, label: "vs last month", positive: true }}
          />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="requests" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:w-fit">
            <TabsTrigger value="requests">Emergency Requests</TabsTrigger>
            <TabsTrigger value="active">Active Jobs</TabsTrigger>
            <TabsTrigger value="history">Service History</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Emergency Requests */}
          <TabsContent value="requests" className="mt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Nearby Emergency Requests</h2>
                <Button variant="outline">
                  <Navigation className="h-4 w-4 mr-2" />
                  Update Location
                </Button>
              </div>
              
              <div className="grid gap-4">
                {emergencyRequests.map((request) => (
                  <div key={request.id} className="glass rounded-lg p-6 hover:shadow-card-hover animate-smooth">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{request.customer}</h3>
                          <span className="px-2 py-1 bg-destructive/10 text-destructive text-xs rounded-full font-medium">
                            URGENT
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <MapPin className="h-4 w-4 text-muted-foreground" />
                              <span>{request.location}</span>
                              <span className="text-primary font-medium">({request.distance})</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              <span>{request.phone}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <AlertTriangle className="h-4 w-4 text-warning" />
                              <span>{request.issue}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>{request.timestamp}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-4">
                          Vehicle: {request.vehicle}
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-2 ml-4">
                        <Button variant="primary" size="sm">
                          Accept Job
                        </Button>
                        <Button variant="outline" size="sm">
                          View Location
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Active Jobs */}
          <TabsContent value="active" className="mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Current Jobs</h2>
              <div className="glass rounded-lg p-6">
                <div className="text-center py-8">
                  <Wrench className="h-12 w-12 mx-auto mb-3 text-muted-foreground/50" />
                  <p className="text-muted-foreground">No active jobs at the moment</p>
                  <p className="text-sm text-muted-foreground">
                    Accept emergency requests to start working
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Service History */}
          <TabsContent value="history" className="mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Service History</h2>
              <div className="grid gap-4">
                {serviceHistory.map((service) => (
                  <div key={service.id} className="glass rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{service.service}</h3>
                        <p className="text-sm text-muted-foreground">
                          Customer: {service.customer}
                        </p>
                        <p className="text-sm text-muted-foreground">{service.date}</p>
                        
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-warning text-warning" />
                            <span className="text-sm font-medium">{service.rating}/5</span>
                          </div>
                          <span className="text-success font-bold">${service.earnings}</span>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <Button size="sm" variant="outline">View Details</Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Profile */}
          <TabsContent value="profile" className="mt-6">
            <div className="max-w-2xl">
              <h2 className="text-xl font-semibold mb-6">Mechanic Profile</h2>
              <div className="glass rounded-lg p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Wrench className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Mike Rodriguez</h3>
                    <p className="text-muted-foreground">Certified Mechanic</p>
                    <p className="text-sm text-muted-foreground">
                      5 years experience • ASE Certified
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium">Contact Information</h4>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium">Phone Number</label>
                        <p className="text-sm text-muted-foreground">+1 (555) 789-0123</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Service Area</label>
                        <p className="text-sm text-muted-foreground">Manhattan, NY (15 mile radius)</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Availability</label>
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-success/10 text-success">
                          Available Now
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Engine Repair",
                        "Tire Service", 
                        "Battery Replacement",
                        "Brake Service",
                        "Emergency Towing"
                      ].map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4 border-t">
                  <Button variant="primary">Update Profile</Button>
                  <Button variant="outline">Change Availability</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MechanicDashboard;