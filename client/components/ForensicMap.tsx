'use client';

import React from 'react';

interface ForensicMapProps {
  data?: any[];
}

const ForensicMap: React.FC<ForensicMapProps> = ({ data = [] }) => {
  return (
    <div className="forensic-map w-full h-96 bg-gray-100 rounded-lg p-4 border border-gray-300 flex items-center justify-center">
      <div className="text-center text-gray-600">
        <p className="text-lg font-semibold mb-2">Forensic Data Map</p>
        <p className="text-sm">Map visualization component</p>
        {data.length > 0 && <p className="text-sm mt-2">Displaying {data.length} data points</p>}
      </div>
    </div>
  );
};

export default ForensicMap;
