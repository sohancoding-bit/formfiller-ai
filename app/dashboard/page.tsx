'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createBrowserClient } from '@supabase/ssr';

export default function DashboardPage() {
  const router = useRouter();
  const [forms, setForms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    async function fetchForms() {
      const { data, error } = await supabase
        .from('forms')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching forms:', error);
      } else {
        setForms(data || []);
      }
      setLoading(false);
    }

    fetchForms();
  }, [supabase]);

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
                onClick={() => router.push('/')}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition"
              >
                Home
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

      <main className="max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Your Dashboard
          </h1>
          <p className="text-gray-600">
            Manage all your AI-filled forms in one place
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="text-xl">Loading your forms...</div>
          </div>
        ) : forms.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-xl">
            <div className="text-6xl mb-4">📄</div>
            <h2 className="text-2xl font-semibold mb-2">No forms yet</h2>
            <p className="text-gray-600 mb-6">Upload your first form to get started!</p>
            <button
              onClick={() => router.push('/upload')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
            >
              Upload Form
            </button>
          </div>
        ) : (
          <div className="grid gap-6">
            {forms.map((form) => (
              <div key={form.id} className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Form #{form.id}
                    </h3>
                    <p className="text-gray-600">
                      Status: <span className="font-medium capitalize">{form.status}</span>
                    </p>
                    <p className="text-gray-500 text-sm">
                      {new Date(form.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    {form.filled_pdf_url && (
                      <a
                        href={form.filled_pdf_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition"
                      >
                        📥 Download
                      </a>
                    )}
                    <button
                      onClick={() => router.push(`/result?formId=${form.id}`)}
                      className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}