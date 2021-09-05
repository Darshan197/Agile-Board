import { AcademicCapIcon } from '@heroicons/react/outline'

const Logo = ({ className }: { className: string }) => {
  return (
    <div className={`flex-shrink-0 ${className}`}>
      <AcademicCapIcon />
    </div>
  )
}

export default Logo
