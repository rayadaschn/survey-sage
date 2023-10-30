import SortableContainer from '@/components/DragSortable/components/SortableContainer'
import SortableItem from '@/components/DragSortable/components/SortableItem'
import { getComponentConfByType } from '@/components/QuestionComponents'
import { useBindKeyPress, useGetComponentInfo } from '@/hooks'
import {
  ComponentInfoType,
  changeSelectedId,
  moveComponent,
} from '@/store/modules/componentsReducer'
import { Spin } from 'antd'
import classNames from 'classnames'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

interface PropsType {
  loading: boolean
}

const EditCenterPanel: FC<PropsType> = ({ loading }) => {
  const { componentList, selectedIs } = useGetComponentInfo()
  const dispatch = useDispatch()
  // 绑定快捷键
  useBindKeyPress()

  // 检测是否正在加载
  if (loading) {
    return (
      <div className="mt-6 text-center">
        <Spin />
      </div>
    )
  }

  /** 点击组件，选中 */
  const handleClick = (event: MouseEvent, id: string) => {
    event.stopPropagation() // 阻止冒泡
    dispatch(changeSelectedId(id))
  }

  /** 生成组件 */
  const genComponent = (componentInfo: ComponentInfoType) => {
    const { type, props } = componentInfo
    const componentConf = getComponentConfByType(type)
    if (componentConf == null) return null

    const { Component } = componentConf
    return <Component {...props} />
  }

  /** 添加拖拽，组件需要 id */
  const componentListWithId = componentList.map((item) => {
    return { ...item, id: item.fe_id }
  })

  /** 拖拽结束 */
  const onDragEnd = (oldIndex: number, newIndex: number) => {
    dispatch(moveComponent({ oldIndex, newIndex })) // 更新序列
  }

  return (
    <SortableContainer items={componentListWithId} onDragEnd={onDragEnd}>
      <div className="min-h-[100%] overflow-hidden bg-white">
        {componentList.map((item) => {
          const { fe_id } = item

          const wrapperDefaultClassName =
            'm-3 border border-white rounded-sm border-solid p-3 hover:border-gray-200'
          const wrapperName = classNames({ [wrapperDefaultClassName]: true })

          return (
            <SortableItem key={fe_id} id={fe_id}>
              <div
                className={wrapperName}
                onClick={(e) => handleClick(e, fe_id)}
              >
                <div className="pointer-events-none">{genComponent(item)}</div>
              </div>
            </SortableItem>
          )
        })}
      </div>
    </SortableContainer>
  )
}

export default EditCenterPanel
