import React from 'react'

function Blog() {
  return (
    <div className='max-w-380 mx-auto'>
      <div className='space-y-5 px-10 lg:px-20 py-3'>
        <h1 className='text-8xl text-center'>Our Blog</h1>
        <p className='text-xl text-center'>Get the latest updates and deeper coffee experience from IMAJI Coffee</p>
        <div className='flex flex-col justify-center space-y-5'>
          <img src="/blog.svg" alt="" />
          <h1 className='text-3xl font-semibold'>How to Start a Career in Web Development in 2026</h1>
          <p>Learn the step-by-step roadmap to becoming a professional web developer and landing your first job.</p>
          <div className='flex gap-5 text-sm text-[#717171]'>
            <h2>By Raj</h2>
            <ul className='flex gap-5 list-disc'>
              <li>Novanectar Team</li>
              <li>March 11, 2026</li>
            </ul>
          </div>
        </div>
        <button className='text-lg text-white bg-[#3746F2] px-5 py-2 rounded-md'>Read More</button>
      </div>
      {/* blogs */}
      {/* 1st */}
      <div className='flex lg:flex-row flex-col gap-10  px-10 lg:px-20 py-3'>
        <div>
          <img src="/blog1.svg" alt="" className='w-full' />
        </div>
        <div className='space-y-3'>
          <h1 className='text-3xl'>Top 10 Skills Every Developer Should Learn</h1>
          <p>Discover the essential skills every developer needs to stay competitive in today’s <br className='hidden md:block lg:block' /> fast-evolving tech industry and build a successful career in software development.</p>
          <div className='flex gap-5 text-sm text-[#717171]'>
            <h2>By Raj</h2>
            <ul className='flex gap-5 list-disc'>
              <li>Novanectar Team</li>
              <li>March 11, 2026</li>
            </ul>
          </div>
          <button className='text-lg text-white bg-[#3746F2] px-5 py-2 rounded-md'>Read More</button>
        </div>
      </div>
      {/* 2nd */}
            <div className='flex lg:flex-row flex-col gap-10  px-10 lg:px-20 py-3'>
        <div>
          <img src="/blog2.svg" alt="" className='w-full' />
        </div>
        <div className='space-y-3'>
          <h1 className='text-3xl'>Tips to Succeed in Your First Internship</h1>
          <p>Explore the most important skills developers should learn to stay relevant, improve <br className='hidden md:block lg:block' /> their problem-solving abilities, and grow in the modern technology landscape.</p>
          <div className='flex gap-5 text-sm text-[#717171]'>
            <h2>By Raj</h2>
            <ul className='flex gap-5 list-disc'>
              <li>Novanectar Team</li>
              <li>March 11, 2026</li>
            </ul>
          </div>
          <button className='text-lg text-white bg-[#3746F2] px-5 py-2 rounded-md'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Blog