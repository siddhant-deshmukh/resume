import React from 'react'

function About() {
  return (
    <div className='flex flex-col space-y-3 w-full bg-white rounded-md p-5'>
      <div>
        <h1 className='w-full text-left text-3xl ont-medium'>Siddhant Deshmukh</h1>
        <h2 className='w-full text-left text-lg font-medium text-purple-700'>Software Engineer/Full Stack web deveploer</h2>
      </div>
      <div className='text-left  mt-3'>
        <div>As a software developer with a strong background in web development. Through my experience in web development, I have gained expertise in using various web related technologies, databases and have made scalable and secure project using them. Also, worked with cloud platforms such as Azure and Google Cloud.</div>
        <div className='pt-1'>
          Overall, I am a quick learner and am always eager to expand my knowledge and skills in the field of software development.
        </div>
      </div>
      <div className='grid grid-cols-2 gap-2 pt-6'>
        <div className='flex  items-center space-x-2 '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-purple-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <span><a href={'mailto:siddhant.deshmukh@outlook.com'}>siddhant.deshmukh@outlook.com </a></span>
          {/* <span className='ml-auto'><a href={'mailto:learner.siddhant.deshmkuh@gmail.com'}>learner.siddhant.deshmkuh@gmail.com</a></span> */}
          
        </div>
        <div className='flex items-center space-x-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-purple-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          <span>9604498420</span>
        </div>
        <div className='flex items-center space-x-2'>
          <img className='w-7 h-7' src={'/github.svg'}/>
          <span><a href='https://github.com/siddhant-deshmukh'>@siddhant-deshmukh</a></span>
        </div>
        <div className='flex items-center space-x-2'>
          <img className='w-7 h-7' src={'/linkedin.svg'}/>
          <span><a href='linkedin.com/in/siddhant-deshmukh-76540a192/'>@siddhant-deshmukh</a></span>
        </div>
      </div>
    </div>
  )
}

export default About