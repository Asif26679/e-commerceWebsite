import React from 'react';

const Cart = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">Your Cart is Empty 🛒</h1>
        <p className="text-gray-600 mb-6">Looks like you haven’t added anything to your cart yet.</p>
        <a
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Shop Products
        </a>
      </div>
    </section>
  );
};

export default Cart;