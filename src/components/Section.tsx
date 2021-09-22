import { useState } from 'react'
import Task from 'types/Task'
import tasksData from '../data/tasks.json'
import TaskCard from './Task'

const Section = ({ section }: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tasks, setTasks] = useState<Record<string, Task[]>>({
    todo: tasksData.todo,
    progress: tasksData.inProgress,
    review: tasksData.inReview,
    verification: tasksData.inVerification,
    done: tasksData.done
  })

  return (
    <div className="bg-gray-100 rounded-md p-1.5 flex-shrink-0">
      <h3 className="text-xs uppercase text-gray-500 p-1">{section.title + ' ' + tasks[section.slug].length}</h3>
      <ul className="space-y-2 mt-2">
        {
          tasks[section.slug].map((task) => (
            <TaskCard key={task.id} task={task} />
          ))
        }
      </ul>
    </div>
  )
}

export default Section
