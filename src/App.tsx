import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SideBar from './SideBar'
import About from './About'
import Projects from './Projects'

function App() {

  return (
    <div className="fixed w-screen bg-gray-100 h-screen overflow-y-auto left-0 top-0">
      <main className='mx-auto   p-2 my-3 w-full flex flex-col md:flex-row  space-x-2 max-w-7xl'> 
        {/* grid gap-2 grid-cols-3 grid-flow-row */}
        <div className='pr-2 sticky top-0'>
          <SideBar />
        </div>
        <div className='flex flex-col space-y-5'>
          <About />
          <Projects />
        </div>
      </main>
    </div>
  )
}

export default App
