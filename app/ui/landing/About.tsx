import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">About JOSTUM Journal of Engineering</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Introduction</h2>
        <p className="text-justify">
          The JOSTUM Journal of Engineering is an international journal established in the College of Engineering at Joseph Sarwuan Tarka University, Makurdi, Nigeria. Our bi-annual journal aims to publish scholarly and high-quality articles based on theoretical and empirical works from various fields of engineering. We focus on sustainable development through the evaluation of new innovations and technological breakthroughs in engineering.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
        <p className="text-justify">
          Our mission is to foster the advancement of engineering knowledge and practice by providing a platform for the dissemination of cutting-edge research. We strive to contribute to societal development by promoting interdisciplinary collaboration and innovation.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Editorial Board</h2>
        <p className="text-justify">
          The JOSTUM Journal of Engineering is managed by an esteemed editorial board comprising experts from various engineering disciplines. Our editors are dedicated to maintaining the highest standards of quality and integrity in the peer-review process.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Publication Schedule</h2>
        <p className="text-justify">
          The journal publishes articles bi-annually in January and July. We welcome submissions from researchers worldwide and encourage contributions that address current challenges and future directions in engineering.
        </p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-justify">
          For more information about the journal, submission guidelines, or any other inquiries, please contact us at:
        </p>
        <p>Email: <a href="mailto:jostum_je@uam.edu.ng" className="text-blue-500">jostum_je@uam.edu.ng</a></p>
        <p>Phone: 0803 699 3038 (Managing Editor)</p>
        <p>Address: PMB 2373, Makurdi, Benue State, Nigeria</p>
      </section>
    </div>
  );
};

export default About;
