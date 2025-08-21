import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StatsCard } from "@/components/StatsCard";
import { 
  Shield, 
  Users, 
  Car, 
  Wrench,
  DollarSign,
  TrendingUp,
  LogOut,
  Bell,
  Settings,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Mock data
  const pendingApprovals = [
    {
      id: "V001",
      name: "Elite Motors LLC",
      type: "Vendor",
      email: "contact@elitemotors.com",
      joinDate: "2024-12-20",
      vehicles: 5
    },
    {
      id: "M001", 
      name: "Quick Fix Auto",
      type: "Mechanic",
      email: "service@quickfix.com",
      joinDate: "2024-12-19",
      location: "New York, NY"
    }
  ];

  const users = [
    {
      id: "U001",
      name: "John Doe",
      email: "john@example.com",
      role: "User",
      status: "Active",
      joinDate: "2024-01-15"
    },
    {
      id: "U002",
      name: "Jane Smith", 
      email: "jane@example.com",
      role: "User",
      status: "Active",
      joinDate: "2024-02-20"
    },
    {
      id: "V001",
      name: "Elite Motors",
      email: "contact@elite.com", 
      role: "Vendor",
      status: "Approved",
      joinDate: "2024-03-10"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Top Navigation */}
      <nav className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl text-gradient">VehicleRent</span>
              <span className="ml-4 text-sm font-medium text-muted-foreground">Admin Panel</span>
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
          <h1 className="text-3xl font-bold text-gradient mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Monitor platform operations and manage system-wide settings</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <StatsCard
            title="Total Users"
            value="1,247"
            icon={Users}
            description="Platform users"
            trend={{ value: 12, label: "vs last month", positive: true }}
          />
          <StatsCard
            title="Active Vendors"
            value="89"
            icon={Car}
            description="Approved vendors"
            trend={{ value: 8, label: "new this month", positive: true }}
          />
          <StatsCard
            title="Mechanics"
            value="45"
            icon={Wrench}
            description="Service providers"
          />
          <StatsCard
            title="Platform Revenue"
            value="$45,230"
            icon={DollarSign}
            description="This month"
            trend={{ value: 18, label: "vs last month", positive: true }}
          />
          <StatsCard
            title="Pending Approvals"
            value="12"
            icon={Clock}
            description="Awaiting review"
          />
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 lg:w-fit">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="approvals">Approvals</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Platform Growth */}
              <div className="glass rounded-lg p-6">
                <h3 className="font-semibold mb-4">Platform Growth</h3>
                <div className="h-64 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <TrendingUp className="h-12 w-12 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground">Growth analytics chart</p>
                  </div>
                </div>
              </div>

              {/* System Health */}
              <div className="glass rounded-lg p-6">
                <h3 className="font-semibold mb-4">System Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Payment System</span>
                    </div>
                    <span className="text-success text-sm">Operational</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>GPS Services</span>
                    </div>
                    <span className="text-success text-sm">Operational</span>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span>Notification Service</span>
                    </div>
                    <span className="text-success text-sm">Operational</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Approvals */}
          <TabsContent value="approvals" className="mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Pending Approvals</h2>
              <div className="grid gap-4">
                {pendingApprovals.map((item) => (
                  <div key={item.id} className="glass rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">{item.email}</p>
                        <p className="text-sm text-muted-foreground">
                          Applied: {item.joinDate}
                        </p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            item.type === "Vendor" 
                              ? "bg-primary/10 text-primary" 
                              : "bg-accent/10 text-accent"
                          }`}>
                            {item.type}
                          </span>
                          {item.vehicles && (
                            <span className="text-xs text-muted-foreground">
                              {item.vehicles} vehicles to list
                            </span>
                          )}
                          {item.location && (
                            <span className="text-xs text-muted-foreground">
                              Location: {item.location}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <XCircle className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                        <Button size="sm" variant="success">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Approve
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Users Management */}
          <TabsContent value="users" className="mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">User Management</h2>
              <div className="glass rounded-lg overflow-hidden">
                <div className="p-4 border-b">
                  <div className="grid grid-cols-5 gap-4 font-medium text-sm text-muted-foreground">
                    <span>Name</span>
                    <span>Email</span>
                    <span>Role</span>
                    <span>Status</span>
                    <span>Actions</span>
                  </div>
                </div>
                <div className="divide-y">
                  {users.map((user) => (
                    <div key={user.id} className="p-4">
                      <div className="grid grid-cols-5 gap-4 items-center">
                        <span className="font-medium">{user.name}</span>
                        <span className="text-sm text-muted-foreground">{user.email}</span>
                        <span className={`text-xs px-2 py-1 rounded-full w-fit ${
                          user.role === "User" ? "bg-secondary text-secondary-foreground" :
                          user.role === "Vendor" ? "bg-primary/10 text-primary" :
                          "bg-accent/10 text-accent"
                        }`}>
                          {user.role}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full w-fit ${
                          user.status === "Active" ? "bg-success/10 text-success" : 
                          "bg-warning/10 text-warning"
                        }`}>
                          {user.status}
                        </span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">View</Button>
                          <Button size="sm" variant="ghost">Suspend</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Reviews Management */}
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Review Moderation</h2>
              <div className="glass rounded-lg p-6">
                <div className="text-center py-8">
                  <Users className="h-12 w-12 mx-auto mb-3 text-muted-foreground/50" />
                  <p className="text-muted-foreground">No reviews pending moderation</p>
                  <p className="text-sm text-muted-foreground">All reviews are approved and published</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics" className="mt-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <div className="glass rounded-lg p-6">
                <h3 className="font-semibold mb-4">Platform Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Daily Active Users</span>
                    <span className="font-bold">892</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Bookings</span>
                    <span className="font-bold">2,341</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platform Commission</span>
                    <span className="font-bold text-success">$4,523</span>
                  </div>
                  <div className="flex justify-between">
                    <span>User Retention Rate</span>
                    <span className="font-bold">87%</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-lg p-6">
                <h3 className="font-semibold mb-4">Revenue Breakdown</h3>
                <div className="h-64 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <DollarSign className="h-12 w-12 text-primary mx-auto mb-3" />
                    <p className="text-muted-foreground">Revenue analytics chart</p>
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

export default AdminDashboard;