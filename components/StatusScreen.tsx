import React, { useState } from 'react';
import Header from './Header';

interface StatusScreenProps {
  onBack: () => void;
}

const StatusScreen: React.FC<StatusScreenProps> = ({ onBack }) => {
  const [appId, setAppId] = useState('');
  const [showStatus, setShowStatus] = useState(false);

  const handleTrack = () => {
    if (appId.trim()) {
      setShowStatus(true);
    } else {
      alert('Please enter an Application ID.');
    }
  };
  
  const StatusTimeline = () => (
    <div className="mt-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Application Status for <span className="text-navy font-bold">{appId}</span></h3>
      <ol className="relative border-l border-gray-200">                  
        <li className="mb-10 ml-6">            
          <span className="absolute flex items-center justify-center w-6 h-6 bg-green-200 rounded-full -left-3 ring-8 ring-white">
            <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
          </span>
          <h4 className="flex items-center mb-1 text-base font-semibold text-gray-900">Verified</h4>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">June 23, 2024</time>
          <p className="text-sm text-gray-600">Your verification is complete. The report has been dispatched.</p>
        </li>
        <li className="mb-10 ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full -left-3 ring-8 ring-white">
            <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M20 4a2 2 0 00-2-2h-2V1a1 1 0 00-2 0v1h-3V1a1 1 0 00-2 0v1H6V1a1 1 0 00-2 0v1H2a2 2 0 00-2 2v2h20V4zM0 18a2 2 0 002 2h16a2 2 0 002-2V8H0v10z"></path></svg>
          </span>
          <h4 className="mb-1 text-base font-semibold text-gray-900">Under Review</h4>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">June 21, 2024</time>
          <p className="text-sm text-gray-600">Your documents and details are being reviewed by the concerned police station.</p>
        </li>
        <li className="ml-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full -left-3 ring-8 ring-white">
            <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
          </span>
          <h4 className="mb-1 text-base font-semibold text-gray-900">Submitted</h4>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400">June 20, 2024</time>
          <p className="text-sm text-gray-600">Your application has been successfully submitted and is pending review.</p>
        </li>
      </ol>
    </div>
  );

  return (
    <div>
      <Header title="Track Status" />
      <div className="p-6">
        <button onClick={onBack} className="text-navy hover:underline mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          Back to Home
        </button>

        <div className="space-y-4">
          <div>
            <label htmlFor="appId" className="block text-sm font-medium text-gray-700">Application ID</label>
            <input 
              type="text" 
              id="appId" 
              value={appId}
              onChange={(e) => {
                setAppId(e.target.value);
                setShowStatus(false);
              }}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-saffron focus:border-saffron" 
              placeholder="Enter your Application ID"
            />
          </div>
          <button
            onClick={handleTrack}
            className="w-full bg-navy text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-opacity-90 transition duration-300 ease-in-out"
          >
            Track Application
          </button>
        </div>

        {showStatus && <StatusTimeline />}

      </div>
    </div>
  );
};

export default StatusScreen;