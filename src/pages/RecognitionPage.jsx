import React, { useState } from 'react';
import { Award, Star, Trophy, Heart, TrendingUp, MessageSquare } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const RecognitionPage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const achievements = [
    {
      id: 1,
      type: 'milestone',
      title: "200 Returns Milestone",
      date: "Today",
      description: "Completed 200 returns this season",
      points: 500,
      kudos: 12,
      badge: "Expert Tax Pro"
    },
    {
      id: 2,
      type: 'rating',
      title: "Client Excellence",
      date: "Yesterday",
      description: "Maintained 4.8★ rating for December",
      points: 300,
      kudos: 8,
      badge: "Client Favorite"
    },
    {
      id: 3,
      type: 'training',
      title: "Skill Master",
      date: "2 days ago",
      description: "Completed all required certifications ahead of schedule",
      points: 200,
      kudos: 5,
      badge: "Quick Learner"
    }
  ];

  const teamRecognition = [
    {
      id: 1,
      from: "John Smith",
      to: "Sarah Wilson",
      message: "Thanks for helping with that complex return yesterday!",
      date: "1 hour ago",
      likes: 5
    },
    {
      id: 2,
      from: "Maria Garcia",
      to: "Sarah Wilson",
      message: "Great job mentoring the new team members this week",
      date: "2 hours ago",
      likes: 3
    }
  ];

  const stats = {
    totalPoints: 2450,
    rank: 3,
    totalTeamMembers: 25,
    streakDays: 15,
    badges: 8,
    kudosReceived: 45
  };

  const leaderboard = [
    { id: 1, name: "Alex Thompson", points: 3200, position: 1 },
    { id: 2, name: "Maria Garcia", points: 2800, position: 2 },
    { id: 3, name: "Sarah Wilson", points: 2450, position: 3, isCurrentUser: true },
    { id: 4, name: "James Chen", points: 2300, position: 4 },
    { id: 5, name: "Lisa Parker", points: 2100, position: 5 }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Recognition & Achievements</h2>
        <div className="flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setSelectedPeriod('week')}
            className={`px-3 py-1 rounded-md text-sm ${
              selectedPeriod === 'week' ? 'bg-white shadow' : ''
            }`}
          >
            This Week
          </button>
          <button
            onClick={() => setSelectedPeriod('month')}
            className={`px-3 py-1 rounded-md text-sm ${
              selectedPeriod === 'month' ? 'bg-white shadow' : ''
            }`}
          >
            This Month
          </button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Points</p>
                <p className="text-2xl font-bold">{stats.totalPoints}</p>
              </div>
              <Star className="h-8 w-8 text-yellow-500" />
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Trophy className="h-4 w-4 mr-1" />
              <span>Rank {stats.rank} of {stats.totalTeamMembers}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Achievement Streak</p>
                <p className="text-2xl font-bold">{stats.streakDays} Days</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-500" />
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Award className="h-4 w-4 mr-1" />
              <span>{stats.badges} Badges Earned</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Kudos Received</p>
                <p className="text-2xl font-bold">{stats.kudosReceived}</p>
              </div>
              <Heart className="h-8 w-8 text-red-500" />
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>From {stats.totalTeamMembers} Team Members</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {achievements.map(achievement => (
              <div key={achievement.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex gap-3">
                    <div className="mt-1">
                      <Award className="h-6 w-6 text-yellow-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">{achievement.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{achievement.description}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          +{achievement.points} pts
                        </span>
                        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                          {achievement.badge}
                        </span>
                        <span className="text-sm text-gray-500">{achievement.date}</span>
                      </div>
                    </div>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Heart className="h-5 w-5" />
                    <span className="text-xs">{achievement.kudos}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle>Top Performers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {leaderboard.map(entry => (
              <div 
                key={entry.id} 
                className={`flex items-center justify-between p-3 rounded-lg ${
                  entry.isCurrentUser ? 'bg-green-50 border border-green-100' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 flex items-center justify-center rounded-full ${
                    entry.position <= 3 ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {entry.position}
                  </span>
                  <span className={`font-medium ${entry.isCurrentUser ? 'text-green-800' : ''}`}>
                    {entry.name}
                  </span>
                </div>
                <span className="font-medium">{entry.points} pts</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Team Recognition */}
      <Card>
        <CardHeader>
          <CardTitle>Team Recognition</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teamRecognition.map(recognition => (
              <div key={recognition.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">{recognition.from}</span>
                      {' → '}
                      <span className="font-medium">{recognition.to}</span>
                    </p>
                    <p className="mt-2">{recognition.message}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-gray-500">{recognition.date}</span>
                      <button className="flex items-center gap-1 text-gray-500 hover:text-red-500">
                        <Heart className="h-4 w-4" />
                        <span className="text-sm">{recognition.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <button className="w-full bg-gray-100 text-gray-600 py-2 rounded-lg hover:bg-gray-200 transition-colors">
              Give Recognition
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecognitionPage;