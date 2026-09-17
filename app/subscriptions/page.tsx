'use client';

import { useRouter } from 'next/navigation';

export default function SubscriptionsPage() {
  const router = useRouter();

  const plans = [
    {
      name: 'Basic',
      price: '₹99',
      period: '/month',
      forms: '10 forms/month',
      features: ['Basic AI filling', 'Email support', 'PDF download'],
      color: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      name: 'Pro',
      price: '₹299',
      period: '/month',
      forms: '50 forms/month',
      features: ['Advanced AI', 'Priority support', 'PDF download', 'Form templates', 'Export to Excel'],
      color: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      name: 'Unlimited',
      price: '₹999',
      period: '/month',
      forms: 'Unlimited forms',
      features: ['Unlimited AI filling', '24/7 support', 'All features', 'API access', 'Custom branding'],
      color: 'from-orange-500 to-red-500',
      popular: false
    }
  ];

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
                onClick={() => router.push('/')}
                className="px-4 py-2 text-gray-700 hover:text-blue-600 transition"
              >
                Home
              </button>
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
      <main className="max-w-6xl mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600">
            Start with 3 free forms, then upgrade for unlimited access!
          </p>
          <p className="text-lg text-green-600 font-semibold mt-2">
            🎉 7-Day Free Trial on All Plans!
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-8 relative ${
                plan.popular ? 'ring-4 ring-purple-500 transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.forms}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold text-white transition bg-gradient-to-r ${plan.color} hover:shadow-lg`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Free Tier Info */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">🆓 Free Tier</h2>
          <p className="text-gray-600 mb-4">
            Get started with <span className="font-semibold text-blue-600">3 free forms per month</span> - no credit card required!
          </p>
          <button
            onClick={() => router.push('/upload')}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition"
          >
            Try Free Now
          </button>
        </div>
      </main>
    </div>
  );
}