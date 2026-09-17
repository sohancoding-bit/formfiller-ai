'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getSupabaseBrowserClient } from '@/lib/supabase/client';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleAuth = async () => {
    if (!email || !password) {
      alert('Please enter email and password!');
      return;
    }

    if (isLogin) {
      // Login
      const { error } = await getSupabaseBrowserClient().auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setMessage('❌ Error: ' + error.message);
      } else {
        setMessage('✅ Login successful!');
        router.push('/dashboard');
      }
    } else {
      // Signup
      const { error } = await getSupabaseBrowserClient().auth.signUp({
        email,
        password,
      });

      if (error) {
        setMessage('❌ Error: ' + error.message);
      } else {
        setMessage('✅ Account created! Please check your email to confirm.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          📝 FormFiller
        </h1>
        
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
          />
          <button
            onClick={handleAuth}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </div>

        {message && (
          <p className="mt-4 text-center text-sm">{message}</p>
        )}

        <p className="mt-6 text-center text-gray-600">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage('');
            }}
            className="text-blue-600 font-semibold hover:underline"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>

        <p className="mt-4 text-center">
          <Link href="/" className="text-gray-600 hover:text-gray-900 text-sm">
            ← Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}