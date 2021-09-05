import './sidebar.css'

interface SideBarProps {
  expanded: boolean
}

const SideBar = ({ expanded }: SideBarProps) => {
  return (
    <div>
      <div className={`sidebar overflow-hidden border-r ${expanded ? 'w-60' : 'w-5'}`}>
      <div className="sidebar-content p-2">
        <div className="flex items-end justify-center py-2">
          <i className="fas fa-border-all text-4xl text-blue-500"></i>
          <div className="pt-1 pl-2">
            <div className="mb-1 text-gray-800 text-sm font-medium leading-none">
              { 'Code Overload' }
            </div>
            <div className="text-gray-500 text-sm">
              { 'Software' } project
            </div>
          </div>
        </div>
      </div>
    </div>
    </div >
  )
}

export default SideBar