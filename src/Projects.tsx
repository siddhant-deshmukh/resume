import React from 'react'

function Projects() {
  return (
    <div className='flex flex-col space-y-3 w-full bg-white rounded-md p-5'>
      <h1 className='w-full text-left mb-3 text-xl font-extrabold'>Projects</h1>
      <div className='w-full flex  space-x-5'>
        <img className='w-10 h-12' src={'/googleForm.png'} />
        <div className='w-full'>
          <div className='flex justify-between'>
            <h1 className='text-xl w-fit h-fit text-left font-medium'>
              GoogleFormClone
            </h1>
            <div className='w-fit'>
              <span className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">MERN</span>
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Azure App Services</span>
            </div>
          </div>
          <p className='w-full text-left' >
            In this website one user can create a form/quiz and share it to other users and collect their responses.
          </p>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Projects