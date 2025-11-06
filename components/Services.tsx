export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="max-w-3xl mb-16">
      <h2 className="text-4xl font-bold text-slate-900 mb-4">
        What I Offer
      </h2>
      <p className="text-lg text-slate-600">
        A comprehensive approach to showcasing professional excellence and building meaningful connections with clients and collaborators.
      </p>
    </div>

    {/* Bento Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-fr">
      
      {/* Large Feature - Portfolio (spans 2 rows, left side) */}
      <div className="md:col-span-6 lg:col-span-7 md:row-span-2 bg-white border border-gray-200 shadow-sm rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Curated Portfolio
          </h3>
          <p className="text-slate-600 mb-6 flex-grow">
            A carefully selected showcase of my finest work, demonstrating expertise, creativity, and attention to detail. Each project tells a story of problem-solving and professional excellence.
          </p>
          <div className="space-y-3">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-700">High-quality project presentations</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-700">Detailed case studies and outcomes</span>
            </div>
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-700">Visual documentation of best work</span>
            </div>
          </div>
        </div>
      </div>

      {/* Medium Feature - Testimonials (top right) */}
      <div className="md:col-span-6 lg:col-span-5 bg-white border border-gray-200 shadow-sm rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Client Testimonials
          </h3>
          <p className="text-slate-600 flex-grow">
            Authentic feedback from satisfied clients who have experienced the quality and professionalism of my work firsthand. Real voices, real results.
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-center text-sm text-slate-600">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">Verified reviews and recommendations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Small Feature - Background (bottom right, first) */}
      <div className="md:col-span-3 lg:col-span-5 bg-white border border-gray-200 shadow-sm rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Professional Background
          </h3>
          <p className="text-slate-600 text-sm flex-grow">
            Clear presentation of experience, skills, and qualifications that establish credibility and expertise in the field.
          </p>
          <div className="mt-4">
            <span className="inline-flex items-center text-xs font-medium text-slate-700 bg-slate-50 px-3 py-1 rounded-full">
              Skills & Experience
            </span>
          </div>
        </div>
      </div>

      {/* Wide Feature - Contact (bottom, spans full width on mobile) */}
      <div className="md:col-span-3 lg:col-span-7 bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100 shadow-sm rounded-xl p-8 hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col h-full">
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Easy Connection
          </h3>
          <p className="text-slate-600 text-sm mb-6 flex-grow">
            Multiple convenient ways to get in touch, schedule consultations, and start collaborating on your next project.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center text-sm text-slate-700 bg-white px-4 py-2 rounded-lg border border-gray-200">
              <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </div>
            <div className="flex items-center text-sm text-slate-700 bg-white px-4 py-2 rounded-lg border border-gray-200">
              <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule
            </div>
            <div className="flex items-center text-sm text-slate-700 bg-white px-4 py-2 rounded-lg border border-gray-200">
              <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Quick Response
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
  );
}