import { UserButton } from '@clerk/clerk-react'
import React from 'react'
import Header from '../components/ui/custom/header'

function Home() {
  return (
    <div>
        <Header/>
        Lanfing screen
        home
        <UserButton/>
    </div>
  )
}

export default Home