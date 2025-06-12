import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';
import newheadphone from '../assets/newheadphone.png';

const CategorySection = () => {
  const scrollRef = useRef(null);

  const categories = [
    { name: 'Wired', image: newheadphone },
    { name: 'Bluetooth', image: newheadphone },
    { name: 'Premium', image: newheadphone },
    { name: 'Gaming', image: newheadphone },
    { name: 'Over-Ear', image: newheadphone },
    { name: 'Noise Cancelling', image: newheadphone },
    
  ];

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="px-4 py-6 relative bg-gray-300">
      <h2 className="text-4xl font-bold mb-10 text-center">Shop by Category</h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-[50%] -translate-y-1/2 z-10 shadow p-2 rounded-full"
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-[50%] -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-600" />
      </button>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {categories.map((cat, index) => (
          <div
            key={index}
            className="min-w-[340px] flex-shrink-0  rounded shadow  hover:shadow-lg transition"
          >
            <div className="overflow-hidden rounded-t">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-80 object-cover transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="text-center py-4 font-semibold text-lg hover:text-blue-400 cursor-pointer">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;


  
