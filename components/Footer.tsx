import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-navy to-blue-900 text-center py-5 px-6 rounded-b-lg shadow-inner">
      <div className="mb-4">
        <p className="text-xs text-gray-300">
          Application Hosted by Mahalaxmi Enterprises
        </p>
        <a href="mailto:mahalaxmienterprisespn@gmail.com" className="text-xs hover:underline text-gray-300">
          mahalaxmienterprisespn@gmail.com
        </a>
      </div>
      
      <a
        href="https://wa.me/9860064115"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-3 w-full max-w-xs mx-auto bg-saffron text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-saffron/30"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-6 h-6"
          fill="currentColor"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.2-27.2l-6.9-4.1-72.2 18.9 19.3-70.5-4.5-7.2c-19.5-31.2-30.9-67.4-30.9-105.5C45.9 125 133 37.9 240.1 37.9c51.6 0 99.1 19.9 134.8 55.6 35.7 35.7 55.5 83.2 55.5 134.8 0 107.1-87.1 194.2-194.2 194.2zM223.9 383.5c-22.7 0-41.2-18.5-41.2-41.2s18.5-41.2 41.2-41.2 41.2 18.5 41.2 41.2-18.5 41.2-41.2 41.2zm64.8-124.2c-5.2-2.6-30.8-15.2-35.6-16.9-4.8-1.7-8.3-2.6-11.8 2.6-3.5 5.2-13.5 16.9-16.5 20.4-3.1 3.5-6.1 3.9-11.3 1.3-5.2-2.6-22.1-8.1-42-25.9-15.5-13.8-25.9-30.8-29-36-3.1-5.2-.3-8.1 2.3-10.7 2.3-2.3 5.2-6.1 7.8-9.1 2.6-3.1 3.5-5.2 5.2-8.6.7-3.5-.4-6.5-1.7-9.1-2.2-2.6-11.8-28.4-16.1-39s-8.6-8.9-11.8-9.1c-3.1-.2-6.5-.2-9.9-.2-3.5 0-9.1 1.3-13.8 6.5-4.8 5.2-18.5 18.1-18.5 44.1 0 26 18.9 51.2 21.5 54.6 2.6 3.5 37.1 59.5 90.3 83.9 12.6 5.8 23.9 9.3 32.1 11.8 14.8 4.3 28.4 3.7 39-2.3 12.2-6.8 30.8-25.2 35.2-30.8 4.3-5.7 4.3-10.7 3-13.3z"/>
        </svg>
        <span>Connect over WhatsApp</span>
      </a>
    </footer>
  );
};

export default Footer;