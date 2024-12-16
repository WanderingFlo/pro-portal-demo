import React, { useState } from 'react';
import { GraduationCap, Award, Clock, ChevronRight, Star, CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const TrainingCareerPage = () => {
  const careerPath = {
    current: {
      role: "Tax Pro",
      level: 2,
      yearsInRole: 1.5
    },
    next: {
      role: "Tax Pro Review",
      requirements: [
        { id: 1, name: "Client Rating", target: "4.5★", current: "4.8★", completed: true },
        { id: 2, name: "Returns Completed", target: "200", current: "180", completed: false },
        { id: 3, name: "Required Certifications", target: "6", current: "5", completed: false }
      ]
    }
  };

  const requiredTraining = [
    {
      id: 1,
      title: "Tax Law Update 2024",
      type: "required",
      deadline: "Dec 20, 2024",
      duration: "2 hours",
      status: "pending",
      progress: 0
    },
    {
      id: 2,
      title: "Client Data Security",
      type: "required",
      deadline: "Dec 15, 2024",
      duration: "1 hour",
      status: "in-progress",
      progress: 60
    }
  ];

  const optionalTraining = [
    {
      id: 1,
      title: "Advanced Tax Planning",
      duration: "3 hours",
      benefit: "Qualify for complex returns",
      incentive: 100,
      type: "skill-development"
    },
    {
      id: 2,
      title: "Business Tax Fundamentals",
      duration: "4 hours",
      benefit: "Handle business clients",
      incentive: 150,
      type: "specialization"
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "Client Service Excellence",
      date: "Dec 1, 2024",
      description: "Maintained 4.8★ rating for 3 months",
      points: 500
    },
    {
      id: 2,
      title: "Quick Learner",
      date: "Nov 28, 2024",
      description: "Completed all certifications ahead of schedule",
      points: 300
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Training & Career Development</h2>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          View All Courses
        </button>
      </div>

      {/* Career Progress Card */}
      <Card>
        <CardHeader>
          <CardTitle>Career Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{careerPath.current.role}</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    Level {careerPath.current.level}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {careerPath.current.yearsInRole} years in role
                </p>
              </div>
              <ChevronRight className="h-6 w-6 text-gray-400" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-600">{careerPath.next.role}</h3>
                <p className="text-sm text-gray-500">Next career step</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Requirements for {careerPath.next.role}</h4>
              {careerPath.next.requirements.map(req => (
                <div key={req.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {req.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <Clock className="h-5 w-5 text-gray-400" />
                    )}
                    <span className="text-sm">{req.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{req.current}</span>
                    <span className="text-sm text-gray-400">/</span>
                    <span className="text-sm text-gray-600">{req.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Required Training */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-orange-500" />
            Required Training
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {requiredTraining.map(training => (
              <div key={training.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{training.title}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-gray-500">
                        <Clock className="h-4 w-4 inline mr-1" />
                        {training.duration}
                      </span>
                      <span className="text-sm text-orange-600">
                        Due: {training.deadline}
                      </span>
                    </div>
                  </div>
                  <button className="bg-green-600 text-white px-4 py-1 rounded text-sm hover:bg-green-700">
                    {training.progress > 0 ? 'Continue' : 'Start'}
                  </button>
                </div>
                {training.progress > 0 && (
                  <div className="mt-3">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{training.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div 
                        className="h-2 bg-green-500 rounded-full transition-all" 
                        style={{ width: `${training.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Optional Training Opportunities */}
      <Card>
        <CardHeader>
          <CardTitle>Development Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {optionalTraining.map(training => (
              <div key={training.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium">{training.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{training.benefit}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-gray-500">
                        <Clock className="h-4 w-4 inline mr-1" />
                        {training.duration}
                      </span>
                      <span className="text-sm text-green-600">
                        +${training.incentive} completion bonus
                      </span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-1 rounded text-sm hover:bg-blue-700">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-yellow-500" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievements.map(achievement => (
              <div key={achievement.id} className="flex items-center justify-between p-4 border-b last:border-0">
                <div className="flex items-center gap-3">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <div>
                    <h4 className="font-medium">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-yellow-600">
                  +{achievement.points} pts
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrainingCareerPage;