export default function Hero() {
  return (
    <section className="relative bg-slate-50 overflow-hidden">
  {/* Background Grid Pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
  
  <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Content */}
      <div className="space-y-8">
        <div className="inline-block">
          <span className="text-sm font-medium text-slate-600 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
            Professional Portfolio
          </span>
        </div>
        
        <h1 className="text-5xl font-bold text-slate-900 leading-tight">
          Alice Chen
        </h1>
        
        <p className="text-xl text-slate-700 leading-relaxed">
          Strategic consultant and project manager specializing in digital transformation, operational excellence, and cross-functional team leadership for enterprise organizations.
        </p>

        {/* Key Skills */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wide">Core Expertise</h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-4 py-2 bg-white text-slate-700 text-sm font-medium rounded-lg shadow-sm border border-slate-200">Strategic Planning</span>
            <span className="px-4 py-2 bg-white text-slate-700 text-sm font-medium rounded-lg shadow-sm border border-slate-200">Project Management</span>
            <span className="px-4 py-2 bg-white text-slate-700 text-sm font-medium rounded-lg shadow-sm border border-slate-200">Team Leadership</span>
            <span className="px-4 py-2 bg-white text-slate-700 text-sm font-medium rounded-lg shadow-sm border border-slate-200">Process Optimization</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <button className="px-8 py-3 bg-slate-900 text-white font-medium rounded-lg shadow-md hover:bg-slate-800 transition-colors">
            View Portfolio
          </button>
          <button className="px-8 py-3 bg-white text-slate-900 font-medium rounded-lg shadow-sm border border-slate-300 hover:bg-slate-50 transition-colors">
            Get in Touch
          </button>
        </div>

        {/* Social Proof */}
        <div className="pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-600 mb-3">Trusted by leading organizations</p>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">50+</div>
              <div className="text-xs text-slate-600">Projects Completed</div>
            </div>
            <div className="h-12 w-px bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">15+</div>
              <div className="text-xs text-slate-600">Years Experience</div>
            </div>
            <div className="h-12 w-px bg-slate-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">98%</div>
              <div className="text-xs text-slate-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right 3D Interactive Card Stack */}
      <div className="relative lg:h-[600px] perspective-1000">
        
        {/* Main Hero Image Card */}
        <div className="relative transform hover:scale-105 transition-transform duration-500 z-30">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
            <img 
              src="https://picsum.photos/800/600" 
              alt="Professional workspace showcasing Alice Chen's work environment" 
              className="w-full h-80 object-cover"
            />
            <div className="p-6 bg-gradient-to-b from-white to-slate-50">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Featured Project</h3>
              <p className="text-sm text-slate-600">Enterprise digital transformation initiative delivering 40% efficiency improvement</p>
            </div>
          </div>
        </div>

        {/* Floating Testimonial Card */}
        <div className="absolute top-12 -right-8 w-72 transform rotate-3 hover:rotate-0 transition-transform duration-500 z-20 hidden lg:block">
          <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
            <div className="flex items-center gap-1 mb-3">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <p className="text-sm text-slate-700 italic mb-4">"Alice transformed our operations completely. Her strategic insight and execution excellence are unmatched."</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
              <div>
                <div className="text-sm font-semibold text-slate-900">Michael Rodriguez</div>
                <div className="text-xs text-slate-600">VP Operations, TechCorp</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Portfolio Card */}
        <div className="absolute bottom-8 -left-8 w-64 transform -rotate-2 hover:rotate-0 transition-transform duration-500 z-10 hidden lg:block">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
            <img 
              src="https://picsum.photos/400/300" 
              alt="Portfolio showcase" 
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h4 className="text-sm font-semibold text-slate-900 mb-1">Recent Success</h4>
              <p className="text-xs text-slate-600">Global supply chain optimization project</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs font-medium text-blue-600">View Case Study →</span>
                <span className="text-xs text-slate-500">2024</span>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </div>
  </div>
</section>
  );
}