import React from 'react'
import { Outlet } from 'react-router-dom'
type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <aside>Sidebar</aside>
        <main>
          <Outlet />
        </main>
    </div>
  )
}

export default AdminLayout