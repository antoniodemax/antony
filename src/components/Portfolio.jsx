import React from 'react';
const portfolioItems = [
  { title: 'Travel UI/UX Design', category: 'Mobile App' },
  { title: 'Food delivery - Mobile App', category: 'Mobile App' },
  { title: 'Beauty Product Ecommerce App', category: 'Branding' },
  { title: 'Consultant Desk Design', category: 'Web Design' },
  { title: 'Travel Mobile App', category: 'Mobile App' },
  { title: 'Recycled Commerce', category: 'Branding' },
];

function Portfolio() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Let's have a look at my portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {portfolioItems.map((item, idx) => (
          <div key={idx} className="bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">{item.category}</span>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="bg-green-500 px-6 py-2 rounded text-white font-semibold hover:bg-green-600">
          View More
        </button>
      </div>
    </section>
  );
}

export default Portfolio;