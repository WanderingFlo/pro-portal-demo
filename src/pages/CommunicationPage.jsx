import React, { useState } from 'react';
import { MessageSquare, AlertCircle, HelpCircle, User, Send, Clock, Phone } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const CommunicationPage = () => {
  const [activeTab, setActiveTab] = useState('messages');

  const messages = [
    {
      id: 1,
      from: "Office Leader",
      subject: "Schedule Update for Next Week",
      preview: "Due to increased demand, we're adjusting the office hours...",
      date: "2 hours ago",
      unread: true,
      priority: "high"
    },
    {
      id: 2,
      from: "District Manager",
      subject: "New Training Opportunity",
      preview: "We're excited to announce a new certification program...",
      date: "1 day ago",
      unread: false,
      priority: "normal"
    }
  ];

  const helpRequests = [
    {
      id: 1,
      type: "Technical Support",
      status: "open",
      created: "30 minutes ago",
      lastUpdate: "15 minutes ago",
      description: "Having issues accessing BlockWorks"
    },
    {
      id: 2,
      type: "Schedule Assistance",
      status: "in-progress",
      created: "2 hours ago",
      lastUpdate: "1 hour ago",
      description: "Need to adjust my availability for next week"
    }
  ];

  const quickActions = [
    {
      id: 1,
      title: "Contact Leader",
      icon: User,
      description: "Reach out to your office leader"
    },
    {
      id: 2,
      title: "Technical Support",
      icon: HelpCircle,
      description: "Get help with systems and tools"
    },
    {
      id: 3,
      title: "Virtual Assistant",
      icon: MessageSquare,
      description: "Get quick answers to common questions"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Communication Hub</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          New Message
        </button>
      </div>

      {/* Quick Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickActions.map(action => (
          <Card key={action.id} className="cursor-pointer hover:bg-gray-50 transition-colors">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <action.icon className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-medium">{action.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{action.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Communication Area */}
      <Card>
        <CardHeader>
          <div className="flex gap-4 border-b">
            <button
              onClick={() => setActiveTab('messages')}
              className={`pb-2 px-1 ${
                activeTab === 'messages'
                  ? 'border-b-2 border-green-600 text-green-600'
                  : 'text-gray-500'
              }`}
            >
              Messages
            </button>
            <button
              onClick={() => setActiveTab('help')}
              className={`pb-2 px-1 ${
                activeTab === 'help'
                  ? 'border-b-2 border-green-600 text-green-600'
                  : 'text-gray-500'
              }`}
            >
              Help Requests
            </button>
          </div>
        </CardHeader>
        <CardContent>
          {activeTab === 'messages' ? (
            <div className="space-y-4">
              {messages.map(message => (
                <div 
                  key={message.id}
                  className={`p-4 rounded-lg ${
                    message.unread ? 'bg-green-50' : 'bg-gray-50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{message.from}</span>
                        {message.priority === 'high' && (
                          <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                            Urgent
                          </span>
                        )}
                        {message.unread && (
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        )}
                      </div>
                      <h4 className="font-medium mt-1">{message.subject}</h4>
                      <p className="text-sm text-gray-600 mt-1">{message.preview}</p>
                      <p className="text-xs text-gray-500 mt-2">{message.date}</p>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MessageSquare className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {helpRequests.map(request => (
                <div key={request.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{request.type}</span>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          request.status === 'open' 
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {request.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{request.description}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-xs text-gray-500">
                          <Clock className="h-3 w-3 inline mr-1" />
                          Created {request.created}
                        </span>
                        <span className="text-xs text-gray-500">
                          Last update {request.lastUpdate}
                        </span>
                      </div>
                    </div>
                    <button className="text-green-600 hover:text-green-700">
                      <MessageSquare className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              ))}
              <button className="w-full bg-gray-100 text-gray-600 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                Create New Help Request
              </button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Virtual Assistant */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-green-600" />
            Virtual Assistant
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">How can I help you today?</p>
            <div className="mt-4 flex gap-2">
              <input 
                type="text" 
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700">
                <Send className="h-5 w-5" />
              </button>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-500">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                <button className="px-3 py-1 bg-white text-sm text-gray-600 rounded-full border hover:bg-gray-50">
                  Schedule change request
                </button>
                <button className="px-3 py-1 bg-white text-sm text-gray-600 rounded-full border hover:bg-gray-50">
                  Training requirements
                </button>
                <button className="px-3 py-1 bg-white text-sm text-gray-600 rounded-full border hover:bg-gray-50">
                  System access help
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="bg-red-50 border-red-100">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <Phone className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-medium text-red-800">Emergency Support</h3>
              <p className="text-sm text-red-600 mt-1">
                For urgent technical issues: 1-800-555-0123
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunicationPage;