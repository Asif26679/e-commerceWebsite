import React from "react";

const CustomerCare = () => {
  return (
    <section className="min-h-screen px-6 py-12 bg-gray-50 text-gray-800 mt-28">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center font-highway">Customer Care</h1>

        {/* Contact Options */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 shadow rounded text-center">
            <h2 className="text-xl font-semibold">📧 Email Us</h2>
            <p className="text-sm mt-2">support@shopmate.com</p>
          </div>
          <div className="bg-white p-6 shadow rounded text-center">
            <h2 className="text-xl font-semibold">📞 Call Us</h2>
            <p className="text-sm mt-2">+91-9876543210</p>
          </div>
          <div className="bg-white p-6 shadow rounded text-center">
            <h2 className="text-xl font-semibold">💬 Live Chat</h2>
            <p className="text-sm mt-2">Available 9AM - 9PM</p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white p-4 rounded shadow">
              <summary className="font-semibold cursor-pointer">How do I track my order?</summary>
              <p className="mt-2 text-sm">Go to "My Orders" and click "Track Order" next to your purchase.</p>
            </details>
            <details className="bg-white p-4 rounded shadow">
              <summary className="font-semibold cursor-pointer">What is the return policy?</summary>
              <p className="mt-2 text-sm">You can return products within 7 days of delivery for a full refund.</p>
            </details>
            <details className="bg-white p-4 rounded shadow">
              <summary className="font-semibold cursor-pointer">Can I change my delivery address?</summary>
              <p className="mt-2 text-sm">Yes, before the item is shipped. Contact our support team to request the change.</p>
            </details>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CustomerCare;