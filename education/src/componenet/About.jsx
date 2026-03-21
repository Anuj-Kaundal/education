import React from "react";
import { GiStarShuriken } from "react-icons/gi";
function About() {
  return (
    <div className="font-sans text-gray-800">
      {/* ================= HERO ================= */}
      <section className="text-center py-16 px-6">
        <div className="flex justify-center">
          <button className="bg-[#3746F2] text-white px-4 py-1 rounded-full mb-4 flex justify-center items-center gap-2">
            <GiStarShuriken />About
          </button>
        </div>
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
      <section className="grid md:grid-cols-2 gap-10 px-8 py-10">
        <img
          src="/mission.svg"
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
          <p>At EDUN, we believe that quality education should be accessible to everyone, everywhere. Our mission is to bridge the gap between ambition and achievement by providing world-class courses that equip learners with in-demand skills.</p>
          <p>We partner with industry leaders and experienced professionals to create comprehensive learning paths that not only teach technical skills but also prepare students for real-world challenges.</p>
          <p>At EDUN, we believe that quality education should be accessible to everyone, everywhere. Our mission is to bridge the gap between ambition and achievement by providing world-class courses that equip learners with in-demand skills.</p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        <div className="flex flex-col justify-center items-center text-center bg-[#E9EBFF] p-5 rounded-lg">
          <img src="/expert-led.svg" alt="" height={50} width={50} />
          <h1 className="text-2xl font-bold">Expert-Led Courses</h1>
          <p className="text-[#000000CC]">Learn from industry professionals with years of <br className="hidden lg:block md:block" /> real-world experience</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-[#E9EBFF] p-5 rounded-lg">
          <img src="/community.svg" alt="" height={50} width={50} />
          <h1 className="text-2xl font-bold">Community Support</h1>
          <p className="text-[#000000CC]">Join a thriving community of learners and <br className="hidden lg:block md:block" /> mentors worldwide</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-[#E9EBFF] p-5 rounded-lg">
          <img src="/industry.svg" alt="" height={50} width={50} />
          <h1 className="text-2xl font-bold">Industry Certificates</h1>
          <p className="text-[#000000CC]">Earn recognized certifications that boost your <br className="hidden lg:block md:block" /> career prospects</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-[#E9EBFF] p-5 rounded-lg">
          <img src="/career.svg" alt="" height={50} width={50} />
          <h1 className="text-2xl font-bold">Career Focused</h1>
          <p className="text-[#000000CC]">Curriculum designed to meet current industry <br className="hidden lg:block md:block" /> demands and trends</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-[#E9EBFF] p-5 rounded-lg">
          <img src="/hands-on.svg" alt="" height={50} width={50} />
          <h1 className="text-2xl font-bold">Hands-On Projects</h1>
          <p className="text-[#000000CC]">Build real-world projects and create an <br className="hidden lg:block md:block" /> impressive portfolio</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-[#E9EBFF] p-5 rounded-lg">
          <img src="/lifetime.svg" alt="" height={50} width={50} />
          <h1 className="text-2xl font-bold">Lifetime Access</h1>
          <p className="text-[#000000CC]">Get unlimited access to course materials <br className="hidden lg:block md:block" /> and future updates</p>
        </div>
      </div>

      {/* ================= VALUES ================= */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-16 px-6">
        <h3 className="text-2xl font-bold mb-4">Our Values</h3>
        <p className="max-w-xl mx-auto mb-10">
          We are committed to excellence, innovation, and inclusivity in
          everything we do.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col justify-center items-center text-center">
            <img src="/excellence.svg" alt="Excellence" />
            <h4 className="font-semibold text-lg">Excellence</h4>
            <p className="text-sm">Delivering the highest quality education</p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <img src="/innovation.svg" alt="Innovation" />
            <h4 className="font-semibold text-lg">Innovation</h4>
            <p className="text-sm">Staying ahead with cutting-edge content</p>
          </div>

          <div className="flex flex-col justify-center items-center text-center">
            <img src="/community1.svg" alt="Community" />
            <h4 className="font-semibold text-lg">Community</h4>
            <p className="text-sm">Building a supportive learning environment</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;