import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen bg-gray-50 px-6 py-12'>
        <h1 className='text-4xl font-bold text-center mb-8 text-gray-800'>
            About Me
        </h1>
    <p className='max-w-3xl mx-auto text-gray-700 mb-6 text-center'>
        Hi, I’m Jyoti Sharma — an aspiring Frontend Developer & CRO Specialist. 
  I bring 5+ years of experience optimizing websites and running A/B tests, 
  and I’m learning React to build user-friendly web applications that combine 
  analytics with great UX.
    </p>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">

  {/* Work History */}
  <div>
    <h2 className="text-2xl font-semibold mb-4">Work History</h2>
    <ul className="text-gray-700 space-y-3">
      <li>
        <strong>Cochlear</strong> – Specialist, Social & Content (2021–Present)
      </li>
      <li>
        <strong>Legalfit</strong> – Support Engineer (2017–2020)
      </li>
      <li>
        <strong>IBM</strong> – Technical Support (2008–2012)
      </li>
    </ul>
  </div>

  {/* Skills */}
  <div>
    <h2 className="text-2xl font-semibold mb-4">Skills</h2>
    <div className="flex flex-wrap gap-2 opacity-0 animate-fadeIn">
      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm
       transform transition duration-300 hover:scale-110 hover:bg-blue-200
      ">React</span>
      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm
         transform transition duration-300 hover:scale-110 hover:bg-blue-200">Tailwind</span>
      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm
         transform transition duration-300 hover:scale-110 hover:bg-blue-200">JavaScript</span>
      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm
         transform transition duration-300 hover:scale-110 hover:bg-blue-200">GA4</span>
      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm
         transform transition duration-300 hover:scale-110 hover:bg-blue-200">CRO</span>
      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm
         transform transition duration-300 hover:scale-110 hover:bg-blue-200">A/B Testing</span>
      {/* add more badges as needed */}
    </div>
  </div>

</div>
    </div>
  )
}

export default About