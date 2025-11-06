export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        Trusted by Industry Leaders
      </h2>
      <p className="text-lg text-slate-600 max-w-2xl mx-auto">
        See what professionals are saying about working with Alice Chen
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Testimonial Card 1 */}
      <div className="group relative">
        <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-blue-600 transition-all duration-300 cursor-pointer h-full">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold text-lg">
              MR
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-slate-900">Michael Rodriguez</h3>
              <p className="text-sm text-slate-600">VP of Operations, TechVentures</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            "Alice's strategic approach reduced our operational costs by 32% in just six months. Her attention to detail and ability to identify inefficiencies was remarkable."
          </p>
          <div className="flex text-blue-600">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
        
        {/* Modal Popup */}
        <div className="absolute inset-0 bg-white rounded-lg shadow-lg border-2 border-blue-600 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 transform group-hover:scale-105">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold text-xl">
              MR
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-slate-900 text-lg">Michael Rodriguez</h3>
              <p className="text-sm text-slate-600">VP of Operations, TechVentures</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            "Alice's strategic approach reduced our operational costs by 32% in just six months. Her attention to detail and ability to identify inefficiencies was remarkable. She implemented a comprehensive workflow system that transformed how our teams collaborate."
          </p>
          <p className="text-slate-600 text-sm italic">
            "The ROI was evident within the first quarter. Highly recommend her expertise."
          </p>
          <div className="flex text-blue-600 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Card 2 */}
      <div className="group relative">
        <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-blue-600 transition-all duration-300 cursor-pointer h-full">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold text-lg">
              SP
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-slate-900">Sarah Patel</h3>
              <p className="text-sm text-slate-600">CEO, Innovate Solutions</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            "Working with Alice was transformative for our company culture. She helped us restructure our team dynamics, resulting in a 45% increase in employee satisfaction scores."
          </p>
          <div className="flex text-blue-600">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
        
        {/* Modal Popup */}
        <div className="absolute inset-0 bg-white rounded-lg shadow-lg border-2 border-blue-600 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 transform group-hover:scale-105">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold text-xl">
              SP
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-slate-900 text-lg">Sarah Patel</h3>
              <p className="text-sm text-slate-600">CEO, Innovate Solutions</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            "Working with Alice was transformative for our company culture. She helped us restructure our team dynamics, resulting in a 45% increase in employee satisfaction scores. Her workshops on effective communication created lasting change across all departments."
          </p>
          <p className="text-slate-600 text-sm italic">
            "Alice doesn't just consult—she partners with you to create sustainable solutions."
          </p>
          <div className="flex text-blue-600 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Card 3 */}
      <div className="group relative">
        <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-blue-600 transition-all duration-300 cursor-pointer h-full">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold text-lg">
              JK
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-slate-900">James Kim</h3>
              <p className="text-sm text-slate-600">Director, Global Enterprises</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            "Alice's data-driven insights helped us pivot our business model during a critical period. Her analytical skills combined with practical execution saved our Q4 projections."
          </p>
          <div className="flex text-blue-600">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
        
        {/* Modal Popup */}
        <div className="absolute inset-0 bg-white rounded-lg shadow-lg border-2 border-blue-600 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 transform group-hover:scale-105">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold text-xl">
              JK
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-slate-900 text-lg">James Kim</h3>
              <p className="text-sm text-slate-600">Director, Global Enterprises</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            "Alice's data-driven insights helped us pivot our business model during a critical period. Her analytical skills combined with practical execution saved our Q4 projections. She identified market opportunities we had completely overlooked and provided a clear roadmap for implementation."
          </p>
          <p className="text-slate-600 text-sm italic">
            "Her expertise turned a potential crisis into our most successful quarter yet."
          </p>
          <div className="flex text-blue-600 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Card 4 */}
      <div className="group relative lg:col-start-2">
        <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-blue-600 transition-all duration-300 cursor-pointer h-full">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold text-lg">
              EW
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-slate-900">Emily Watson</h3>
              <p className="text-sm text-slate-600">COO, Summit Partners</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            "Alice streamlined our project management processes, cutting delivery times by 40%. Her systematic approach and clear communication made implementation seamless across five departments."
          </p>
          <div className="flex text-blue-600">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
        
        {/* Modal Popup */}
        <div className="absolute inset-0 bg-white rounded-lg shadow-lg border-2 border-blue-600 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10 transform group-hover:scale-105">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-slate-300 rounded-full flex items-center justify-center text-slate-700 font-semibold text-xl">
              EW
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-slate-900 text-lg">Emily Watson</h3>
              <p className="text-sm text-slate-600">COO, Summit Partners</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed mb-4">
            "Alice streamlined our project management processes, cutting delivery times by 40%. Her systematic approach and clear communication made implementation seamless across five departments. She trained our team leaders personally, ensuring everyone understood the new frameworks."
          </p>
          <p className="text-slate-600 text-sm italic">
            "The efficiency gains have been sustained for over a year now. Exceptional results."
          </p>
          <div className="flex text-blue-600 mt-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="mt-16 text-center">
      <p className="text-slate-600 mb-6">
        Join hundreds of satisfied clients who have transformed their business
      </p>
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm">
        Schedule a Consultation
      </button>
    </div>
  </div>
</section>
  );
}