import React, { useState } from 'react';
import type { ApplicationData } from '../types';
import { POLICE_STATIONS } from '../types';
import Header from './Header';
import DocumentUploadCard from './DocumentUploadCard';
import GPayQRCode from './GPayQRCode';

interface FormScreenProps {
  onSubmit: (data: ApplicationData) => void;
  onBack: () => void;
}

const SectionHeader = ({ step, title, subtitle }: { step: string, title: string, subtitle: string }) => (
  <div className="flex items-start space-x-4 mb-6">
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-navy text-white rounded-full font-bold text-xl shadow-md">
      {step}
    </div>
    <div>
      <h3 className="text-xl font-bold text-navy">{title}</h3>
      <p className="text-sm text-gray-500">{subtitle}</p>
    </div>
  </div>
);

const InputField = ({ id, label, type = 'text', value, onChange, required = true, icon, children, placeholder }: { id: string, label: string, type?: string, value: string, onChange: (e: any) => void, required?: boolean, icon: React.ReactNode, children?: React.ReactNode, placeholder?: string }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {icon}
      </div>
      {children ? children : (
         <input 
          type={type} 
          id={id} 
          value={value} 
          onChange={onChange} 
          className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 bg-gray-50 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron" 
          required={required}
          placeholder={placeholder}
        />
      )}
    </div>
  </div>
);


