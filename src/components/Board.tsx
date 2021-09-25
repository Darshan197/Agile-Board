import { DragDropContext, Droppable, DroppableProvided, DropResult } from 'react-beautiful-dnd';
import sections from '../data/sections.json';
import Task from 'types/Task'
import tasksData from '../data/tasks.json'
import TaskCard from './Task';
import { useState } from 'react';

const Board = () => {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tasks, setTasks] = useState<Record<string, Task[]>>({
    todo: tasksData.todo,
    progress: tasksData.inProgress,
    review: tasksData.inReview,
    verification: tasksData.inVerification,
    done: tasksData.done
  })

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result
    if(!destination) return
    if(source.droppableId === destination.droppableId && source.index === destination.index) return
    let taskList = tasks
    let task = taskList[source.droppableId][result.source.index]
    taskList[source.droppableId].splice(result.source.index, 1)
    taskList[destination.droppableId].splice(destination.index, 0, task)
    setTasks(taskList)
  }

  return (
    <div className="overflow-auto flex-1">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={`grid grid-flow-col space-x-2 ${'grid-cols-' + sections.length}`}>
          {
            sections.map((section) => (
              <Droppable key={section.slug} droppableId={section.slug}>
                {(provided: DroppableProvided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef} className="bg-gray-100 rounded-md p-1.5 flex-shrink-0">
                    <h3 className="text-xs uppercase text-gray-500 p-1">{section.title + ' ' + tasks[section.slug].length}</h3>
                    <div className="space-y-2 mt-2">
                      {
                        tasks[section.slug].map((task, i) => (
                          <TaskCard key={task.id} task={task} index={i} />
                        ))
                      }
                    </div>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))
          }
        </div>
      </DragDropContext>
    </div>
  );
}

export default Board
