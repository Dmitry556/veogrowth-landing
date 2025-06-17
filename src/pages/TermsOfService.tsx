import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const TermsOfService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Veogrowth</title>
        <meta name="description" content="Veogrowth's terms of service governing the use of our services and website." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="py-32">
        <div className="container mx-auto px-8 sm:px-12 max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-sm text-gray-600 mb-12">Last updated: December 16, 2024</p>
            
            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using Veogrowth's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Services</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Veogrowth provides AI-powered cold email outreach services, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Lead generation and prospect research</li>
                  <li>Email campaign creation and management</li>
                  <li>Performance tracking and analytics</li>
                  <li>Consultation and strategic guidance</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Account Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">You agree to:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use</li>
                  <li>Be responsible for all activities under your account</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Compliance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">You must:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Follow email marketing best practices and anti-spam laws</li>
                  <li>Obtain proper consent for email communications</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not use our services for illegal or harmful activities</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Pricing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our services are provided on a performance-based model where you pay only for qualified meetings that occur. Pricing details are provided during consultation and may vary based on scope and requirements.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Payment</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Payment is due within 30 days of invoice date</li>
                  <li>Late payments may incur additional fees</li>
                  <li>We reserve the right to suspend services for non-payment</li>
                  <li>Refunds are subject to our refund policy</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content, features, and functionality of our services are owned by Veogrowth and are protected by intellectual property laws. You may not:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Copy, modify, or distribute our proprietary content</li>
                  <li>Reverse engineer our technology or methods</li>
                  <li>Use our trademarks without permission</li>
                  <li>Create derivative works based on our services</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Privacy and Data Protection</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these terms by reference. By using our services, you consent to the collection and use of information as outlined in our Privacy Policy.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Service Limitations</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While we strive to deliver excellent results, we cannot guarantee specific outcomes such as:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Number of meetings or responses</li>
                  <li>Conversion rates or sales results</li>
                  <li>Specific timeline for results</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Availability</h3>
                <p className="text-gray-700 leading-relaxed">
                  We aim for high service availability but do not guarantee uninterrupted access. Maintenance, updates, or technical issues may temporarily affect service availability.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Veogrowth shall not be liable for:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Indirect, incidental, or consequential damages</li>
                  <li>Loss of profits, revenue, or business opportunities</li>
                  <li>Data loss or corruption</li>
                  <li>Third-party actions or content</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Our total liability shall not exceed the amount paid by you for our services in the 12 months preceding the claim.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify and hold harmless Veogrowth from any claims, damages, or expenses arising from your use of our services, violation of these terms, or infringement of any rights of another party.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Either party may terminate the service agreement with written notice. Upon termination:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Your access to services will cease</li>
                  <li>Outstanding payments remain due</li>
                  <li>Confidentiality obligations continue</li>
                  <li>Data will be handled according to our data retention policy</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms shall be resolved through binding arbitration or in the courts of [Your Jurisdiction].
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these terms at any time. Material changes will be communicated via email or through our website. Your continued use of our services after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about these terms, please contact us:
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:legal@veogrowth.com" className="text-purple-600 hover:text-purple-700">legal@veogrowth.com</a></p>
                  <p className="text-gray-700 mb-2"><strong>Address:</strong> Veogrowth LLC</p>
                  <p className="text-gray-700">Legal Department</p>
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

export default TermsOfService;