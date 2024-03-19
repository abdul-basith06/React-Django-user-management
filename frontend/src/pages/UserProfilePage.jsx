import React, { Profiler } from 'react'
import Navbar from '../navbar/Navbar'
import Profile from '../home/Profile'

const UserProfilePage = () => {
  return (
    <div>
        <Navbar title={'Profile page'}/>
        <br />
        <Profile />
    </div>
  )
}

export default UserProfilePage