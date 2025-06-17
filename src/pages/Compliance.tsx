import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CheckCircle, FileText, Globe, Shield, Mail, Users } from 'lucide-react';

const Compliance = () => {
  const complianceStandards = [
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "CAN-SPAM Act",
      description: "Full compliance with US anti-spam regulations including proper identification, opt-out mechanisms, and truthful subject lines.",
      status: "Compliant"
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "GDPR",
      description: "European General Data Protection Regulation compliance with proper consent mechanisms and data subject rights.",
      status: "Compliant"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "CCPA",
      description: "California Consumer Privacy Act compliance ensuring transparency and control over personal information.",
      status: "Compliant"
    },
    {
      icon: <Mail className="w-8 h-8 text-orange-600" />,
      title: "CASL",
      description: "Canada's Anti-Spam Legislation compliance for all communications to Canadian recipients.",
      status: "Compliant"
    },
    {
      icon: <Users className="w-8 h-8 text-red-600" />,
      title: "PECR",
      description: "UK Privacy and Electronic Communications Regulations for email marketing and electronic communications.",
      status: "Compliant"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-teal-600" />,
      title: "SOC 2 Type II",
      description: "Annual audits of our security, availability, processing integrity, confidentiality, and privacy controls.",
      status: "Certified"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Compliance - Veogrowth</title>
        <meta name="description" content="Veogrowth's compliance with international regulations including GDPR, CAN-SPAM, CCPA, and industry standards." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="py-32">
        <div className="container mx-auto px-8 sm:px-12 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Compliance & Regulations</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain strict compliance with international regulations and industry standards to ensure your email outreach is both effective and legally compliant.
            </p>
          </div>

          {/* Compliance Standards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    {standard.icon}
                    <div className="ml-3">
                      <h3 className="text-xl font-bold text-gray-900">{standard.title}</h3>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        standard.status === 'Compliant' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {standard.status}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{standard.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Compliance Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Marketing Compliance</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">CAN-SPAM Act (United States)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our email campaigns fully comply with the CAN-SPAM Act through:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Clear and accurate sender identification</li>
                  <li>Truthful and non-misleading subject lines</li>
                  <li>Clear indication that messages are advertisements</li>
                  <li>Valid physical postal address inclusion</li>
                  <li>One-click unsubscribe mechanism in every email</li>
                  <li>Prompt processing of opt-out requests (within 10 business days)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">CASL (Canada)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For Canadian recipients, we ensure:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Express or implied consent before sending commercial emails</li>
                  <li>Clear identification of sender and on whose behalf the message is sent</li>
                  <li>Unsubscribe mechanism that is easy to perform</li>
                  <li>Compliance with CASL's stricter consent requirements</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection Compliance</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">GDPR (European Union)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our GDPR compliance includes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Lawful Basis:</strong> Legitimate interest assessments for B2B communications</li>
                  <li><strong>Data Minimization:</strong> Collecting only necessary data for outreach purposes</li>
                  <li><strong>Consent Management:</strong> Clear opt-in mechanisms where required</li>
                  <li><strong>Right to Erasure:</strong> Immediate data deletion upon request</li>
                  <li><strong>Data Portability:</strong> Providing data in machine-readable formats</li>
                  <li><strong>Breach Notification:</strong> 72-hour notification procedures</li>
                  <li><strong>Privacy by Design:</strong> Built-in privacy protections in all systems</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">CCPA (California)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  California Consumer Privacy Act compliance through:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Transparent data collection and use practices</li>
                  <li>Right to know what personal information is collected</li>
                  <li>Right to delete personal information</li>
                  <li>Right to opt-out of sale of personal information</li>
                  <li>Non-discrimination for exercising privacy rights</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry Standards</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Email Deliverability Standards</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Authentication:</strong> SPF, DKIM, and DMARC implementation</li>
                  <li><strong>Reputation Management:</strong> Maintaining high sender reputation scores</li>
                  <li><strong>List Hygiene:</strong> Regular cleaning and validation of email lists</li>
                  <li><strong>Engagement Monitoring:</strong> Tracking and optimizing for recipient engagement</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Security Standards</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>SOC 2 Type II:</strong> Annual third-party security audits</li>
                  <li><strong>Encryption:</strong> End-to-end encryption for all data transmission</li>
                  <li><strong>Access Controls:</strong> Role-based access and multi-factor authentication</li>
                  <li><strong>Incident Response:</strong> Documented procedures for security incidents</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Monitoring</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Ongoing Compliance</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We maintain compliance through:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Regular compliance audits and assessments</li>
                  <li>Continuous monitoring of regulatory changes</li>
                  <li>Staff training on compliance requirements</li>
                  <li>Automated compliance checks in our systems</li>
                  <li>Legal review of all policies and procedures</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Client Compliance Support</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We help our clients maintain compliance by:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Providing compliance guidance and best practices</li>
                  <li>Implementing required opt-out mechanisms</li>
                  <li>Maintaining comprehensive email sending records</li>
                  <li>Offering data processing agreements (DPAs)</li>
                  <li>Regular compliance reporting and documentation</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Processing Agreements</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We provide comprehensive Data Processing Agreements (DPAs) that include:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Clear definition of data processing activities</li>
                  <li>Specification of data retention periods</li>
                  <li>Security measures and safeguards</li>
                  <li>Sub-processor arrangements and approvals</li>
                  <li>Breach notification procedures</li>
                  <li>Data subject rights implementation</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Compliance Documentation</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We maintain comprehensive documentation including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Privacy policies and terms of service</li>
                  <li>Data processing records and inventories</li>
                  <li>Consent management documentation</li>
                  <li>Incident response and breach reports</li>
                  <li>Compliance audit reports and certifications</li>
                  <li>Training records and compliance procedures</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Our Compliance Team</h2>
                <div className="bg-gray-50 rounded-lg p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">General Compliance Inquiries</h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Email:</strong> <a href="mailto:compliance@veogrowth.com" className="text-purple-600 hover:text-purple-700">compliance@veogrowth.com</a>
                      </p>
                      <p className="text-gray-700">
                        <strong>Response Time:</strong> 48 hours
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Data Protection Officer</h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Email:</strong> <a href="mailto:dpo@veogrowth.com" className="text-purple-600 hover:text-purple-700">dpo@veogrowth.com</a>
                      </p>
                      <p className="text-gray-700">
                        <strong>Response Time:</strong> 72 hours for GDPR requests
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600">
                      For urgent compliance matters or data breach notifications, please contact us immediately at the above email addresses with "URGENT" in the subject line.
                    </p>
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

export default Compliance;