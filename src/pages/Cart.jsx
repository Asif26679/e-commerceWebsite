
import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="text-center animate-fade-in">
        {/* Cart illustration or emoji */}
        <div className="text-6xl mb-6">🛍️</div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Oops! Your Cart is Feeling Lonely
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          You haven't added anything yet. Start exploring our awesome collection and fill it up!
        </p>

        {/* CTA Button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
        Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Cart;
