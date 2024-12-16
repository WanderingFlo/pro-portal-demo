import React, { useState } from 'react';
import { Calendar, Clock, Map, DollarSign, AlertCircle, CheckCircle, X } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const SchedulePage = () => {
  // Mock data for demonstration
  const [viewMode, setViewMode] = useState('week'); // 'week' or 'month'
  const [selectedDate, setSelectedDate] = useState(new Date());

  const scheduledShifts = [
    {
      id: 1,
      date: "2024-12-14",
      startTime: "09:00",
      endTime: "17:00",
      location: "Downtown Office",
      status: "confirmed",
      distance: "3.2 miles"
    },
    {
      id: 2,
      date: "2024-12-15",
      startTime: "10:00",
      endTime: "18:00",
      location: "Westside Office",
      status: "confirmed",
      distance: "5.1 miles"
    }
  ];

  const availableShifts = [
    {
      id: 3,
      date: "2024-12-16",
      startTime: "11:00",
      endTime: "19:00",
      location: "Southside Office",
      incentive: 50,
      distance: "4.7 miles",
      deadline: "Respond by 12/15"
    },
    {
      id: 4,
      date: "2024-12-17",
      startTime: "08:00",
      endTime: "16:00",
      location: "Downtown Office",
      incentive: 25,
      distance: "3.2 miles",
      deadline: "Respond by 12/16"
    }
  ];

  const scheduleChanges = [
    {
      id: 1,
      type: "modification",
      originalShift: {
        date: "2024-12-18",
        startTime: "09:00",
        endTime: "17:00"
      },
      newShift: {
        date: "2024-12-18",
        startTime: "11:00",
        endTime: "19:00"
      },
      reason: "Shift in demand",
      deadline: "Respond by 12/14"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Schedule Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">My Schedule</h2>
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setViewMode('week')}
              className={`px-3 py-1 rounded-md text-sm ${
                viewMode === 'week' ? 'bg-white shadow' : ''
              }`}
            >
              Week
            </button>
            <button
              onClick={() => setViewMode('month')}
              className={`px-3 py-1 rounded-md text-sm ${
                viewMode === 'month' ? 'bg-white shadow' : ''
              }`}
            >
              Month
            </button>
          </div>
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
          Request Time Off
        </button>
      </div>

      {/* Schedule Changes Alert */}
      {scheduleChanges.length > 0 && (
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="pt-6">
            {scheduleChanges.map(change => (
              <div key={change.id} className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-orange-800">Schedule Change Required</p>
                  <p className="text-sm text-orange-700 mt-1">
                    Your shift on {change.originalShift.date} needs to be changed from{' '}
                    {change.originalShift.startTime} - {change.originalShift.endTime} to{' '}
                    {change.newShift.startTime} - {change.newShift.endTime}
                  </p>
                  <div className="mt-3 flex gap-2">
                    <button className="bg-orange-200 text-orange-800 px-3 py-1 rounded text-sm hover:bg-orange-300">
                      Accept Change
                    </button>
                    <button className="bg-white text-orange-800 px-3 py-1 rounded text-sm border border-orange-200 hover:bg-orange-50">
                      Decline
                    </button>
                  </div>
                  <p className="text-xs text-orange-600 mt-2">{change.deadline}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Current Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Scheduled Shifts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scheduledShifts.map(shift => (
              <div key={shift.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-lg border">
                    <span className="text-sm font-medium">
                      {new Date(shift.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-xl font-bold">
                      {new Date(shift.date).getDate()}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{shift.startTime} - {shift.endTime}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Map className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{shift.location}</span>
                      <span className="text-xs text-gray-500">({shift.distance})</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    Confirmed
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Available Shifts */}
      <Card>
        <CardHeader>
          <CardTitle>Available Shifts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {availableShifts.map(shift => (
              <div key={shift.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-lg border">
                    <span className="text-sm font-medium">
                      {new Date(shift.date).toLocaleDateString('en-US', { month: 'short' })}
                    </span>
                    <span className="text-xl font-bold">
                      {new Date(shift.date).getDate()}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{shift.startTime} - {shift.endTime}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Map className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{shift.location}</span>
                      <span className="text-xs text-gray-500">({shift.distance})</span>
                    </div>
                    {shift.incentive && (
                      <div className="flex items-center gap-2 mt-1">
                        <DollarSign className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-green-600">+${shift.incentive} bonus</span>
                      </div>
                    )}
                    <p className="text-xs text-gray-500 mt-1">{shift.deadline}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                    Accept Shift
                  </button>
                  <button className="text-gray-600 px-4 py-2 rounded-lg border hover:bg-gray-50 transition-colors text-sm">
                    Not Interested
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Hours This Week</span>
              </div>
              <span className="text-xl font-bold">32/40</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Extra Shifts Bonus</span>
              </div>
              <span className="text-xl font-bold text-green-600">+$75</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-500" />
                <span className="font-medium">Time Off Balance</span>
              </div>
              <span className="text-xl font-bold">24hrs</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SchedulePage;