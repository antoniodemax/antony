import React from 'react';
const testimonials = [
  { name: 'Client 1', feedback: 'Great work! Highly recommended.' },
  { name: 'Client 2', feedback: 'Professional and creative.' },
];

function Testimonials() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg p-6 shadow">
            <p className="text-gray-300 mb-4">&quot;{t.feedback}&quot;</p>
            <span className="text-green-400 font-semibold">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;