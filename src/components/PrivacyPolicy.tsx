import { WorthViewIcon } from './WorthViewIcon';
import { ArrowLeft, Shield, Lock, Server, Eye } from 'lucide-react';

export function PrivacyPolicy() {
  const handleBackHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-black/8 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={handleBackHome}
            className="flex items-center gap-2 text-black/60 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span style={{ fontSize: '0.875rem', fontWeight: 500 }}>Back</span>
          </button>
          
          <div className="flex items-center gap-2">
            <WorthViewIcon size={32} />
            <span style={{ fontSize: '1.25rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#1A1A1A' }}>
              WorthView
            </span>
          </div>
          
          <div className="w-16" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 px-6 bg-white border-b border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="mb-4"
            style={{ fontSize: '3rem', fontWeight: 300, letterSpacing: '-0.03em', color: '#1A1A1A' }}
          >
            Privacy Policy
          </h1>
          <p style={{ fontSize: '1rem', color: '#6B6B6B' }}>
            Last updated: January 31, 2026
          </p>
        </div>
      </section>

      {/* Key Principles */}
      <section className="py-12 px-6 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-center mb-12"
            style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#1A1A1A' }}
          >
            Our Privacy Principles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-black/8">
              <Lock className="w-8 h-8 text-black mb-4" />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '0.5rem' }}>
                Local-First Architecture
              </h3>
              <p style={{ fontSize: '0.938rem', color: '#6B6B6B', lineHeight: 1.6 }}>
                Your financial data—assets, liabilities, net worth—stays on your device. We cannot access it.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-black/8">
              <Server className="w-8 h-8 text-black mb-4" />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '0.5rem' }}>
                Minimal Server Data
              </h3>
              <p style={{ fontSize: '0.938rem', color: '#6B6B6B', lineHeight: 1.6 }}>
                We only store your email or sign-in identifier (Google/Apple) for authentication.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-black/8">
              <Shield className="w-8 h-8 text-black mb-4" />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '0.5rem' }}>
                No Third-Party Sharing
              </h3>
              <p style={{ fontSize: '0.938rem', color: '#6B6B6B', lineHeight: 1.6 }}>
                We never sell, rent, or share your data with advertisers or data brokers.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-black/8">
              <Eye className="w-8 h-8 text-black mb-4" />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '0.5rem' }}>
                No Bank Connections
              </h3>
              <p style={{ fontSize: '0.938rem', color: '#6B6B6B', lineHeight: 1.6 }}>
                We don't connect to your bank accounts. You control what data you enter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Policy */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto prose prose-slate">
          
          {/* Section 1 */}
          <div className="mb-12">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              1. Information We Collect
            </h2>
            
            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
              1.1 Account Information (Stored on Our Servers)
            </h3>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              When you create a WorthView account, we collect and store in our Supabase database:
            </p>
            <ul style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Your email address (if you sign up with email)</li>
              <li>Your Apple ID or Google account identifier (if you use Sign in with Apple or Google)</li>
              <li>Account creation date and last login timestamp</li>
              <li>Subscription status and billing information (processed by Apple via In-App Purchase)</li>
            </ul>

            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
              1.2 Financial Data (Stored Locally on Your Device Only)
            </h3>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              The following data is stored exclusively on your device and never transmitted to our servers:
            </p>
            <ul style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>All asset entries (stocks, crypto, Bitcoin, commodities, ETFs, cash, property, etc.)</li>
              <li>All liability entries (mortgages, loans, credit cards, etc.)</li>
              <li>Net worth calculations and historical data</li>
              <li>Categories, custom notes, and any manually entered financial information</li>
            </ul>

            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
              1.3 Technical Data
            </h3>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              We collect minimal technical data to operate the app:
            </p>
            <ul style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Device type and iOS version (for compatibility)</li>
              <li>App version and crash logs (to fix bugs)</li>
              <li>Anonymous analytics (e.g., "user opened app" but not what they viewed)</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-12">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              2. How We Use Your Information
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              We use the limited information we collect to:
            </p>
            <ul style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Authenticate your account when you log in</li>
              <li>Manage your subscription status and billing via Apple In-App Purchase</li>
              <li>Send essential service emails (e.g., subscription renewals, account changes)</li>
              <li>Provide customer support when you contact us</li>
              <li>Improve app performance and fix technical issues</li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              We <strong style={{ color: '#1A1A1A' }}>do not</strong> use your information to:
            </p>
            <ul style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li>Target you with advertising</li>
              <li>Sell or rent your data to third parties</li>
              <li>Train AI models or build user profiles</li>
              <li>Track your browsing behavior outside the app</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-12">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              3. Data Storage and Security
            </h2>
            
            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
              3.1 Local Storage
            </h3>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              Your financial data is encrypted and stored locally on your iPhone using Apple's secure storage APIs. We use AES-256 encryption and integrate with Face ID/Touch ID for additional protection.
            </p>

            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
              3.2 Cloud Storage
            </h3>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              Account data (email/sign-in identifier only) is stored securely in Supabase, hosted on AWS servers in the EU. This data is encrypted in transit (TLS 1.3) and at rest (AES-256).
            </p>

            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
              3.3 Optional Cloud Backup
            </h3>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              WorthView offers optional encrypted cloud backup via Supabase. If you enable this feature, your financial data is encrypted on your device before being uploaded to secure servers. We cannot decrypt this data. Cloud backup is disabled by default. If you don't enable cloud backup and delete the app or lose your device, your financial data cannot be recovered. We recommend regular iCloud backups (your financial data is included in encrypted iPhone backups).
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-12">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              4. Third-Party Services
            </h2>
            
            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
              4.1 Twelve Data API (Price Tracking)
            </h3>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              When you track stocks, crypto, commodities, or ETFs, WorthView fetches real-time prices from Twelve Data API. We send only the ticker symbols (e.g., "VOO", "BTC/USD") to their servers—never your personal information or portfolio composition. Twelve Data's privacy policy: <a href="https://twelvedata.com/privacy" target="_blank" rel="noopener noreferrer" className="text-black underline">twelvedata.com/privacy</a>
            </p>

            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
              4.2 RevenueCat (Subscription Management)
            </h3>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              We use RevenueCat to manage your subscription status. RevenueCat receives your user ID and subscription information from Apple's In-App Purchase system. We do not share your financial data with RevenueCat. RevenueCat's privacy policy: <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" className="text-black underline">revenuecat.com/privacy</a>
            </p>

            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
              4.3 Supabase (Cloud Backup - Optional)
            </h3>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              We use Supabase to provide optional encrypted cloud backup. If you enable this feature, your encrypted financial data is stored on AWS servers in the EU. We cannot decrypt your data. Supabase's privacy policy: <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-black underline">supabase.com/privacy</a>
            </p>

            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
              4.4 Apple Services
            </h3>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              We use Apple's services for:
            </p>
            <ul style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li><strong style={{ color: '#1A1A1A' }}>Sign in with Apple:</strong> You can sign in with Apple ID. Apple may share a randomized email address with us.</li>
              <li><strong style={{ color: '#1A1A1A' }}>In-App Purchase:</strong> Subscription billing is handled by Apple via RevenueCat. We receive confirmation of your subscription status but not your payment details.</li>
            </ul>

            <h3 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#1A1A1A', marginTop: '1.5rem', marginBottom: '0.75rem' }}>
              4.5 Google Sign-In
            </h3>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              If you sign in with Google, we receive your email address and Google account ID. We do not access your Gmail, Google Drive, or other Google services.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-12">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              5. Your Rights (UK GDPR)
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              Under UK GDPR, you have the right to:
            </p>
            <ul style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              <li><strong style={{ color: '#1A1A1A' }}>Access:</strong> Request a copy of your account data (email and subscription status)</li>
              <li><strong style={{ color: '#1A1A1A' }}>Rectification:</strong> Correct inaccurate information</li>
              <li><strong style={{ color: '#1A1A1A' }}>Erasure:</strong> Delete your account and all associated data</li>
              <li><strong style={{ color: '#1A1A1A' }}>Data Portability:</strong> Export your account data in JSON format</li>
              <li><strong style={{ color: '#1A1A1A' }}>Withdraw Consent:</strong> Opt out of optional marketing emails</li>
            </ul>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              To exercise these rights, email us at <a href="mailto:privacy@worthview.app" className="text-black underline">privacy@worthview.app</a>. We'll respond within 30 days.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-12">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              6. Children's Privacy
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              WorthView is not intended for users under 18. We do not knowingly collect data from minors. If you believe a child has created an account, contact us immediately.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-12">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              7. International Data Transfers
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              Your account data is stored in the EU (AWS Frankfurt region via Supabase). If you're outside the EU, your data may be transferred internationally. We use standard contractual clauses approved by the UK ICO.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-12">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              8. Changes to This Policy
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              We may update this privacy policy to reflect changes in our practices or legal requirements. We'll notify you via email or in-app notification if we make material changes. Continued use of WorthView constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-12">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              9. Contact Us
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              If you have questions about this privacy policy or how we handle your data:
            </p>
            <div className="bg-[#FAFAFA] rounded-xl p-6 border border-black/5" style={{ marginTop: '1.5rem' }}>
              <p style={{ fontSize: '1rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>
                <strong>Email:</strong> <a href="mailto:privacy@worthview.app" className="text-black underline">privacy@worthview.app</a>
              </p>
              <p style={{ fontSize: '1rem', color: '#1A1A1A', marginBottom: '0.5rem' }}>
                <strong>Data Controller:</strong> WorthView
              </p>
              <p style={{ fontSize: '1rem', color: '#1A1A1A' }}>
                <strong>Address:</strong> Dundalk, Ireland
              </p>
            </div>
          </div>

          {/* Section 10 */}
          <div className="mb-12">
            <h2 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
              10. Regulatory Compliance
            </h2>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              WorthView is designed to comply with UK data protection laws (UK GDPR and Data Protection Act 2018). We are not regulated by the Financial Conduct Authority (FCA) as we do not provide financial advice, connect to bank accounts, or handle client money.
            </p>
            <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.7, marginBottom: '1rem' }}>
              If you have concerns about how we process your data, you can lodge a complaint with the UK Information Commissioner's Office (ICO): <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-black underline">ico.org.uk</a>
            </p>
          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-6 bg-[#FAFAFA] border-t border-black/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Questions about privacy?
          </h3>
          <p style={{ fontSize: '1rem', color: '#6B6B6B', marginBottom: '1.5rem' }}>
            We're here to help. Email us anytime at privacy@worthview.app
          </p>
          <button 
            onClick={handleBackHome}
            className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:scale-105 transition-transform"
          >
            Back to Home
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p style={{ fontSize: '0.813rem', color: '#6B6B6B' }}>© 2026 WorthView. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
