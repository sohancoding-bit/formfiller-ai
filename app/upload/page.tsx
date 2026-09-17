'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient();

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
    setMessage('Uploading to Supabase...');

    try {
      // Upload file to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('forms')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('forms')
        .getPublicUrl(fileName);

      setMessage('✅ Upload successful! Saving to database...');

      // Save to database
      const { data: formData, error: dbError } = await supabase
        .from('forms')
        .insert({
          original_pdf_url: publicUrl,
          filled_data: {
            name: "Your Name",
            email: "your@email.com",
            phone: "+91 9876543210",
            address: "Your Address"
          },
          status: 'completed',
          filled_pdf_url: publicUrl
        })
        .select()
        .single();

      if (dbError) throw dbError;

      setMessage('✅ Saved! Redirecting...');

      // Redirect to result page with form ID
      setTimeout(() => {
        router.push(`/result?formId=${formData.id}`);
      }, 1500);

    } catch (error: any) {
      console.error('Upload error:', error);
      setMessage('❌ Error: ' + error.message);
      setUploading(false);
    }
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
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/dashboard')}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition"
              >
                Dashboard
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto py-12 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-6">Upload Your Form</h1>
          
          <div className="space-y-4">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="w-full p-4 border-2 border-gray-300 rounded-lg"
            />
            
            <button
              onClick={handleUpload}
              disabled={uploading || !file}
              className={`w-full py-3 rounded-lg font-semibold text-white transition ${
                uploading || !file
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg'
              }`}
            >
              {uploading ? 'Uploading...' : 'Upload & Process'}
            </button>

            {message && (
              <div className="text-center text-gray-700 font-medium">
                {message}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}