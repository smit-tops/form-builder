import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

interface Item {
  id: string
  content: string
  type: string
}

const App: React.FC = () => {
  const initialSourceItems: Item[] = [
    { id: '1', content: 'Item 1', type: 'source' },
    { id: '2', content: 'Item 2', type: 'source' },
    { id: '3', content: 'Item 3', type: 'source' },
  ]

  const [sourceItems, setSourceItems] = useState<Item[]>(initialSourceItems)
  const [destinationItems, setDestinationItems] = useState<Item[]>([])

  const onDragEnd = (result: any) => {
    const { source, destination } = result

    if (!destination) {
      return // Dragged outside the list, do nothing
    }

    const draggedItem = sourceItems[source.index]
    const newSourceItems = [...sourceItems]
    newSourceItems.splice(source.index, 1) // Remove the item from the source list
    setSourceItems(newSourceItems)

    // Add the dragged item to the destination list
    setDestinationItems([...destinationItems, draggedItem])
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <h2>Source List</h2>
        <Droppable droppableId="sourceList" isDropDisabled={true}>
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {sourceItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      {item.content}
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
      </div>
      <div>
        <h2>Destination List</h2>
        <Droppable droppableId="destinationList">
          {(provided) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {destinationItems.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided) => (
                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      {item.content}
                    </li>
                  )}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  )
}

export default App
