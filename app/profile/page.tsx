'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    alternatePhone: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: 'India',
    panNumber: '',
    aadhaarNumber: '',
    gstNumber: '',
    occupation: '',
    company: '',
    annualIncome: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert('Profile saved! (Data will be stored in database soon)');
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

      {/* Profile Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            ⚙️ Edit Profile
          </h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-gray-600 mb-6 text-center">
              Save your personal and financial details to auto-fill forms instantly!
            </p>

            <div className="space-y-6">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">
                  👤 Personal Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Alternate Phone</label>
                    <input
                      type="tel"
                      name="alternatePhone"
                      value={formData.alternatePhone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Date of Birth</label>
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Gender</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">
                  🏠 Address Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="House/Flat No., Building, Street"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="State"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Pincode *</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        placeholder="Pincode"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Country</label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="Country"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>
              </div>

              {/* Financial & Tax Information */}
              <div>
                <h2 className="text-xl font-semibold mb-4 text-blue-600 border-b pb-2">
                  💰 Financial & Tax Information
                </h2>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">PAN Number</label>
                      <input
                        type="text"
                        name="panNumber"
                        value={formData.panNumber}
                        onChange={handleChange}
                        placeholder="ABCDE1234F"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 uppercase"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Aadhaar Number</label>
                      <input
                        type="text"
                        name="aadhaarNumber"
                        value={formData.aadhaarNumber}
                        onChange={handleChange}
                        placeholder="XXXX XXXX XXXX"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">GST Number</label>
                    <input
                      type="text"
                      name="gstNumber"
                      value={formData.gstNumber}
                      onChange={handleChange}
                      placeholder="27ABCDE1234F1Z5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600 uppercase"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Occupation</label>
                      <select
                        name="occupation"
                        value={formData.occupation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                      >
                        <option value="">Select Occupation</option>
                        <option value="employed">Employed</option>
                        <option value="self-employed">Self Employed</option>
                        <option value="business">Business Owner</option>
                        <option value="student">Student</option>
                        <option value="homemaker">Homemaker</option>
                        <option value="retired">Retired</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Annual Income</label>
                    <select
                      name="annualIncome"
                      value={formData.annualIncome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-600"
                    >
                      <option value="">Select Income Range</option>
                      <option value="0-3">₹0 - ₹3 Lakhs</option>
                      <option value="3-5">₹3 - ₹5 Lakhs</option>
                      <option value="5-10">₹5 - ₹10 Lakhs</option>
                      <option value="10-20">₹10 - ₹20 Lakhs</option>
                      <option value="20+">₹20+ Lakhs</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <button
                onClick={handleSave}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition"
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}