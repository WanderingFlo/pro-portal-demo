import React, { useState } from 'react';
import { DollarSign, TrendingUp, Award, Clock, Calendar, LineChart } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const PayBenefitsPage = () => {
  // Mock data
  const currentPeriod = {
    earnings: {
      current: 1245.00,
      projected: 1500.00,
      ytd: 45250.00,
      lastPeriod: 1180.00
    },
    hours: {
      current: 32,
      scheduled: 40,
      overtime: 0
    },
    returns: {
      completed: 45,
      target: 50,
      bonus: 200
    }
  };

  const incentives = [
    {
      id: 1,
      name: "Extra Shift Bonus",
      amount: 50,
      description: "Available for shifts on Dec 15-16",
      deadline: "Dec 14, 2024",
      status: "available"
    },
    {
      id: 2,
      name: "Client Satisfaction Bonus",
      amount: 200,
      description: "Maintain 4.8+ rating for December",
      progress: 85,
      status: "in-progress"
    },
    {
      id: 3,
      name: "Return Volume Bonus",
      amount: 300,
      description: "Complete 200 returns this season",
      progress: 65,
      status: "in-progress"
    }
  ];

  const upcomingPayments = [
    {
      id: 1,
      date: "Dec 15, 2024",
      type: "Regular Pay",
      amount: 1245.00,
      status: "pending"
    },
    {
      id: 2,
      date: "Dec 15, 2024",
      type: "Performance Bonus",
      amount: 200.00,
      status: "pending"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Pay & Benefits</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-2">
          <LineChart className="h-4 w-4" />
          View Pay History
        </button>
      </div>

      {/* Current Period Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Current Period</p>
                <p className="text-2xl font-bold">${currentPeriod.earnings.current.toFixed(2)}</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500" />
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>Projected: ${currentPeriod.earnings.projected.toFixed(2)}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Hours This Period</p>
                <p className="text-2xl font-bold">{currentPeriod.hours.current}/{currentPeriod.hours.scheduled}</p>
              </div>
              <Clock className="h-8 w-8 text-blue-500" />
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <span>Overtime: {currentPeriod.hours.overtime} hours</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">YTD Earnings</p>
                <p className="text-2xl font-bold">${currentPeriod.earnings.ytd.toFixed(2)}</p>
              </div>
              <Calendar className="h-8 w-8 text-purple-500" />
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <span>Last Period: ${currentPeriod.earnings.lastPeriod.toFixed(2)}</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Returns & Bonus Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Returns & Bonus Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Returns Completed</span>
                <span className="text-sm text-gray-500">
                  {currentPeriod.returns.completed}/{currentPeriod.returns.target}
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full">
                <div 
                  className="h-2 bg-green-500 rounded-full" 
                  style={{ width: `${(currentPeriod.returns.completed / currentPeriod.returns.target) * 100}%` }}
                />
              </div>
              <p className="mt-1 text-sm text-green-600">
                Potential Bonus: ${currentPeriod.returns.bonus}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Available Incentives */}
      <Card>
        <CardHeader>
          <CardTitle>Available Incentives</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {incentives.map(incentive => (
              <div key={incentive.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-yellow-500" />
                    <span className="font-medium">{incentive.name}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{incentive.description}</p>
                  {incentive.progress && (
                    <div className="mt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{incentive.progress}%</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div 
                          className="h-2 bg-blue-500 rounded-full" 
                          style={{ width: `${incentive.progress}%` }}
                        />
                      </div>
                    </div>
                  )}
                  {incentive.deadline && (
                    <p className="text-xs text-gray-500 mt-2">Deadline: {incentive.deadline}</p>
                  )}
                </div>
                <div className="ml-4 text-right">
                  <p className="text-lg font-bold text-green-600">+${incentive.amount}</p>
                  <p className="text-xs text-gray-500 capitalize">{incentive.status}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Payments */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingPayments.map(payment => (
              <div key={payment.id} className="flex items-center justify-between p-3 border-b last:border-0">
                <div>
                  <p className="font-medium">{payment.type}</p>
                  <p className="text-sm text-gray-500">{payment.date}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">${payment.amount.toFixed(2)}</p>
                  <p className="text-xs text-gray-500 capitalize">{payment.status}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PayBenefitsPage;