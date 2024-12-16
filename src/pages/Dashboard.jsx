import React, { useState } from 'react';
import { Bell, Calendar, Award, DollarSign, BookOpen, HelpCircle, ChevronRight, Star, Home, GraduationCap, MessageSquare, Menu, X } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
// Navigation items for the sidebar
const navigationItems = [
  { icon: Home, label: 'Dashboard', id: 'dashboard' },
  { icon: Calendar, label: 'Schedule', id: 'schedule' },
  { icon: DollarSign, label: 'Pay & Benefits', id: 'pay' },
  { icon: GraduationCap, label: 'Training & Career', id: 'career' },
  { icon: Award, label: 'Recognition', id: 'recognition' },
  { icon: MessageSquare, label: 'Communication', id: 'communication' },
];

const DashboardCard = ({ title, icon: Icon, children }) => (
  <Card className="h-full">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <Icon className="h-4 w-4 text-gray-500" />
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const Sidebar = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <div className={`
    fixed left-0 top-0 h-full bg-white border-r w-64 
    transform transition-transform duration-200 ease-in-out
    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
    md:translate-x-0 md:static
  `}>
    <div className="p-4 border-b">
      <h2 className="text-lg font-bold">H&R Block Pro</h2>
    </div>
    <nav className="p-4 space-y-2">
      {navigationItems.map(({ icon: Icon, label, id }) => (
        <button
          key={id}
          onClick={() => {
            setActiveSection(id);
            setIsMobileMenuOpen(false);
          }}
          className={`
            w-full flex items-center gap-3 px-4 py-2 rounded-lg text-left
            ${activeSection === id ? 'bg-green-100 text-green-800' : 'hover:bg-gray-100'}
          `}
        >
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  </div>
);

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const urgentNews = [
    { id: 1, title: "Coverage needed in Downtown office", type: "urgent", time: "2h ago", incentive: "+$50 bonus" },
    { id: 2, title: "Schedule change for Friday", type: "urgent", time: "4h ago" },
    { id: 3, title: "New training requirement", type: "important", time: "1d ago", deadline: "Due in 5 days" }
  ];

  const achievements = [
    { id: 1, title: "Completed Tax Law Update Training", date: "Today", points: 100 },
    { id: 2, title: "Reached 4.8★ Client Rating", date: "Yesterday", points: 150 },
    { id: 3, title: "30 Returns Milestone", date: "2 days ago", points: 200 }
  ];

  const upcomingShifts = [
    { id: 1, date: "Today", time: "9:00 AM - 5:00 PM", location: "Downtown", status: "Confirmed" },
    { id: 2, date: "Tomorrow", time: "10:00 AM - 6:00 PM", location: "Westside", status: "Confirmed" },
    { id: 3, date: "Dec 15", time: "11:00 AM - 7:00 PM", location: "Southside", status: "Optional", incentive: "+$25" }
  ];

  const careerProgress = {
    currentRole: "Tax Pro",
    nextRole: "Tax Pro Review",
    progress: 75,
    requirements: [
      { title: "Client Rating", current: 4.8, target: 4.5, completed: true },
      { title: "Returns Completed", current: 180, target: 200, completed: false },
      { title: "Required Trainings", current: 5, target: 6, completed: false }
    ],
    earnings: {
      currentWeek: 1245,
      projected: 1500,
      bonus: {
        current: 450,
        target: 750,
        progress: 65
      }
    },
    stats: {
      returnsCompleted: 180,
      clientRating: 4.8,
      accuracy: 98.5
    }
  };

  const renderMainContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="space-y-4">
            {/* Key Metrics Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{careerProgress.stats.returnsCompleted}</p>
                    <p className="text-sm text-gray-500">Returns Completed</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{careerProgress.stats.clientRating}★</p>
                    <p className="text-sm text-gray-500">Client Rating</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <p className="text-2xl font-bold">{careerProgress.stats.accuracy}%</p>
                    <p className="text-sm text-gray-500">Accuracy Rate</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Urgent Updates */}
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <DashboardCard title="Urgent Updates" icon={Bell}>
                <div className="space-y-3">
                  {urgentNews.map(news => (
                    <div key={news.id} className="flex items-start gap-2 p-2 bg-red-50 rounded-lg">
                      <div className="h-2 w-2 mt-2 rounded-full bg-red-500" />
                      <div>
                        <p className="text-sm font-medium">{news.title}</p>
                        <p className="text-xs text-gray-500">{news.time}</p>
                        {news.incentive && (
                          <p className="text-xs text-green-600 font-medium">{news.incentive}</p>
                        )}
                        {news.deadline && (
                          <p className="text-xs text-orange-600">{news.deadline}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </DashboardCard>

              <DashboardCard title="My Schedule" icon={Calendar}>
                <div className="space-y-3">
                  {upcomingShifts.map(shift => (
                    <div key={shift.id} className="flex items-center justify-between p-2 border-b">
                      <div>
                        <p className="text-sm font-medium">{shift.date}</p>
                        <p className="text-xs text-gray-500">{shift.time}</p>
                        {shift.incentive && (
                          <p className="text-xs text-green-600">{shift.incentive}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-xs bg-blue-100 px-2 py-1 rounded">{shift.location}</span>
                        <p className="text-xs text-gray-500 mt-1">{shift.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </DashboardCard>

              <DashboardCard title="Earnings Overview" icon={DollarSign}>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">This Week</span>
                    <span className="text-lg font-bold">${careerProgress.earnings.currentWeek}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Projected</span>
                    <span className="text-sm text-green-600">+${careerProgress.earnings.projected - careerProgress.earnings.currentWeek}</span>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">Bonus Progress</span>
                      <span className="text-xs">${careerProgress.earnings.bonus.current}/${careerProgress.earnings.bonus.target}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-green-500 rounded-full" 
                        style={{ width: `${careerProgress.earnings.bonus.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </DashboardCard>
            </div>

            {/* Career Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Career Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{careerProgress.currentRole}</span>
                    <ChevronRight className="h-4 w-4" />
                    <span className="text-gray-500">{careerProgress.nextRole}</span>
                  </div>
                  
                  <div className="space-y-3">
                    {careerProgress.requirements.map((req, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {req.completed ? (
                            <div className="h-2 w-2 bg-green-500 rounded-full" />
                          ) : (
                            <div className="h-2 w-2 bg-gray-300 rounded-full" />
                          )}
                          <span className="text-sm">{req.title}</span>
                        </div>
                        <span className="text-sm">
                          {req.current} / {req.target}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Achievements */}
            <DashboardCard title="Recent Achievements" icon={Award}>
              <div className="space-y-3">
                {achievements.map(achievement => (
                  <div key={achievement.id} className="flex items-center justify-between p-2 border-b">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <div>
                        <p className="text-sm">{achievement.title}</p>
                        <p className="text-xs text-gray-500">{achievement.date}</p>
                      </div>
                    </div>
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                      +{achievement.points} pts
                    </span>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>
        );
      // Add other section renders here
      default:
        return (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-500">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} section coming soon...</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="md:hidden p-4 border-b bg-white flex justify-between items-center">
        <h2 className="text-lg font-bold">H&R Block Pro</h2>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      <div className="flex">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={setActiveSection}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main className="flex-1 p-4 md:p-6 overflow-auto min-h-screen">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">Welcome back, Sarah</h1>
              <div className="flex items-center gap-4">
                <Bell className="h-5 w-5 text-gray-500 cursor-pointer" />
                <HelpCircle className="h-5 w-5 text-gray-500 cursor-pointer" />
              </div>
            </div>
            {/* Main Content */}
            {renderMainContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;