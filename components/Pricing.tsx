export default function Pricing() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Professional Portfolio Website
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Everything you need to showcase your work and connect with clients professionally
      </p>
    </div>
    
    <div className="max-w-lg mx-auto">
      <div className="bg-white border-2 border-blue-600 rounded-xl shadow-md p-10 relative">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-6 py-1 rounded-full text-sm font-semibold">
            BEST VALUE
          </span>
        </div>
        
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Complete Portfolio Package</h3>
          <div className="mb-2">
            <span className="text-5xl font-bold text-slate-900">$29</span>
            <span className="text-gray-600 text-lg ml-2">one-time payment</span>
          </div>
          <p className="text-sm text-gray-500">No recurring fees • Lifetime access</p>
        </div>
        
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4">What's Included:</h4>
          <ul className="space-y-4">
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span><strong className="text-slate-900">Curated Portfolio Gallery</strong> - Showcase your best work with professional presentation</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span><strong className="text-slate-900">Client Testimonials Section</strong> - Build trust with authentic reviews from satisfied clients</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span><strong className="text-slate-900">Professional About Page</strong> - Highlight your background, skills, and expertise clearly</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span><strong className="text-slate-900">Integrated Contact System</strong> - Make it easy for clients to reach out and connect</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span><strong className="text-slate-900">Professional Yet Personable Design</strong> - Perfect balance of credibility and approachability</span>
            </li>
            <li className="flex items-start text-gray-700">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span><strong className="text-slate-900">Mobile-Responsive Layout</strong> - Looks perfect on all devices and screen sizes</span>
            </li>
          </ul>
        </div>
        
        <button 
          onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
          className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Get Started Now - $29
        </button>
        
        <p className="text-center text-sm text-gray-500 mt-6">
          Secure payment powered by Stripe • Instant access after purchase
        </p>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600 text-sm">
          ✓ One-time payment • ✓ No hidden fees • ✓ Professional quality guaranteed
        </p>
      </div>
    </div>
  </div>
</section>
  );
}