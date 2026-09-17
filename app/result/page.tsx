'use client';

import { useRouter } from 'next/navigation';

export default function ResultPage() {
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

      {/* Result Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-4xl font-bold mb-4 text-green-600">
              Your Form is Ready!
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              AI has successfully filled your form in seconds!
            </p>

            {/* Mock Form Preview */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
              <h2 className="font-semibold mb-4 text-gray-700">Filled Form Preview:</h2>
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-gray-600">Name:</label>
                  <p className="font-semibold">John Doe</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Email:</label>
                  <p className="font-semibold">john@example.com</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Phone:</label>
                  <p className="font-semibold">+91 98765 43210</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Address:</label>
                  <p className="font-semibold">123 Main Street, Mumbai, Maharashtra 400001</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => alert('Download feature coming soon!')}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                📥 Download Filled Form
              </button>
              <button
                onClick={() => router.push('/upload')}
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                📤 Upload Another Form
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}