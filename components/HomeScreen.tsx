import React from 'react';
import Header from './Header';

interface HomeScreenProps {
  onApply: () => void;
  onTrack: () => void;
}

const HeroIcon = () => (
  <div className="mx-auto mb-6 bg-saffron/10 p-4 rounded-full" style={{ width: 'fit-content' }}>
    <div className="bg-saffron/20 p-3 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-saffron" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    </div>
  </div>
);

const DocumentItem = ({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) => (
  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
    <div className="bg-navy/10 p-3 rounded-full text-navy">
      {icon}
    </div>
    <p className="text-sm font-semibold text-navy mt-2">{title}</p>
    <p className="text-xs text-gray-500">{subtitle}</p>
  </div>
);

const HomeScreen: React.FC<HomeScreenProps> = ({ onApply, onTrack }) => {
  return (
    <div className="flex flex-col flex-grow">
      <Header title="Easy Pune Police Verification" subtitle="Digital Service for Pune Citizens" />
      <div className="flex-grow p-6 md:p-8 flex flex-col items-center bg-white rounded-b-lg text-center">
        
        <HeroIcon />

        <h2 className="text-3xl font-bold text-navy mb-2">
          Digital Verification, Simplified.
        </h2>
        <p className="text-gray-600 mb-10 max-w-sm">
          Fast, secure, and hassle-free police verification for Pune citizens, right at your fingertips.
        </p>

        <div className="w-full space-y-4 max-w-md">
          <button
            onClick={onApply}
            className="w-full bg-saffron text-white font-bold py-4 px-4 rounded-lg shadow-md hover:bg-opacity-90 transition duration-300 ease-in-out flex items-center justify-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
            <span>Apply for Verification</span>
          </button>
          <button
            onClick={onTrack}
            className="w-full bg-navy text-white font-bold py-4 px-4 rounded-lg shadow-md hover:bg-opacity-90 transition duration-300 ease-in-out flex items-center justify-center space-x-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span>Track Status</span>
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 w-full max-w-md text-left">
          <h3 className="text-2xl font-bold text-navy mb-6 text-center">What You'll Need</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
             <DocumentItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z" /></svg>}
                title="Identity Proof"
                subtitle="(Aadhaar, etc.)"
             />
             <DocumentItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" /></svg>}
                title="Address Proof"
                subtitle="(Electricity Bill, etc.)"
             />
             <DocumentItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /></svg>}
                title="Birth Proof"
                subtitle="(Certificate, etc.)"
             />
              <DocumentItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>}
                title="Photo"
                subtitle="(Passport Size)"
             />
              <DocumentItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" /></svg>}
                title="Signature"
                subtitle="(On blank paper)"
             />
              <DocumentItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>}
                title="Company Letter"
                subtitle="(If applicable)"
             />
          </div>

          <div className="mt-8 p-3 bg-yellow-100 border border-yellow-300 rounded-lg text-sm text-yellow-800">
            <p><strong>✅ Tip:</strong> Have digital copies (JPG, PNG, PDF) of these documents ready before you start.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeScreen;