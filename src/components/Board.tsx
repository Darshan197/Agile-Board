import sections from '../data/sections.json'
import tasksData from '../data/tasks.json'
import epics from '../data/epics.json'
import { useState } from 'react';
import Task from '../types/Task';
import Epic from '../types/Epic';

const Board = () => {
    const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
    // eslint-disable-next-line
    const [tasks, setTasks] = useState<Record<string, Task[]>>({
        todo: tasksData.todo,
        progress: tasksData.inProgress,
        review: tasksData.inReview,
        verification: tasksData.inVerification,
        done: tasksData.done
      })
      const epic = (id: number): Epic => {
        return epics.find(epic => epic.id === id) as Epic
      }
  return (
    <div>
      <div className="h-screen hidden">
    <div className={`fixed inset-0 bg-black opacity-70 ${sideBarOpen ? 'block ' : 'hidden'}`}></div>
    <div className={`fixed inset-y-0 left-0 bg-gray-100 w-64 border-r px-8 py-4 overflow-auto z-30 transform lg:static lg:inset-auto lg:translate-x-0 ${sideBarOpen ? 'translate-x-0 ease-out transition' : '-translate-x-full ease-in transition'}`}>
      <div className="flex items-center justify-between">
        <img src="/icons/BoardIcon.svg" className="w-9 h-9" alt="" />
        <button onClick={() => setSideBarOpen(true)} className="lg:hidden text-gray-700">
          {/* <XIcon className="w-5 h-5" /> */}
        </button>
      </div>
      <nav className="mt-8">
        <h3 className="text-xs  font-semibold text-gray-600 uppercase tracking-wide">Issues</h3>
        <div className="mt-2 -mx-3">
          <a href="/"  className="flex justify-between items-center px-3 py-2 bg-gray-200 rounded-lg">
            <span className="text-gray-900 text-sm font-medium">All</span>
            <span className="text-xs font-semibold text-gray-700">36</span>
          </a>
          <a href="/"  className="flex justify-between items-center px-3 py-2 rounded-lg">
            <span className="text-gray-700 text-sm font-medium">Assigned to me</span>
            <span className="text-xs font-semibold text-gray-700">2</span>
          </a>
          <a href="/"  className="flex justify-between items-center px-3 py-2 rounded-lg">
            <span className="text-gray-700 text-sm font-medium">Created by me</span>
            <span className="text-xs font-semibold text-gray-700">1</span>
          </a>
          <a href="/"  className="flex justify-between items-center px-3 py-2 rounded-lg">
            <span className="text-gray-700 text-sm font-medium">Archived</span>
          </a>
        </div>
      </nav>
      <nav className="mt-8">
        <h3 className="text-xs  font-semibold text-gray-600 uppercase tracking-wide">Tags</h3>
        <div className="mt-2 -mx-3">
          <a href="/"  className="flex justify-between items-center px-3 py-2 rounded-lg">
            <span className="text-gray-900 text-sm font-medium">Bug</span>
          </a>
          <a href="/"  className="flex justify-between items-center px-3 py-2 rounded-lg">
            <span className="text-gray-700 text-sm font-medium">Feature Request</span>
          </a>
          <a href="/"  className="flex justify-between items-center px-3 py-2 rounded-lg">
            <span className="text-gray-700 text-sm font-medium">Marketing</span>
          </a>
          <a href="/"  className="flex justify-between items-center px-3 py-2 rounded-lg">
            <span className="text-gray-700 text-sm font-medium">v2.0</span>
          </a>
          <a href="/"  className="flex justify-between items-center px-3 py-2 rounded-lg">
            <span className="text-gray-700 text-sm font-medium">Enhancement</span>
          </a>
          <a href="/"  className="flex justify-between items-center px-3 py-2 rounded-lg">
            <span className="text-gray-700 text-sm font-medium">Design</span>
          </a>
        </div>
        <button className="flex items-center mt-2 -ml-1 text-sm font-medium text-gray-600">
          <span><i className="fas fa-plus w-4 h-4 text-gray-500"></i></span>
          <span className="ml-1">New Project</span>
        </button>
      </nav>
    </div>
    <div className="flex-1 min-w-0 bg-white flex flex-col">
      <div className="border-b boreder-gray-200 flex-shrink-0">
        <header>
          <div className="px-6">
            <div className="flex justify-between py-3 border-b border-gray-200">
              <div className="flex-1 flex min-w-0">
                <button onClick={() => setSideBarOpen(true)} className="text-gray-600 lg:hidden">
                  {/* <MenuAlt2Icon className="w-5 h-5" /> */}
                </button>
                <div className="flex-shrink relative w-64 ml-3 lg:ml-0">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16 w-4 h-4 text-gray-600" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                  </span>
                  <input placeholder="Search" type="text" className="rounded-md block w-full focus:outline-none text-gray-900 pl-10 pr-4 py-2 text-sm border border-gray-400 placeholder-gray-600" />
                </div>
              </div>
              <div className="flex items-center flex-shrink-0 ml-6">
                <button>
                  <i className="far fa-bell w-5 h-5 text-gray-500"></i>
                </button>
                <button className="ml-6">
                  <img className="w-9 h-9 rounded-full object-cover" src="/images/user-logo.jpg" alt="userlogo" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="sm:flex items-center">
                <h2 className="text-2xl font-semibold text-gray-900 leading-tight">All Issues</h2>
                <div className="flex -space-x-2 mt-1 sm:mt-0 sm:ml-6">
                  <span className="rounded-full border-2 border-white">
                    <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </span>
                  <span className="rounded-full border-2 border-white">
                    <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </span>
                  <span className="rounded-full border-2 border-white">
                    <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                  </span>
                  <span className="rounded-full border-2 border-white">
                    <img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  </span>
                </div>
              </div>
              <div className="flex">
                <span className="hidden sm:inline-flex p-0.5 border bg-gray-200 rounded-md">
                  <button className="px-2 py-1 rounded">
                    {/* <ViewListIcon className="w-5 h-5" /> */}
                  </button>
                  <button className="px-2 py-1 bg-white rounded shadow">
                    {/* <ViewBoardsIcon className="w-5 h-5" /> */}
                  </button>
                </span>
                <button className="flex items-center ml-5 pr-4 pl-3 py-2 rounded text-sm font-medium bg-gray-800 hover:bg-gray-700 text-white">
                  <span><i className="fas fa-plus w-4 h-4"></i></span>
                  <span className="ml-1">New Issue</span>
                </button>
              </div>
            </div>
          </div>
          <div className="sm:hidden flex border-b px-4 p-0.5  border bg-gray-200">
            <button className="px-2 w-1/2 py-1 rounded inline-flex justify-center items-center">
              {/* <ViewListIcon className="w-5 h-5 text-gray-600" /> */}
              <span className="text-sm font-medium text-gray-600 leading-none">List</span>
            </button>
            <button className="px-2 w-1/2 py-1 bg-white rounded shadow inline-flex justify-center items-center">
              {/* <ViewBoardsIcon className="w-5 h-5 text-gray-600" /> */}
              <span className="text-sm font-medium text-gray-600 leading-none">Board</span>
            </button>
          </div>
        </header>
      </div>
    </div>
  </div>
  <div className="overflow-auto flex-1">
    <div className={`grid grid-flow-col space-x-2 ${'grid-cols-' + sections.length}`}>
        {
            sections.map((section) => (
                <div key={section.slug} className="bg-gray-100 rounded-md p-1.5 flex-shrink-0">
                  <h3 className="text-xs uppercase text-gray-500 p-1">{section.title + ' ' + tasks[section.slug].length}</h3>
                  <ul className="space-y-2 mt-2">
                      {
                          tasks[section.slug].map((task) => (

                              <li v-for="task in tasks[section.slug]" key={task.id} draggable="true">
                                <div className="rounded-sm shadow bg-white p-3 space-y-1.5 cursor-move">
                                  <div className="flex justify-between">
                                    <p className="text-sm text-gray-900 leading-snug tracking-normal">{task.title}</p>
                                  </div>
                                  <div>
                                    <div className={`inline-flex rounded px-2 text-sm tracking-wide max-w-full ${epic(task.epic).colorClass?.split('|').join(' ')}`}>
                                      <span className="truncate">{epic(task.epic).name}</span>
                                    </div>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-1">
                                      <img src={`/icons/${task.type}.svg`} alt="" />
                                      <img src="/icons/High.svg" className="w-4 h-4" alt="" />
                                    </div>
                                    <span className="flex-shrink-0 text-gra">
                                      <img className="rounded-full w-5 h-5" src={task.author} alt="author" />
                                    </span>
                                  </div>
                                </div>
                              </li>
                          ))
                      }
                  </ul>
                </div>
            ))
        }
    </div>
  </div>
    </div>
  );
}

export default Board
