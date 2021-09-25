import { Draggable, DraggableProvided } from "react-beautiful-dnd"
import Epic from "types/Epic"
import Task from "types/Task"
import epics from '../data/epics.json'

const TaskCard = ({ task, index }: { task: Task, index: number }) => {

    const epic = (id: number): Epic => {
        return epics.find(epic => epic.id === id) as Epic
    }

    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided: DraggableProvided) => (
                <div draggable="true" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
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
                </div>
            )}
        </Draggable>
    )
}

export default TaskCard
