// src/pages/LandingPage.tsx


const LandingPage = () => {
  return (
    
    <div className="bg-gray-50 text-gray-900">
        <section>
            
        </section>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Unlock Your Coding Potential
          </h1>
          <p className="mt-4 text-lg sm:text-xl">
            Learn to code with personalized pathways for all skill levels. Start your coding journey today!
          </p>
          <div className="mt-8">
            <a
              href="#get-started"
              onClick={() => window.location.href = '/sarathi/demo'}
              className="inline-block bg-white text-blue-600 font-bold py-2 px-6 rounded-lg hover:bg-gray-100"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white" id="features">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Why Choose Us?</h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            Our platform is designed to help you grow with personalized coding lessons.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">Personalized Learning</h3>
              <p className="mt-4 text-gray-600">
                Tailored coding pathways based on your skill level and goals.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">Interactive Coding</h3>
              <p className="mt-4 text-gray-600">
                Hands-on coding with real-time feedback and comments.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800">Progress Tracking</h3>
              <p className="mt-4 text-gray-600">
                Track your progress and continue improving with detailed reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100" id="testimonials">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">What Our Users Say</h2>
          <div className="mt-8 space-y-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-800">
                "This platform helped me improve my coding skills at my own pace. The personalized paths are a game changer!"
              </p>
              <p className="mt-4 font-semibold text-gray-700">John Doe</p>
              <p className="text-gray-600">Software Developer</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-800">
                "I loved how interactive the lessons were. I felt engaged throughout the entire process."
              </p>
              <p className="mt-4 font-semibold text-gray-700">Jane Smith</p>
              <p className="text-gray-600">Junior Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8" id="footer">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 Sarathi Learning. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-white hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="text-white hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
