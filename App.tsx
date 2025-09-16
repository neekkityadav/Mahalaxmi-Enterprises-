import React, { useState } from 'react';
import type { ApplicationData } from './types';
import HomeScreen from './components/HomeScreen';
import FormScreen from './components/FormScreen';
import StatusScreen from './components/StatusScreen';
import ReceiptScreen from './components/ReceiptScreen';
import Footer from './components/Footer';

type Screen = 'home' | 'form' | 'status' | 'receipt';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('home');
  const [applicationData, setApplicationData] = useState<ApplicationData | null>(null);

  const handleFormSubmit = (data: ApplicationData) => {
    setApplicationData(data);
    setScreen('receipt');
  };

  const navigateTo = (targetScreen: Screen) => {
    setScreen(targetScreen);
  };
  
  const renderScreen = () => {
    switch (screen) {
      case 'form':
        return <FormScreen onSubmit={handleFormSubmit} onBack={() => navigateTo('home')} />;
      case 'status':
        return <StatusScreen onBack={() => navigateTo('home')} />;
      case 'receipt':
        return applicationData && <ReceiptScreen data={applicationData} onBack={() => navigateTo('home')} />;
      case 'home':
      default:
        return <HomeScreen onApply={() => navigateTo('form')} onTrack={() => navigateTo('status')} />;
    }
  };

  return (
    <div className="min-h-screen bg-white md:bg-gray-100 flex justify-center items-start md:py-8">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg min-h-screen md:min-h-0 relative flex flex-col">
        <main className="flex-grow flex flex-col">
          {renderScreen()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;