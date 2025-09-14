import React from "react";
function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center py-16">
      <h1 className="text-5xl font-bold mb-2">Hello, I'm Antony Peter</h1>
      <p className="text-green-400 font-semibold mb-2">Full Stack Software Developer</p>
      <p className="text-gray-300 mb-6">
        Designing user friendly interfaces and seamless user experiences.
      </p>
    
      <div className="flex gap-4 mb-4">
        <button className="bg-green-500 px-6 py-2 rounded text-white font-semibold hover:bg-green-600">
          Let's Talk
        </button>
        <button className="border border-green-500 px-6 py-2 rounded text-green-500 font-semibold hover:bg-green-600 hover:text-white">
          Download CV
        </button>
      </div>
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">Trusted by 650+ Client</span>
      </div>
      <div className="flex gap-8 justify-center mb-6">
        <div>
          <span className="text-2xl font-bold">07+</span>
          <div className="text-xs text-gray-400">Years of experience</div>
        </div>
        <div>
          <span className="text-2xl font-bold">20+</span>
          <div className="text-xs text-gray-400">Project delivered</div>
        </div>
        <div>
          <span className="text-2xl font-bold">07+</span>
          <div className="text-xs text-gray-400">Countries served</div>
        </div>
      </div>
      <div className="flex gap-4">
        <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Figma</span>
        <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">XD</span>
        <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">WordPress</span>
      </div>
    </section>
  );
}

export default HeroSection;