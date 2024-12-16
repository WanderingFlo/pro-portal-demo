import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import SchedulePage from './pages/SchedulePage.jsx';
import PayBenefitsPage from './pages/PayBenefitsPage.jsx';
import RecognitionPage from './pages/RecognitionPage.jsx';
import TrainingCareerPage from './pages/TrainingCareerPage.jsx';
import CommunicationPage from './pages/CommunicationPage.jsx';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-gray-800 min-h-screen p-4">
          <div className="text-white text-xl font-bold mb-8">Menu</div>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white block py-2 px-4 rounded hover:bg-gray-700">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/schedule" className="text-gray-300 hover:text-white block py-2 px-4 rounded hover:bg-gray-700">
                Schedule
              </Link>
            </li>
            <li>
              <Link to="/pay" className="text-gray-300 hover:text-white block py-2 px-4 rounded hover:bg-gray-700">
                Pay & Benefits
              </Link>
            </li>
            <li>
              <Link to="/training" className="text-gray-300 hover:text-white block py-2 px-4 rounded hover:bg-gray-700">
                Training & Career
              </Link>
            </li>
            <li>
              <Link to="/recognition" className="text-gray-300 hover:text-white block py-2 px-4 rounded hover:bg-gray-700">
                Recognition
              </Link>
            </li>
            <li>
              <Link to="/communication" className="text-gray-300 hover:text-white block py-2 px-4 rounded hover:bg-gray-700">
                Communication
              </Link>
            </li>
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 p-8">
          <div className="bg-white rounded-lg shadow p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/pay" element={<PayBenefitsPage />} />
              <Route path="/training" element={<TrainingCareerPage />} />
              <Route path="/recognition" element={<RecognitionPage />} />
              <Route path="/communication" element={<CommunicationPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;