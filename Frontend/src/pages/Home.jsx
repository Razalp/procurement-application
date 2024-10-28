import React from 'react';

const Home = () => {
  return (
    <div className="bg-gray-900 h-screen flex items-center justify-center pb-6 sm:pb-8 lg:pb-12 text-white thunder-bg">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <section className="flex flex-col items-center text-center">
          <div className="flex max-w-xl flex-col items-center pb-16 pt-8 lg:pb-48 lg:pt-32">
            <p className="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">
              Very proud to introduce
            </p>
            <h1 className="mb-8 text-4xl font-bold sm:text-5xl md:mb-12 md:text-6xl">
              Revolutionary way to build the web
            </h1>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a href="#" className="btn btn-primary">
                Start now
              </a>
              <a href="#" className="btn btn-primary">
                Take tour
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-gray-200"></span>

            <div className="flex gap-4">
              {/* Social media icons with links */}
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                aria-label="Instagram"
              >
                {/* SVG Icon */}
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                aria-label="Twitter"
              >
                {/* SVG Icon */}
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                aria-label="LinkedIn"
              >
                {/* SVG Icon */}
              </a>
              <a
                href="#"
                target="_blank"
                className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                aria-label="GitHub"
              >
                {/* SVG Icon */}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
