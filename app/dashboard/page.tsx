'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

const supabase = createClient(
  'https://hewmchtxbpldhnvvghyc.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhld21jaHR4YnBsZGhudnZnaHljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1NTIxNDIsImV4cCI6MjEwNTEyODE0Mn0.HHe2IITS7yCqaWpUqBJE9iH1ldy_djgc1NNaijVXecE'
);

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push('/login');
        return;
      }
      setUser(session.user);
      setLoading(false);
    });
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading FormFiller AI...</p>
        </div>
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
              <span className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full">
                {user?.email}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition shadow-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to FormFiller AI! 🎉
          </h1>
          <p className="text-xl opacity-90">
            Fill any form in 10 seconds with AI
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="py-12 px-4" id="plans">
        <div className="max-w-6xl mx-auto">
          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-200 hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="text-4xl mb-3">📤</div>
              <h2 className="text-xl font-semibold mb-2 text-blue-600">Upload Form</h2>
              <p className="text-gray-600 text-sm mb-4">
                Upload PDF or image
              </p>
              <a href="/upload" className="block w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-center">
                Upload Now
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200 hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="text-4xl mb-3">📋</div>
              <h2 className="text-xl font-semibold mb-2 text-purple-600">My Forms</h2>
              <p className="text-gray-600 text-sm mb-4">
                View filled forms
              </p>
              <a href="/my-forms" className="block w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition text-center">
                View All
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="text-4xl mb-3">⚙️</div>
              <h2 className="text-xl font-semibold mb-2 text-green-600">Profile</h2>
              <p className="text-gray-600 text-sm mb-4">
                Save your data
              </p>
              <a href="/profile" className="block w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-center">
                Edit Profile
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-orange-200 hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="text-4xl mb-3">💳</div>
              <h2 className="text-xl font-semibold mb-2 text-orange-600">Subscription</h2>
              <p className="text-gray-600 text-sm mb-4">
                Manage plan
              </p>
              <a href="#plans" className="block w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition text-center">
                View Plans
              </a>
            </div>
          </div>

          {/* Subscription Plans */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Choose Your Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Free Plan */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200 hover:shadow-xl transition">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-green-600 mb-2">🆓 Free Forever</h3>
                  <p className="text-gray-600 text-sm">First 500 users</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">₹0</span>
                    <span className="text-gray-600">/forever</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-2">✓</span>
                    10 forms/month
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-2">✓</span>
                    Basic AI filling
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-2">✓</span>
                    Email support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-green-600 mr-2">✓</span>
                    Standard processing
                  </li>
                </ul>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition">
                  Current Plan
                </button>
              </div>

              {/* Pro Plan */}
              <div className="bg-white rounded-xl shadow-xl p-6 border-2 border-blue-600 transform scale-105 relative">
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                  MOST POPULAR
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">⚡ Pro</h3>
                  <p className="text-gray-600 text-sm">For power users</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">₹199</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-600 mr-2">✓</span>
                    Unlimited forms
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-600 mr-2">✓</span>
                    Advanced AI
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-600 mr-2">✓</span>
                    Priority support
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-600 mr-2">✓</span>
                    Fast processing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-blue-600 mr-2">✓</span>
                    Download in bulk
                  </li>
                </ul>
                <button onClick={() => alert('Razorpay integration coming soon!')} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Upgrade to Pro
                </button>
              </div>

              {/* Business Plan */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-purple-200 hover:shadow-xl transition">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">🏢 Business</h3>
                  <p className="text-gray-600 text-sm">For teams</p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">₹499</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    Everything in Pro
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    5 team members
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    API access
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    Custom integrations
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-purple-600 mr-2">✓</span>
                    24/7 support
                  </li>
                </ul>
                <button onClick={() => alert('Razorpay integration coming soon!')} className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition">
                  Upgrade to Business
                </button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
              🚀 Why Choose FormFiller AI?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <h3 className="font-semibold mb-1">10x Faster</h3>
                <p className="text-gray-600 text-sm">Fill forms in seconds</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🔒</div>
                <h3 className="font-semibold mb-1">Secure</h3>
                <p className="text-gray-600 text-sm">Your data is encrypted</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎯</div>
                <h3 className="font-semibold mb-1">99% Accurate</h3>
                <p className="text-gray-600 text-sm">AI-powered precision</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💾</div>
                <h3 className="font-semibold mb-1">Auto-Save</h3>
                <p className="text-gray-600 text-sm">Never lose your data</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">📱</div>
                <h3 className="font-semibold mb-1">Mobile Ready</h3>
                <p className="text-gray-600 text-sm">Works on all devices</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💰</div>
                <h3 className="font-semibold mb-1">Free Forever</h3>
                <p className="text-gray-600 text-sm">First 500 users</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}