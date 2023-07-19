import React from 'react'
import Profile from './Profile'
import ModeToggle  from "./ModeToggle";

function DashboardHeader() {
  return (
    <div className='h-10 border flex flex-1 border-gray-700'>


{/* Profile sectiom */}


<Profile className='w-10 h-10 hidden'/>

{/* Mode toggle */}

<ModeToggle />  

    </div>
  )
}

export default DashboardHeader

