import React from 'react'

const skills = [
	{text: 'HTML/CSS' , type:'frontend' },
	{text: 'JavaScript' , type:'frontend' },
	{text: 'TypeScript' , type:'frontend' },
	{text: 'React' , type:'frontend' },
	{text: 'Tailwindcss' , type:'frontend' },

	{text: 'Next' , type:'backend' },
	{text: 'Express' , type:'backend' },
	{text: 'Firebase' , type:'backend' },
	{text: 'MongoDB' , type:'database' },
	{text: 'Postgres' , type:'database' },
	{text: 'FireStore' , type:'database' },
	{text: 'Ubuntu' , type:'Others' },
	{text: 'Docker' , type:'Others' },
	{text: 'Python' , type:'Others' },
	{text: 'C++' , type:'Others' },
	{text: 'Azure' , type:'Others' },
	{text: 'Google Cloud' , type:'Others' },
]
function SideBar() {
	return (
		<div className='w-96 bg-white shadow shadow-gray-300 rounded-lg py-3 px-3 flex flex-col space-y-3 max-w-xs'>
			<div className='w-fit mx-auto'>
				<img className=' w-36 h-36 border-gray-300 border rounded-full' src={'/avatar.jpg'} />
			</div>
			<div className='w-full border-y border-purple-200 py-2'>
				<h1 className='w-full text-left text-black text-xl  py-2 pl-2  font-extrabold'>SKILLS</h1>
				<div className='flex flex-wrap  grid-flow-col w-full whitespace-nowrap'>
					{	
						skills.map((ele) => {
							return <div
								key={ele.text}
								className="px-2 ml-1 my-1 py-1 border border-purple-200  w-fit rounded-md bg-purple-100 text-sm font-bold text-purple-600 "
								>
								{ele.text}
							</div>
						})
					}
				</div>
			</div>
		</div>
	)
}

export default SideBar