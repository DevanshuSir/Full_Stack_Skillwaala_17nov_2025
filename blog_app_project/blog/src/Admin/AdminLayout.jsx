import Sidebar from "./Sidebar"


const AdminLayout = ({children}) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar/>
      <div className="flex-1 p-6">{children}</div>
    </div>
  )
}

export default AdminLayout
