/** @jsx React.createElement */
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elementName: string]: any;
    }
  }
}

export default function HomePage() {
  const navigate = (path: string) => {
    window.location.assign(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                📝 FormFiller AI
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate('/upload')}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Fill Any Form in Seconds with AI
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Upload your PDF form and let AI fill it automatically!
          </p>
          <button
            onClick={() => navigate('/upload')}
            className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xl rounded-xl font-semibold hover:shadow-2xl transition transform hover:scale-105"
          >
            🚀 Try Now - It's Free!
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="text-5xl mb-4">📄</div>
            <h3 className="text-2xl font-semibold mb-3">Upload Form</h3>
            <p className="text-gray-600">
              Upload any blank PDF form in seconds
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-semibold mb-3">AI Fills It</h3>
            <p className="text-gray-600">
              Our AI automatically fills all fields accurately
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-semibold mb-3">Download Ready</h3>
            <p className="text-gray-600">
              Get your filled form instantly, ready to submit!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}