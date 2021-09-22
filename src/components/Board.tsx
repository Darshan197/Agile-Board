import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import sections from '../data/sections.json';
import Section from './Section';

const Board = () => {

  const onDragEnd = (result: DropResult) => {
    console.log(result)
  }

  return (
    <div className="overflow-auto flex-1">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className={`grid grid-flow-col space-x-2 ${'grid-cols-' + sections.length}`}>
          {
            sections.map((section) => (
              <Section key={section.slug} section={section} />
            ))
          }
        </div>
      </DragDropContext>
    </div>
  );
}

export default Board
