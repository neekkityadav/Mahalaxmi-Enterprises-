import React from 'react';
import type { ApplicationData } from '../types';
import Header from './Header';

interface ReceiptScreenProps {
  data: ApplicationData;
  onBack: () => void;
}

const ReceiptScreen: React.FC<ReceiptScreenProps> = ({ data, onBack }) => {

  const DetailRow = ({ label, value }: { label: string, value: string }) => (
    <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{value}</dd>
    </div>
  );

  return (
    <div>
      <Header title="Application Acknowledgment" />
      <div className="p-6">
        <div className="text-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-gray-800 mt-2">Submission Successful!</h2>
          <p className="text-gray-600">Your application has been received. Please save your Application ID for future reference.</p>
        </div>

        <div className="border-2 border-dashed border-gray-300 bg-gray-50 rounded-lg p-4 text-center mb-6">
          <p className="text-sm font-medium text-gray-600">Your Application ID is:</p>
          <p className="text-2xl font-bold text-navy tracking-wider">{data.id}</p>
        </div>
        
        <div className="border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            <DetailRow label="Full Name" value={data.fullName} />
            <DetailRow label="Email Address" value={data.email} />
            <DetailRow label="Mobile Number" value={data.mobile} />
            <DetailRow label="Address" value={data.address} />
            <DetailRow label="Police Station" value={data.policeStation} />
            <DetailRow label="Submission Date" value={data.submissionDate} />
            <DetailRow label="UPI Transaction ID" value={data.upiTransactionId} />
            <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Documents Uploaded</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  {Object.values(data.documents).filter(file => file).map((file) => (
                    <li key={file!.name} className="pl-3 pr-4 py-2 flex items-center justify-between text-sm">
                      <div className="w-0 flex-1 flex items-center">
                        <svg className="flex-shrink-0 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a3 3 0 10-6 0v4a3 3 0 11-6 0V7a5 5 0 0110 0v4a1 1 0 11-2 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 flex-1 w-0 truncate">{file!.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
          <button onClick={() => window.print()} className="w-full flex-1 bg-navy text-white font-bold py-3 px-4 rounded-lg shadow-md hover:bg-opacity-90 transition duration-300 ease-in-out">
            Print / Save as PDF
          </button>
          <button onClick={onBack} className="w-full flex-1 bg-gray-200 text-gray-800 font-bold py-3 px-4 rounded-lg shadow-md hover:bg-gray-300 transition duration-300 ease-in-out">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptScreen;