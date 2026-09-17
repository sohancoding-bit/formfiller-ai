'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    async function fetchFormData() {
      const formId = searchParams.get('formId');
      
      if (!formId) {
        router.push('/dashboard');
        return;
      }

      const { data, error } = await supabase
        .from('forms')
        .select('*')
        .eq('id', formId)
        .single();

      if (error || !data) {
        console.error('Error fetching form:', error);
        router.push('/dashboard');
        return;
      }

      setFormData(data);
      setLoading(false);
    }

    fetchFormData();
  }, [searchParams, router, supabase]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

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
              <button
                onClick={() => router.push('/upload')}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition"
              >
                New Form
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎉</div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Form is Ready!
            </h1>
            <p className="text-gray-600 mt-2">
              AI has successfully filled your form in seconds!
            </p>
          </div>

          {/* Filled Form Preview */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Filled Form Preview:</h2>
            
            {formData?.filled_data ? (
              <pre className="bg-white p-4 rounded-lg overflow-auto text-sm">
                {JSON.stringify(formData.filled_data, null, 2)}
              </pre>
            ) : (
              <div className="text-gray-500">No form data available</div>
            )}
          </div>

          {/* Download Button */}
          {formData?.filled_pdf_url && (
            <div className="text-center">
              <a
                href={formData.filled_pdf_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-xl transition"
              >
                📥 Download Filled PDF
              </a>
            </div>
          )}

          {/* Actions */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => router.push('/upload')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              Fill Another Form
            </button>
            <button
              onClick={() => router.push('/dashboard')}
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 transition"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}