import React from 'react'
import AddResume from './componenets/AddResume'


function Dashboard() {
  return (
    <div className='p-10 md:px-20 lg:px-32'>
        <h2 className='font-bold text-3xl'> My Resumes</h2>
        <p> Satrt Creating AI resume for your next Job</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-30'>
            <AddResume/>
        </div>
    </div>
  )
}

export default Dashboard