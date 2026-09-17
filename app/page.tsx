'use client';

import { useState } from 'react';
import { getSupabaseBrowserClient } from '@/lib/supabase/client';

export default function Home() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');

  async function handleJoinWaitlist() {
    if (!email) {
      setMessage('Please enter your email.');
      return;
    }

    const { error } = await getSupabaseBrowserClient().from('waitlist').insert([{ email }]);
    if (error) {
      setMessage(`Error: ${error.message}`);
      return;
    }

    setMessage('Thanks! You are on the waitlist.');
    setEmail('');
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">📝 FormFiller</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="/login" className="text-gray-600 hover:text-gray-900 font-semibold">
                Login
              </a>
              <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Fill Any Form in <span className="text-blue-600">10 Seconds</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Upload your form, and our AI will auto-fill it using your saved data. 
            No more repetitive typing!
          </p>
          <div className="max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:border-blue-600"
            />
            <button
              onClick={handleJoinWaitlist}
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Join Waitlist — First 500 Users Free Forever
            </button>
            {message && (
              <p className="mt-4 text-center text-green-600 font-semibold">{message}</p>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-4">
            🔒 We respect your privacy. No spam, ever.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why You&apos;ll Love FormFiller</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">10x Faster</h3>
              <p className="text-gray-600">Fill forms in seconds instead of minutes. Save hours every week.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your data is encrypted. We never share or sell your information.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">99% Accuracy</h3>
              <p className="text-gray-600">AI-powered form recognition with manual review option.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 mb-12">Start free, upgrade when you need more</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-blue-600 rounded-xl p-8 bg-blue-50">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">Early Bird</h3>
              <p className="text-gray-600 mb-4">First 500 users</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">FREE FOREVER</div>
              <ul className="text-left space-y-3 mb-8">
                <li>✅ Unlimited form fills</li>
                <li>✅ All features included</li>
                <li>✅ Priority support</li>
                <li>✅ Lifetime access</li>
              </ul>
              <a href="/login" className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center">
                Join Waitlist Now
              </a>
            </div>

            <div className="border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Regular</h3>
              <p className="text-gray-600 mb-4">After first 500 users</p>
              <div className="text-4xl font-bold text-gray-900 mb-6">₹199<span className="text-lg text-gray-600">/month</span></div>
              <ul className="text-left space-y-3 mb-8">
                <li>✅ Unlimited form fills</li>
                <li>✅ All features included</li>
                <li>✅ Email support</li>
                <li>✅ Cancel anytime</li>
              </ul>
              <a href="/login" className="block w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 FormFiller. Made with ❤️ in India</p>
        </div>
      </footer>
    </div>
  );
}