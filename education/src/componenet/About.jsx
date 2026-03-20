import React from "react";

function About() {
  return (
    <div className="font-sans text-gray-800">
      {/* ================= HERO ================= */}
      <section className="text-center py-16 px-6">
        <button className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full mb-4">
          About
        </button>
        <h2 className="text-3xl font-bold mb-4">
          Empowering the Next Generation
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          EDUN is a leading online education platform dedicated to providing
          high-quality, accessible learning experiences that transform careers
          and change lives.
        </p>
      </section>

      {/* ================= MISSION ================= */}
      <section className="grid md:grid-cols-2 gap-10 px-8 py-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="team"
          className="rounded-lg shadow-md"
        />

        <div>
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-600 mb-4">
            At EDUN, we believe that quality education should be accessible to
            everyone, everywhere. Our mission is to bridge the gap between
            ambition and achievement by providing world-class courses that equip
            learners with in-demand skills.
          </p>

          <p className="text-gray-600 mb-4">
            We partner with industry leaders and experienced professionals to
            create comprehensive learning paths that not only teach technical
            skills but also prepare students for real-world challenges.
          </p>

          <p className="text-gray-600">
            Our focus is on building a future where learning never stops and
            opportunities are endless.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="grid md:grid-cols-3 gap-6 px-8 py-10">
        {[
          "Expert-Led Courses",
          "Community Support",
          "Industry Certificates",
          "Career Focused",
          "Hands-On Projects",
          "Lifetime Access",
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-xl text-center shadow-sm"
          >
            <h4 className="font-semibold text-lg mb-2">{item}</h4>
            <p className="text-sm text-gray-600">
              Learn and grow with high-quality content and real-world
              experience.
            </p>
          </div>
        ))}
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-16 px-6">
        <h3 className="text-2xl font-bold mb-4">Our Values</h3>
        <p className="max-w-xl mx-auto mb-10">
          We are committed to excellence, innovation, and inclusivity in
          everything we do.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-lg">Excellence</h4>
            <p className="text-sm">Delivering the highest quality education</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Innovation</h4>
            <p className="text-sm">Staying ahead with cutting-edge content</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg">Community</h4>
            <p className="text-sm">Building a supportive learning environment</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;