const FormScreen: React.FC<FormScreenProps> = ({ onSubmit, onBack }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [policeStation, setPoliceStation] = useState(POLICE_STATIONS[0]);
  const [upiTransactionId, setUpiTransactionId] = useState('');
  
  const [documents, setDocuments] = useState<ApplicationData['documents']>({
    identityProof: null,
    pancard: null,
    addressProof: null,
    dobProof: null,
    photo: null,
    signature: null,
    purposeSpecificDoc: null,
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files.length > 0) {
      setDocuments(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !address) {
      alert('Please fill all the personal details.');
      return;
    }
     if (!mobile.match(/^\d{10}$/)) {
      alert('Please enter a valid 10-digit mobile number.');
      return;
    }
    const requiredDocs: (keyof typeof documents)[] = ['identityProof', 'pancard', 'addressProof', 'dobProof', 'photo', 'signature'];
    const missingDocs = requiredDocs.filter(docKey => !documents[docKey]);
    if (missingDocs.length > 0) {
      const missingLabels = missingDocs.map(key => key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()));
      alert(`Please upload all required documents. Missing: ${missingLabels.join(', ')}`);
      return;
    }
     if (!upiTransactionId.trim()) {
      alert('Please enter the UPI Transaction ID after payment.');
      return;
    }

    const submissionId = `PVP${Date.now()}`;
    const submissionDate = new Date().toLocaleString();

    console.log("--- Simulating Forwarding Process ---");
    const textData = { id: submissionId, fullName, email, mobile, address, policeStation, upiTransactionId, submissionDate };
    const fileData: { [key: string]: string } = {};
    for (const key in documents) {
        const file = documents[key as keyof typeof documents];
        if (file) { fileData[key] = `${file.name} (${Math.round(file.size / 1024)} KB)`; }
    }
    console.log("\n[EMAIL SIMULATION]", { to: "mahalaxmienterprisespn@gmail.com", subject: `New App - ${submissionId}`, body: textData, attachments: fileData });
    console.log("\n[WHATSAPP SIMULATION]", { to: "+919860064115", message: `New app (${submissionId}) submitted.`, data: textData, files: fileData });
    console.log("\n--- Simulation Complete ---");
    
    onSubmit({ id: submissionId, fullName, email, mobile, address, policeStation, documents, submissionDate, upiTransactionId });
  };

  return (
    <div className="bg-gray-50 flex-grow">
      <Header title="Verification Form" />
      <form onSubmit={handleSubmit} className="p-4 md:p-6 space-y-8">
        
        <button type="button" onClick={onBack} className="text-navy font-semibold hover:underline flex items-center text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          Back to Home
        </button>

        {/* Step 1: Personal Details */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <SectionHeader step="1" title="Personal Details" subtitle="Please fill in your information accurately."/>
          <div className="space-y-4">
            <InputField id="fullName" label="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>} />
            <InputField id="email" label="Email Address" type="email" value={email} onChange={e => setEmail(e.target.value)} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>} />
            <InputField id="mobile" label="Mobile Number" type="tel" value={mobile} onChange={e => setMobile(e.target.value)} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>} />
            <InputField id="address" label="Full Address" value={address} onChange={e => setAddress(e.target.value)} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}>
               <textarea id="address" value={address} onChange={e => setAddress(e.target.value)} rows={3} className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 bg-gray-50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron" required></textarea>
            </InputField>
            <InputField id="policeStation" label="Local Police Station" value={policeStation} onChange={e => setPoliceStation(e.target.value)} icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>}>
              <select id="policeStation" value={policeStation} onChange={e => setPoliceStation(e.target.value)} className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 bg-gray-50 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron">
                {POLICE_STATIONS.map(station => <option key={station} value={station}>{station}</option>)}
              </select>
            </InputField>
          </div>
        </div>

        {/* Step 2: Document Upload */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <SectionHeader step="2" title="Upload Documents" subtitle="Click on each card to upload the required file." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <DocumentUploadCard label="Identity Proof" name="identityProof" fileName={documents.identityProof?.name} onChange={handleFileChange} description="e.g., Aadhaar Card"/>
            <DocumentUploadCard label="Pancard" name="pancard" fileName={documents.pancard?.name} onChange={handleFileChange} />
            <DocumentUploadCard label="Address Proof" name="addressProof" fileName={documents.addressProof?.name} onChange={handleFileChange} description="e.g., Electricity Bill"/>
            <DocumentUploadCard label="Date of Birth Proof" name="dobProof" fileName={documents.dobProof?.name} onChange={handleFileChange} description="Birth Certificate / School Leaving"/>
            <DocumentUploadCard label="Passport Photo" name="photo" fileName={documents.photo?.name} onChange={handleFileChange} />
            <DocumentUploadCard label="Signature" name="signature" fileName={documents.signature?.name} onChange={handleFileChange} />
            <DocumentUploadCard label="Company Letter" name="purposeSpecificDoc" fileName={documents.purposeSpecificDoc?.name} onChange={handleFileChange} isOptional={true} />
          </div>
        </div>
        
        {/* Step 3: Fee & Submission */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <SectionHeader step="3" title="Fee & Submission" subtitle="Complete the final step to submit your application."/>
            <div className="flex items-center justify-between p-4 bg-blue-50 border border-navy/20 rounded-lg mb-4">
                <p className="text-gray-800 font-semibold text-lg">Service Fee:</p>
                <span className="font-bold text-2xl text-navy">₹350</span>
            </div>
            
            <div className="text-center p-4 border rounded-lg bg-gray-50">
              <p className="text-sm text-gray-700 font-semibold mb-2">Scan to pay with any UPI App</p>
              <GPayQRCode />
              <p className="text-xs text-gray-500 mt-2">After payment, enter the transaction ID below.</p>
            </div>

            <div className="mt-4">
              <InputField 
                id="upiTransactionId" 
                label="UPI Transaction ID" 
                value={upiTransactionId} 
                onChange={e => setUpiTransactionId(e.target.value)} 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h12v4a2 2 0 002-2V6a2 2 0 00-2-2H4z" clipRule="evenodd" /><path d="M18 9h-2v5a2 2 0 01-2 2H6a2 2 0 01-2-2V9H2a2 2 0 00-2 2v4a2 2 0 002 2h16a2 2 0 002-2v-4a2 2 0 00-2-2z" /></svg>}
                placeholder="Enter 12-digit transaction ID"
              />
            </div>
            
            <button type="submit" className="w-full bg-saffron text-white font-bold py-4 px-4 rounded-lg shadow-md hover:bg-opacity-90 transition-transform transform hover:scale-105 duration-300 ease-in-out text-lg mt-6">
              Submit Application
            </button>
        </div>
      </form>
    </div>
  );
};

export default FormScreen;