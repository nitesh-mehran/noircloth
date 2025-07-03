import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We received your message.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
      <h1 className="text-4xl font-extrabold text-black mb-8 text-center">Contact Us</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-md"
      >
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-yellow-400 focus:ring-2 focus:ring-yellow-400"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-400 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
