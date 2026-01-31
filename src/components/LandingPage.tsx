import { Check, Shield, Lock, TrendingUp, Smartphone, Database, ChevronRight, Menu, X } from 'lucide-react';
import { WorthViewIcon } from './WorthViewIcon';
import { useState } from 'react';

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-black/8 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <WorthViewIcon size={32} />
            <span style={{ fontSize: '1.25rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#1A1A1A' }}>
              WorthView
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-sm transition-colors hover:text-black"
              style={{ color: '#6B6B6B', fontWeight: 500 }}
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-sm transition-colors hover:text-black"
              style={{ color: '#6B6B6B', fontWeight: 500 }}
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-sm transition-colors hover:text-black"
              style={{ color: '#6B6B6B', fontWeight: 500 }}
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('privacy')}
              className="text-sm transition-colors hover:text-black"
              style={{ color: '#6B6B6B', fontWeight: 500 }}
            >
              Privacy
            </button>
            <button 
              className="bg-black text-white px-6 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-transform"
            >
              Download
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-black/8">
            <nav className="flex flex-col px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="text-left py-2 text-sm transition-colors"
                style={{ color: '#1A1A1A', fontWeight: 500 }}
              >
                How it works
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-left py-2 text-sm transition-colors"
                style={{ color: '#1A1A1A', fontWeight: 500 }}
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-left py-2 text-sm transition-colors"
                style={{ color: '#1A1A1A', fontWeight: 500 }}
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('privacy')}
                className="text-left py-2 text-sm transition-colors"
                style={{ color: '#1A1A1A', fontWeight: 500 }}
              >
                Privacy
              </button>
              <button 
                className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium w-full mt-2"
              >
                Download
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-6 md:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                <WorthViewIcon size={48} />
                <h1 style={{ fontSize: '2rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#1A1A1A' }}>
                  WorthView
                </h1>
              </div>

              {/* Headline */}
              <h2 
                className="mb-3 leading-tight"
                style={{ fontSize: '2.5rem', fontWeight: 300, letterSpacing: '-0.03em', color: '#1A1A1A' }}
              >
                Everything you own and owe,<br />in one place.
              </h2>

              {/* Subheadline */}
              <p 
                className="mb-5 leading-relaxed"
                style={{ fontSize: '1.125rem', color: '#6B6B6B', lineHeight: 1.6 }}
              >
                Track your complete financial picture. Your data stays on your device, always.
              </p>

              {/* CTA Button */}
              <button 
                className="bg-black text-white px-8 py-3 rounded-xl transition-all hover:scale-105 hover:shadow-xl inline-flex items-center gap-2 mb-2"
                style={{ fontSize: '1rem', fontWeight: 500 }}
              >
                Download on the App Store
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Trust Badge */}
              <p style={{ fontSize: '0.875rem', color: '#6B6B6B' }}>
                7-day free trial
              </p>
            </div>

            {/* Right Column - iPhone Screenshot */}
            <div className="relative flex justify-center lg:justify-end">
              <img 
                src="/app-screenshot.png" 
                alt="WorthView app showing net worth overview with assets and liabilities"
                className="w-full max-w-[280px] lg:max-w-[320px] h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y border-black/5 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Lock className="w-5 h-5 text-black/60" />
              <span style={{ fontSize: '0.875rem', color: '#1A1A1A' }}>Encrypted locally</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Shield className="w-5 h-5 text-black/60" />
              <span style={{ fontSize: '0.875rem', color: '#1A1A1A' }}>FCA-compliant</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Database className="w-5 h-5 text-black/60" />
              <span style={{ fontSize: '0.875rem', color: '#1A1A1A' }}>No data sharing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 
            className="text-center mb-4"
            style={{ fontSize: '2rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#1A1A1A' }}
          >
            Track your complete financial picture
          </h3>
          <p 
            className="text-center mb-16 max-w-2xl mx-auto"
            style={{ fontSize: '1.125rem', color: '#6B6B6B', lineHeight: 1.6 }}
          >
            See all your assets and liabilities in one place. No advice, no gamification. Just accurate numbers, updated in real-time.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 border border-black/8">
              <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-black" />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '0.75rem' }}>
                Track everything
              </h4>
              <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.6 }}>
                Net worth at a glance. Assets and liabilities organized by category. Track stocks, crypto, Bitcoin, commodities, and ETFs like VOO with live prices.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 border border-black/8">
              <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-black" />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '0.75rem' }}>
                Stay private
              </h4>
              <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.6 }}>
                Local-first architecture. Your financial data never touches our servers. Face ID protection.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 border border-black/8">
              <div className="w-12 h-12 bg-black/5 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-black" />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '0.75rem' }}>
                Live prices
              </h4>
              <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.6 }}>
                Real-time market data powered by Twelve Data. Track stocks, crypto, commodities, and ETFs with up-to-the-minute pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 
            className="text-center mb-16"
            style={{ fontSize: '2rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#1A1A1A' }}
          >
            How it works
          </h3>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center justify-center bg-black/5 text-black rounded-full w-10 h-10 mb-6" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                  1
                </div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '1rem' }}>
                  Add your assets
                </h4>
                <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.6 }}>
                  Manually enter your properties, investments, cash, and other assets. Your data stays on your device.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-black/5">
                <div className="mb-4">
                  <p style={{ fontSize: '0.813rem', color: '#6B6B6B' }}>Total Assets</p>
                  <div style={{ fontSize: '2rem', fontWeight: 300, color: '#1A1A1A', letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
                    £497,490
                  </div>
                </div>
                <div className="space-y-3 pt-4 border-t border-black/5">
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <p style={{ fontSize: '0.875rem', color: '#1A1A1A', fontWeight: 500 }}>S&P 500 (VOO)</p>
                      <p style={{ fontSize: '0.75rem', color: '#6B6B6B' }}>125 shares</p>
                    </div>
                    <div className="text-right">
                      <p style={{ fontSize: '0.875rem', color: '#1A1A1A' }}>£52,340</p>
                      <p style={{ fontSize: '0.75rem', color: '#00A86B' }}>+2.4%</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <p style={{ fontSize: '0.875rem', color: '#1A1A1A', fontWeight: 500 }}>Bitcoin</p>
                      <p style={{ fontSize: '0.75rem', color: '#6B6B6B' }}>0.5 BTC</p>
                    </div>
                    <div className="text-right">
                      <p style={{ fontSize: '0.875rem', color: '#1A1A1A' }}>£28,750</p>
                      <p style={{ fontSize: '0.75rem', color: '#00A86B' }}>+5.2%</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <p style={{ fontSize: '0.875rem', color: '#1A1A1A', fontWeight: 500 }}>Cash Savings</p>
                      <p style={{ fontSize: '0.75rem', color: '#6B6B6B' }}>Multiple accounts</p>
                    </div>
                    <div className="text-right">
                      <p style={{ fontSize: '0.875rem', color: '#1A1A1A' }}>£85,400</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="md:order-2">
                <div className="inline-flex items-center justify-center bg-black/5 text-black rounded-full w-10 h-10 mb-6" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                  2
                </div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '1rem' }}>
                  Track liabilities
                </h4>
                <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.6 }}>
                  Record mortgages, loans, credit cards, and other liabilities to see your complete financial picture.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-black/5 md:order-1">
                <div className="mb-4">
                  <p style={{ fontSize: '0.813rem', color: '#6B6B6B' }}>Total Liabilities</p>
                  <div style={{ fontSize: '2rem', fontWeight: 300, color: '#1A1A1A', letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
                    £185,230
                  </div>
                </div>
                <div className="space-y-3 pt-4 border-t border-black/5">
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <p style={{ fontSize: '0.875rem', color: '#1A1A1A', fontWeight: 500 }}>Mortgage</p>
                      <p style={{ fontSize: '0.75rem', color: '#6B6B6B' }}>2.5% · 22 years left</p>
                    </div>
                    <div className="text-right">
                      <p style={{ fontSize: '0.875rem', color: '#1A1A1A' }}>£165,000</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <p style={{ fontSize: '0.875rem', color: '#1A1A1A', fontWeight: 500 }}>Car Loan</p>
                      <p style={{ fontSize: '0.75rem', color: '#6B6B6B' }}>4.2% · 3 years left</p>
                    </div>
                    <div className="text-right">
                      <p style={{ fontSize: '0.875rem', color: '#1A1A1A' }}>£18,500</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div>
                      <p style={{ fontSize: '0.875rem', color: '#1A1A1A', fontWeight: 500 }}>Credit Card</p>
                      <p style={{ fontSize: '0.75rem', color: '#6B6B6B' }}>Amex Platinum</p>
                    </div>
                    <div className="text-right">
                      <p style={{ fontSize: '0.875rem', color: '#1A1A1A' }}>£1,730</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center justify-center bg-black/5 text-black rounded-full w-10 h-10 mb-6" style={{ fontSize: '0.875rem', fontWeight: 500 }}>
                  3
                </div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 500, color: '#1A1A1A', marginBottom: '1rem' }}>
                  See your worth, instantly
                </h4>
                <p style={{ fontSize: '1rem', color: '#6B6B6B', lineHeight: 1.6 }}>
                  Your complete financial picture with real-time market prices. Historical charts show your progress over time.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-black/5">
                <div className="mb-6">
                  <p style={{ fontSize: '0.813rem', color: '#6B6B6B' }}>Net Worth</p>
                  <div style={{ fontSize: '2.5rem', fontWeight: 300, color: '#1A1A1A', letterSpacing: '-0.02em', marginTop: '0.5rem' }}>
                    £312,260
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span style={{ fontSize: '0.875rem', color: '#00A86B', fontWeight: 500 }}>+£14,820</span>
                    <span style={{ fontSize: '0.875rem', color: '#6B6B6B' }}>(4.98%)</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-black/5">
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#6B6B6B', marginBottom: '0.5rem' }}>Assets</p>
                    <p style={{ fontSize: '1.25rem', fontWeight: 400, color: '#1A1A1A' }}>£497,490</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#6B6B6B', marginBottom: '0.5rem' }}>Liabilities</p>
                    <p style={{ fontSize: '1.25rem', fontWeight: 400, color: '#1A1A1A' }}>£185,230</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h3 
            className="text-center mb-4"
            style={{ fontSize: '2rem', fontWeight: 500, letterSpacing: '-0.02em', color: '#1A1A1A' }}
          >
            Simple, transparent pricing
          </h3>
          <p 
            className="text-center mb-12"
            style={{ fontSize: '1.125rem', color: '#6B6B6B' }}
          >
            7-day free trial. Cancel anytime.
          </p>

          <div className="flex justify-center">
            {/* Annual Only */}
            <div className="bg-white rounded-xl p-10 max-w-md w-full border border-black/8">
              <div className="text-center">
                <h4 style={{ fontSize: '0.875rem', fontWeight: 500, color: '#6B6B6B', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Annual Subscription
                </h4>
                <div className="mb-2">
                  <span style={{ fontSize: '3.5rem', fontWeight: 300, color: '#1A1A1A', letterSpacing: '-0.03em' }}>£49</span>
                  <span style={{ fontSize: '1.125rem', color: '#6B6B6B', fontWeight: 400 }}>/year</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#6B6B6B', marginBottom: '2.5rem' }}>
                  £4.08 per month
                </p>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full p-1 mt-0.5" style={{ backgroundColor: 'rgba(100, 116, 139, 0.1)' }}>
                      <Check className="w-4 h-4 text-black" strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '0.938rem', color: '#1A1A1A' }}>Unlimited assets & liabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full p-1 mt-0.5" style={{ backgroundColor: 'rgba(100, 116, 139, 0.1)' }}>
                      <Check className="w-4 h-4 text-black" strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '0.938rem', color: '#1A1A1A' }}>Live market prices via Twelve Data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full p-1 mt-0.5" style={{ backgroundColor: 'rgba(100, 116, 139, 0.1)' }}>
                      <Check className="w-4 h-4 text-black" strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '0.938rem', color: '#1A1A1A' }}>Stocks, crypto, commodities, ETFs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 rounded-full p-1 mt-0.5" style={{ backgroundColor: 'rgba(100, 116, 139, 0.1)' }}>
                      <Check className="w-4 h-4 text-black" strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '0.938rem', color: '#1A1A1A' }}>Priority support</span>
                  </li>
                </ul>
                <button className="w-full bg-black text-white px-6 py-3 rounded-xl transition-all hover:scale-105" style={{ fontSize: '1rem', fontWeight: 500 }}>
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="privacy" className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 
            className="mb-6"
            style={{ fontSize: '2.5rem', fontWeight: 300, letterSpacing: '-0.03em', color: '#1A1A1A' }}
          >
            Start tracking today
          </h3>
          <p 
            className="mb-8"
            style={{ fontSize: '1.125rem', color: '#6B6B6B', lineHeight: 1.6 }}
          >
            Get a complete view of your net worth. Everything you own and owe, in one place.
          </p>
          <button 
            className="bg-black text-white px-8 py-4 rounded-xl transition-all hover:scale-105 hover:shadow-xl inline-flex items-center gap-2"
            style={{ fontSize: '1rem', fontWeight: 500 }}
          >
            Download on the App Store
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h5 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#1A1A1A' }}>WorthView</h5>
              <p style={{ fontSize: '0.875rem', color: '#6B6B6B' }}>Made in London</p>
            </div>
            <div className="flex gap-8">
              <a href="/privacy" className="text-black/60 hover:text-black transition-colors" style={{ fontSize: '0.875rem' }}>
                Privacy Policy
              </a>
              <a href="#" className="text-black/60 hover:text-black transition-colors" style={{ fontSize: '0.875rem' }}>
                Terms
              </a>
              <a href="#" className="text-black/60 hover:text-black transition-colors" style={{ fontSize: '0.875rem' }}>
                Contact
              </a>
            </div>
          </div>
          <div className="text-center mt-8">
            <p style={{ fontSize: '0.813rem', color: '#6B6B6B' }}>© 2026 WorthView. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}