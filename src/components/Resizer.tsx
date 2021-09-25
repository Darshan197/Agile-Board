import { useEffect } from 'react'
import './resizer.css'
import { ChevronIcon } from './svg'

const Resizer = ({ expanded, toggle }: { expanded: boolean, toggle: Function }) => {
  useEffect(() => {
    document.addEventListener('keypress', (e) => {
      if (e.key === '[') toggle()
    })
    return () => {
      document.removeEventListener('keypress', () => {
        console.log(1)
      })
    }
  }, [toggle])
  return (
    <div onClick={() => toggle()} className="sizer-wrap top-14">
    <div className="strip"></div>
    <div className="sizer">
      <div className="line"></div>
    </div>
    <div>
      <button aria-label="toggle" className={`btn ${expanded ? 'opacity-100' : 'opacity-100'}`}>
        <div className="overlay"></div>
        <span className="cursor-pointer text-gray-500 flex justify-center flex-shrink-0 leading-none">
          <ChevronIcon className={`w-5 h-5 icon transform ${expanded ? '-rotate-180 mt-0.5 ml-0.5' : 'mb-1 mr-1'}`} />
        </span>
      </button>
    </div>
  </div>
  )
}

export default Resizer
