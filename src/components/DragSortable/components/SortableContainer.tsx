import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { FC } from 'react'

interface PropsType {
  children: JSX.Element | JSX.Element[]
  items: Array<{ id: string; [key: string]: any }>
  onDragEnd: (oldIndex: number, newIndex: number) => void
}

/** 拖拽容器 */
const SortableContainer: FC<PropsType> = (props: PropsType) => {
  const { children, items, onDragEnd } = props

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        // 活动限制
        distance: 8, // 8px
      },
    }),
  )

  /** 拖拽结束事件 */
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (over == null) return

    if (active.id !== over.id) {
      const oldIndex = items.findIndex((c) => c.fe_id === active.id)
      const newIndex = items.findIndex((c) => c.fe_id === over.id)
      onDragEnd(oldIndex, newIndex)
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  )
}

export default SortableContainer
