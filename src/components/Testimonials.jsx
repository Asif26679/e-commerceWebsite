import React from 'react';

const stats = [
  { number: '1000+', label: 'Products' },
  { number: '10+', label: 'Service Center' },
  { number: '1B+', label: 'Users' },
  { number: '90+', label: 'Countries' },
];

const Stats = () => {
  return (
    <section className="py-16 bg-gray-900 text-white rounded-3xl mt-1" id="stats" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <h3 className="text-3xl md:text-4xl font-extrabold text-yellow-400">{stat.number}</h3>
              <p className="mt-2 text-lg font-medium text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;