import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, Lock, Server, Eye, Users, FileCheck } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption."
    },
    {
      icon: <Server className="w-8 h-8 text-purple-600" />,
      title: "Secure Infrastructure",
      description: "Our systems are hosted on enterprise-grade cloud infrastructure with 99.9% uptime SLA."
    },
    {
      icon: <Eye className="w-8 h-8 text-purple-600" />,
      title: "Access Controls",
      description: "Multi-factor authentication and role-based access controls protect your data."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Employee Training",
      description: "All team members undergo regular security training and background checks."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-purple-600" />,
      title: "Regular Audits",
      description: "Third-party security audits and penetration testing ensure ongoing protection."
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Incident Response",
      description: "24/7 monitoring with immediate response protocols for any security incidents."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Security - Veogrowth</title>
        <meta name="description" content="Learn about Veogrowth's comprehensive security measures protecting your data and communications." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="py-32">
          <div className="container mx-auto px-8 sm:px-12 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Security & Data Protection</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your data security is our top priority. Learn about the comprehensive measures we take to protect your information and ensure secure operations.
            </p>
          </div>

          {/* Security Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-bold text-gray-900 ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Security Information */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Protection Standards</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement industry-leading security standards to protect your data:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>SOC 2 Type II Compliance:</strong> Annual audits ensure our security controls meet the highest standards</li>
                  <li><strong>ISO 27001 Framework:</strong> Information security management system aligned with international standards</li>
                  <li><strong>GDPR Compliance:</strong> Full compliance with European data protection regulations</li>
                  <li><strong>CCPA Compliance:</strong> California Consumer Privacy Act compliance for US residents</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Infrastructure Security</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Cloud Security</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our infrastructure is built on enterprise-grade cloud platforms with:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Redundant data centers with geographic distribution</li>
                  <li>Automated backup and disaster recovery systems</li>
                  <li>Network segmentation and firewall protection</li>
                  <li>DDoS protection and traffic monitoring</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Application Security</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Secure coding practices and code reviews</li>
                  <li>Regular vulnerability scanning and penetration testing</li>
                  <li>Web application firewall (WAF) protection</li>
                  <li>API security and rate limiting</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Email Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As an email outreach service, we implement specialized email security measures:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Domain Authentication:</strong> SPF, DKIM, and DMARC records for all sending domains</li>
                  <li><strong>Reputation Management:</strong> Continuous monitoring of IP and domain reputation</li>
                  <li><strong>Content Filtering:</strong> Anti-spam and malware detection for all communications</li>
                  <li><strong>Bounce Handling:</strong> Automatic processing of bounces and unsubscribes</li>
                  <li><strong>Compliance Monitoring:</strong> Real-time monitoring for CAN-SPAM and GDPR compliance</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Handling</h2>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Collection</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We collect only the data necessary to provide our services:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Prospect contact information for outreach campaigns</li>
                  <li>Campaign performance metrics and analytics</li>
                  <li>Client communication preferences and settings</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Processing</h3>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>All data processing occurs within secure, encrypted environments</li>
                  <li>Access is limited to authorized personnel on a need-to-know basis</li>
                  <li>Processing activities are logged and audited regularly</li>
                  <li>Data retention policies ensure information is not kept longer than necessary</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Incident Response</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In the unlikely event of a security incident:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li><strong>Immediate Response:</strong> 24/7 monitoring systems alert our security team instantly</li>
                  <li><strong>Investigation:</strong> Rapid assessment and containment of any security issues</li>
                  <li><strong>Communication:</strong> Transparent communication with affected clients within 72 hours</li>
                  <li><strong>Remediation:</strong> Quick resolution and implementation of additional safeguards</li>
                  <li><strong>Documentation:</strong> Full incident reports and lessons learned documentation</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We carefully vet all third-party vendors and service providers:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Comprehensive security assessments before engagement</li>
                  <li>Contractual security requirements and data processing agreements</li>
                  <li>Regular reviews of vendor security practices</li>
                  <li>Limited data sharing on a need-to-know basis only</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Client Security Best Practices</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To maintain the highest level of security, we recommend clients:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                  <li>Use strong, unique passwords for all accounts</li>
                  <li>Enable multi-factor authentication when available</li>
                  <li>Keep software and systems updated with latest security patches</li>
                  <li>Report any suspicious activity immediately</li>
                  <li>Follow email security best practices for their own organizations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Security Certifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Certifications</h3>
                    <ul className="text-gray-700 space-y-1">
                      <li>• SOC 2 Type II (Annual)</li>
                      <li>• ISO 27001 Aligned</li>
                      <li>• GDPR Compliant</li>
                      <li>• CCPA Compliant</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Contact Security Team</h3>
                    <p className="text-gray-700 mb-2">
                      <strong>Email:</strong> <a href="mailto:security@veogrowth.com" className="text-purple-600 hover:text-purple-700">security@veogrowth.com</a>
                    </p>
                    <p className="text-gray-700">
                      <strong>Response Time:</strong> 24 hours for security inquiries
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

export default Security;