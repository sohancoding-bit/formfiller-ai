'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file first!');
      return;
    }

    setUploading(true);
    setMessage('Uploading...');

    // TODO: Upload to Supabase Storage
    // For now, just simulate upload
    setTimeout(() => {
      setUploading(false);
      setMessage('✅ Upload successful! Processing with AI...');
      
      // Redirect to processing page
      setTimeout(() => {
        router.push('/processing');
      }, 2000);
    }, 2000);
  };

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

      {/* Upload Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center mb-6">
              📤 Upload Your Form
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Upload a PDF or image of your form. Our AI will auto-fill it in seconds!
            </p>

            {/* File Upload Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center mb-6">
              <div className="text-6xl mb-4">📄</div>
              <p className="text-gray-600 mb-4">
                Drag and drop your form here, or click to browse
              </p>
              <input
                type="file"
                accept=".pdf,image/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition"
              >
                Choose File
              </label>
              {file && (
                <p className="mt-4 text-green-600 font-semibold">
                  ✅ Selected: {file.name}
                </p>
              )}
            </div>

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              disabled={!file || uploading}
              className={`w-full py-4 rounded-lg font-semibold text-lg transition ${
                !file || uploading
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {uploading ? 'Uploading...' : 'Upload & Fill with AI'}
            </button>

            {/* Message */}
            {message && (
              <p className="mt-6 text-center text-lg font-semibold text-blue-600">
                {message}
              </p>
            )}

            {/* Supported Formats */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="font-semibold mb-3 text-gray-700">Supported Formats:</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>✅ PDF files (.pdf)</li>
                <li>✅ Images (.jpg, .png, .jpeg)</li>
                <li>✅ Max file size: 10 MB</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}