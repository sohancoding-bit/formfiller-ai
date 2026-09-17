'use client';

import { useRouter } from 'next/navigation';

export default function MyFormsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                📝 FormFiller AI
              </h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => router.push('/dashboard')}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
              >
                ← Back to Dashboard
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* My Forms Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            📋 My Forms
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">📁</div>
            <h2 className="text-2xl font-semibold mb-4">No forms yet!</h2>
            <p className="text-gray-600 mb-6">
              Upload your first form to get started.
            </p>
            <button
              onClick={() => router.push('/upload')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Upload Your First Form
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}