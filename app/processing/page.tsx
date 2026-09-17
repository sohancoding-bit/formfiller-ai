'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProcessingPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        router.push('/result');
      }, 1000);
    }
  }, [progress, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="text-6xl mb-6">🤖</div>
        <h1 className="text-2xl font-bold mb-4">
          AI is Processing Your Form...
        </h1>
        <p className="text-gray-600 mb-6">
          Our AI is reading and filling your form. This will take a few seconds.
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-gray-600 font-semibold">
          {progress}% Complete
        </p>

        {/* Loading Steps */}
        <div className="mt-8 text-left space-y-2">
          <div className={`flex items-center ${progress >= 20 ? 'text-green-600' : 'text-gray-400'}`}>
            <span className="mr-2">{progress >= 20 ? '✅' : '⏳'}</span>
            Uploading form...
          </div>
          <div className={`flex items-center ${progress >= 40 ? 'text-green-600' : 'text-gray-400'}`}>
            <span className="mr-2">{progress >= 40 ? '✅' : '⏳'}</span>
            Reading form fields...
          </div>
          <div className={`flex items-center ${progress >= 60 ? 'text-green-600' : 'text-gray-400'}`}>
            <span className="mr-2">{progress >= 60 ? '✅' : '⏳'}</span>
            Extracting data...
          </div>
          <div className={`flex items-center ${progress >= 80 ? 'text-green-600' : 'text-gray-400'}`}>
            <span className="mr-2">{progress >= 80 ? '✅' : '⏳'}</span>
            Auto-filling form...
          </div>
          <div className={`flex items-center ${progress >= 100 ? 'text-green-600' : 'text-gray-400'}`}>
            <span className="mr-2">{progress >= 100 ? '✅' : '⏳'}</span>
            Generating result...
          </div>
        </div>
      </div>
    </div>
  );
}