import React from 'react'
import Navbar from '../navbar/Navbar'
import AdminPanel from '../admin/Adminpanel'

const AdminPanelPage = () => {
  return (
    <div>
        <Navbar title={title}/>
        <AdminPanel/>
    </div>
  )
}

export default AdminPanelPage