import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Veogrowth</title>
        <meta name="description" content="Veogrowth's privacy policy outlining how we collect, use, and protect your personal information." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="py-32">
          <div className="container mx-auto px-8 sm:px-12 max-w-4xl">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
              <p className="text-sm text-gray-600 mb-12">Last updated: December 16, 2024</p>
              
              <div className="prose prose-lg max-w-none">
                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We collect information you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>Name, email address, and contact information</li>
                    <li>Company name and job title</li>
                    <li>Information provided through forms, surveys, or communications</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>IP address, browser type, and device information</li>
                    <li>Pages visited, time spent on our website</li>
                    <li>Referral sources and search terms</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use your information to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>Provide and improve our services</li>
                    <li>Communicate with you about our services</li>
                    <li>Send marketing communications (with your consent)</li>
                    <li>Analyze website usage and optimize user experience</li>
                    <li>Comply with legal obligations</li>
                    <li>Prevent fraud and ensure security</li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                    <li><strong>Consent:</strong> When you explicitly consent to sharing</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We implement appropriate technical and organizational measures to protect your personal information, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and employee training</li>
                    <li>Secure hosting infrastructure</li>
                  </ul>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete your personal information</li>
                    <li>Restrict processing of your information</li>
                    <li>Data portability</li>
                    <li>Object to processing</li>
                    <li>Withdraw consent at any time</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    To exercise these rights, contact us at <a href="mailto:privacy@veogrowth.com" className="text-purple-600 hover:text-purple-700">privacy@veogrowth.com</a>.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use cookies and similar technologies to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                    <li>Remember your preferences</li>
                    <li>Analyze website traffic</li>
                    <li>Improve user experience</li>
                    <li>Provide targeted advertising</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    You can control cookies through your browser settings.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We retain your personal information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we securely delete or anonymize it.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. International Transfers</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
                  </p>
                </section>

                <section className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    If you have questions about this privacy policy, please contact us:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:privacy@veogrowth.com" className="text-purple-600 hover:text-purple-700">privacy@veogrowth.com</a></p>
                    <p className="text-gray-700 mb-2"><strong>Address:</strong> Veogrowth LLC</p>
                    <p className="text-gray-700">Data Protection Officer</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;