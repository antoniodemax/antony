import React from 'react';
const services = [
  {
    title: 'UI/UX Design',
    desc: 'User Interface & User Experience Design',
  },
  {
    title: 'Graphic Design',
    desc: 'Creative & Visual Design',
  },
  {
    title: 'Digital Marketing',
    desc: 'Online Marketing & Brand Promotion',
  },
];

function Services() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">WHAT I'M OFFERING</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {services.map((service, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.desc}</p>
            <a href="#" className="text-green-400 hover:underline">Read More →</a>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="bg-green-500 px-6 py-2 rounded text-white font-semibold hover:bg-green-600">
          All Service
        </button>
      </div>
    </section>
  );
}

export default Services;