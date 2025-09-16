import React from 'react';

interface DocumentUploadCardProps {
  label: string;
  name: string;
  fileName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isOptional?: boolean;
  description?: string;
}

const UploadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
);

const SuccessIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const DocumentUploadCard: React.FC<DocumentUploadCardProps> = ({ label, name, fileName, onChange, isOptional = false, description }) => {
  const isUploaded = !!fileName;

  const cardClasses = `
    relative border-2 rounded-lg p-4 text-center cursor-pointer transition-all duration-300 ease-in-out
    flex flex-col items-center justify-center space-y-2 min-h-[10rem]
    ${isUploaded ? 'border-green-400 bg-green-50' : 'border-dashed border-gray-300 bg-white hover:bg-gray-50'}
  `;

  return (
    <label htmlFor={name} className={cardClasses}>
      {isUploaded ? <SuccessIcon /> : <UploadIcon />}

      <div className="flex flex-col">
        <span className="text-sm font-semibold text-gray-700">
            {label} {isOptional && !isUploaded && <span className="font-normal text-gray-500">(Optional)</span>}
        </span>
        {isUploaded ? (
          <span className="text-xs text-green-700 font-medium break-all px-2">{fileName}</span>
        ) : (
          <>
            <span className="text-xs text-gray-500">Click to upload</span>
            {description && <span className="text-xs text-gray-400 mt-1 px-2">{description}</span>}
          </>
        )}
      </div>

      <input id={name} name={name} type="file" className="sr-only" onChange={onChange} />
    </label>
  );
};

export default DocumentUploadCard;