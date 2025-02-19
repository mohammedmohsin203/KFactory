'use client'
import React, { useEffect, useState } from "react";

const CalendlyEmbed = ({ url }) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    if (document.querySelector('script[src*="calendly.com/assets/external/widget.js"]')) {
      setIsScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    script.onerror = (error) => console.error('Calendly script failed to load:', error);

    document.head.appendChild(script);

    return () => {
      if (!isScriptLoaded) {
        document.head.removeChild(script);
      }
    };
  }, [isScriptLoaded]); // Added isScriptLoaded as a dependency

  return (
    <div className="relative" style={{ height: '900px' }}>
      <div
        className="calendly-inline-widget w-full h-full"
        data-url={url}
        style={{
          minWidth: '320px',
          border: 'none',
          background: 'transparent'
        }}
      />
      {!isScriptLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            <p className="text-gray-600">Loading calendar...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendlyEmbed;
