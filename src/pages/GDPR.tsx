import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, Eye, Download, Trash2, Lock, AlertTriangle } from 'lucide-react';

const GDPR = () => {
  const dataSubjectRights = [
    {
      icon: <Eye className="w-6 h-6 text-blue-600" />,
      title: "Right to Access",
      description: "Request a copy of your personal data we hold and information about how it's processed."
    },
    {
      icon: <Download className="w-6 h-6 text-green-600" />,
      title: "Right to Portability",
      description: "Receive your personal data in a structured, machine-readable format."
    },
    {
      icon: <Trash2 className="w-6 h-6 text-red-600" />,
      title: "Right to Erasure",
      description: "Request deletion of your personal data under certain circumstances."
    },
    {
      icon: <Lock className="w-6 h-6 text-purple-600" />,
      title: "Right to Rectification",
      description: "Request correction of inaccurate or incomplete personal data."
    },
    {
      icon: <Shield className="w-6 h-6 text-teal-600" />,
      title: "Right to Restrict Processing",
      description: "Request limitation of processing your personal data in specific situations."
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-orange-600" />,
      title: "Right to Object",
      description: "Object to processing of your personal data for direct marketing or other purposes."
    }
  ];

  return (
    <>
      <Helmet>
        <title>GDPR Compliance - Veogrowth</title>
        <meta name="description" content="Comprehensive information about Veogrowth's GDPR compliance and your data protection rights under European law." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="py-32">
        <div className="container mx-auto px-8 sm:px-12 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">GDPR Compliance</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your privacy rights matter. Learn how we comply with the General Data Protection Regulation (GDPR) and how you can exercise your data protection rights.
            </p>
          </div>

          {/* Data Subject Rights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your Data Protection Rights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataSubjectRights.map((right, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    {right.icon}
                    <h3 className="text-lg font-bold text-gray-900 ml-3">{right.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{right.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What is GDPR?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The General Data Protection Regulation (GDPR) is a European Union regulation that came into effect on May 25, 2018. 
                  It strengthens and unifies data protection for individuals within the EU and addresses the export of personal data outside the EU.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As a provider of email outreach services, Veogrowth is committed to full GDPR compliance and transparency 
                  in how we collect, process, and protect your personal data.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Comply with GDPR</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Lawful Basis for Processing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We process personal data based on the following lawful bases:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Legitimate Interest:</strong> For B2B outreach to business contacts where we have a legitimate business interest</li>
                  <li><strong>Consent:</strong> When you explicitly consent to receive our communications</li>
                  <li><strong>Contract:</strong> To fulfill our contractual obligations with our clients</li>
                  <li><strong>Legal Obligation:</strong> To comply with legal requirements</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Minimization</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect and process only the personal data that is necessary for our specific purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Business contact information for outreach campaigns</li>
                  <li>Email engagement data to improve campaign effectiveness</li>
                  <li>Client account information for service delivery</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Transparency</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We provide clear information about:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>What personal data we collect and why</li>
                  <li>How we use your personal data</li>
                  <li>Who we share it with and why</li>
                  <li>How long we keep it</li>
                  <li>Your rights and how to exercise them</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights in Detail</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Right to Access (Article 15)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the right to request:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Confirmation that your personal data is being processed</li>
                  <li>Access to your personal data</li>
                  <li>Information about the purposes of processing</li>
                  <li>Categories of personal data concerned</li>
                  <li>Recipients or categories of recipients</li>
                  <li>Retention period or criteria for determining it</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Right to Rectification (Article 16)</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You can request correction of inaccurate personal data and completion of incomplete personal data, 
                  including by providing a supplementary statement.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Right to Erasure (Article 17)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can request deletion of your personal data when:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>The personal data is no longer necessary for the original purpose</li>
                  <li>You withdraw consent and there's no other lawful basis</li>
                  <li>You object to processing and there are no overriding legitimate grounds</li>
                  <li>The personal data has been unlawfully processed</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Right to Restrict Processing (Article 18)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You can request restriction when:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>The accuracy of personal data is contested</li>
                  <li>Processing is unlawful but you oppose erasure</li>
                  <li>We no longer need the data but you need it for legal claims</li>
                  <li>You've objected to processing pending verification</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Right to Data Portability (Article 20)</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You can receive your personal data in a structured, commonly used, machine-readable format 
                  and transmit it to another controller when processing is based on consent or contract.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Right to Object (Article 21)</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You can object to processing based on legitimate interests or for direct marketing purposes. 
                  For direct marketing, we must stop processing immediately upon your objection.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Exercise Your Rights</h2>
                
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Submit a Request</h3>
                  <p className="text-gray-700 mb-4">
                    To exercise any of your GDPR rights, please contact our Data Protection Officer:
                  </p>
                  <div className="space-y-2">
                    <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:dpo@veogrowth.com" className="text-blue-600 hover:text-blue-700">dpo@veogrowth.com</a></p>
                    <p className="text-gray-700"><strong>Subject Line:</strong> GDPR Data Subject Request</p>
                    <p className="text-gray-700"><strong>Response Time:</strong> Within 30 days (may be extended to 60 days for complex requests)</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">What to Include in Your Request</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Your full name and contact information</li>
                  <li>Description of your relationship with Veogrowth</li>
                  <li>Specific right you wish to exercise</li>
                  <li>Any additional information that helps us locate your data</li>
                  <li>Proof of identity (if required for verification)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Identity Verification</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  To protect your privacy, we may need to verify your identity before processing certain requests. 
                  We'll only ask for information necessary to confirm your identity.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Transfers Outside the EU</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When we transfer personal data outside the European Economic Area (EEA), we ensure appropriate safeguards:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Adequacy Decisions:</strong> Transfers to countries with adequate protection as determined by the European Commission</li>
                  <li><strong>Standard Contractual Clauses:</strong> EU-approved contractual clauses for transfers to non-adequate countries</li>
                  <li><strong>Binding Corporate Rules:</strong> Internal rules for multinational organizations</li>
                  <li><strong>Certification and Codes of Conduct:</strong> Approved certification mechanisms</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Breach Notification</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In the unlikely event of a data breach that poses a risk to your rights and freedoms:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>We will notify the relevant supervisory authority within 72 hours</li>
                  <li>If the breach poses a high risk, we will notify affected individuals without undue delay</li>
                  <li>We maintain detailed records of all data breaches</li>
                  <li>We have incident response procedures to minimize impact</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are designed for business purposes and are not intended for children under 16. 
                  We do not knowingly collect personal data from children. If we become aware that we have 
                  collected personal data from a child, we will take steps to delete it promptly.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Complaints and Supervisory Authority</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you're not satisfied with how we handle your personal data or GDPR request, you have the right to lodge a complaint with:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Your local data protection authority</li>
                  <li>The supervisory authority in the EU member state where you reside, work, or where the alleged infringement occurred</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You can find contact information for EU data protection authorities at: 
                  <a href="https://edpb.europa.eu/about-edpb/board/members_en" className="text-blue-600 hover:text-blue-700 ml-1" target="_blank" rel="noopener noreferrer">
                    https://edpb.europa.eu/about-edpb/board/members_en
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Protection Officer</h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Email:</strong> <a href="mailto:dpo@veogrowth.com" className="text-blue-600 hover:text-blue-700">dpo@veogrowth.com</a>
                      </p>
                      <p className="text-gray-700">
                        <strong>Response Time:</strong> 30 days for GDPR requests
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">General Privacy Inquiries</h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Email:</strong> <a href="mailto:privacy@veogrowth.com" className="text-blue-600 hover:text-blue-700">privacy@veogrowth.com</a>
                      </p>
                      <p className="text-gray-700">
                        <strong>Response Time:</strong> 48 hours for general inquiries
                      </p>
                    </div>
                  </div>
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

export default GDPR;