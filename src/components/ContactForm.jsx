import React from 'react';
function ContactForm() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Let's talk</h2>
      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          type="email"
          placeholder="Your email address"
          required
          className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
        />
        <textarea
          placeholder="Message"
          required
          className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-green-500"
          rows={5}
        />
        <button
          type="submit"
          className="bg-green-500 px-6 py-2 rounded text-white font-semibold hover:bg-green-600"
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default ContactForm;