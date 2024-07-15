import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
        <p className="text-justify mb-4">
          For more information about the journal, submission guidelines, or any other inquiries, please contact us at:
        </p>
        <p>Email: <a href="mailto:jostum_je@uam.edu.ng" className="text-blue-500">jostum_je@uam.edu.ng</a></p>
        <p>Phone: 0803 699 3038 (Managing Editor)</p>
        <p>Address: PMB 2373, Makurdi, Benue State, Nigeria</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Newsletter Subscription</h2>
        <p className="text-justify mb-4">
          Stay updated with the latest news and publications from the JOSTUM Journal of Engineering. Subscribe to our newsletter by entering your email address below.
        </p>
        <form className="flex flex-col">
          <input
            type="email"
            placeholder="Enter your email"
            className="mb-4 p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
