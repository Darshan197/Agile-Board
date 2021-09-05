import Logo from './Logo'
import { BellNotification, CogIcon, SquareMenuIcon } from './svg'

const PageHeader = () => {
    return (
        <header className="h-14 fixed items-center justify-between flex w-full z-20 bg-white shadow px-2">
            <div className="flex items-center px-1.5">
                <div className="p-2 rounded-full cursor-pointer text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition duration-100">
                    <SquareMenuIcon className="w-4 h-4" />
                </div>
                <div className="flex items-center px-1.5 text-gray-800 dark:text-gray-300 hover:bg-blue-100 rounded cursor-pointer">
                    <Logo className="w-5 text-blue-700" />
                    <h3 className="font-semibold ml-1 text-gray-800 uppercase">BigBrain Recruiters</h3>
                </div>
            </div>
            <div className="flex items-center space-x-3 pr-4">
                <div className="flex items-center relative h-8">
                    <span className="flex items-center px-2 absolute">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search w-3 h-3 text-gray-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                    </span>
                    <input placeholder="Search" type="text" className="block rounded-md w-48 focus:border-blue-600 focus:outline-none text-gray-900 px-6 py-1 text-sm border-2 border-gray-300 placeholder-gray-600" />
                </div>
                <span className="p-1 rounded-full cursor-pointer text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition duration-100"><BellNotification /></span>
                <span className="p-1 rounded-full cursor-pointer text-gray-800 hover:bg-blue-100 hover:text-blue-800 transition duration-100"><CogIcon /></span>
                <span className="p-1.5 rounded-full cursor-pointer text-gray-800 hover:bg-blue-100 transition duration-100">
                    <img className="w-6 h-6" src="https://secure.gravatar.com/avatar/d5cf7ddf226ee943ba10314138c4c12c?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FDP-6.png" alt="" />
                </span>
            </div>
        </header>
    )
}

export default PageHeader

