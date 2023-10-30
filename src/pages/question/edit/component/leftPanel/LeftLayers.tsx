import SortableContainer from '@/components/DragSortable/components/SortableContainer'
import SortableItem from '@/components/DragSortable/components/SortableItem'
import { useGetComponentInfo } from '@/hooks'
import {
  changeComponentHidden,
  changeComponentTitle,
  changeSelectedId,
  moveComponent,
  toggleComponentLocked,
} from '@/store/modules/componentsReducer'
import { EyeInvisibleOutlined, LockOutlined } from '@ant-design/icons'
import { Button, Input, Space, message } from 'antd'
import classNames from 'classnames'
import React, { ChangeEvent, FC } from 'react'
import { useDispatch } from 'react-redux'

const LeftLayers: FC = () => {
  const { componentList, selectedId } = useGetComponentInfo() // 获取当前组件信息
  const dispatch = useDispatch()

  /** 记录当前修改组件 */
  const [changingTitleId, setChangingTitleId] = useState('')

  /** 点击选中组件 */
  const handleTitleClick = (fe_id: string) => {
    const currentCom = componentList.find((c) => c.fe_id === fe_id)
    if (currentCom && currentCom.isHidden) {
      return message.info('不能选中隐藏的组件!')
    }
    if (fe_id !== selectedId) {
      // 当前组件未被选中，执行选中
      dispatch(changeSelectedId(fe_id))
      setChangingTitleId('')
      return
    }

    // 点击修改标题
    setChangingTitleId(fe_id)
  }

  /** 修改标题 */
  const changeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value.trim()
    if (!newTitle || !selectedId) return
    dispatch(changeComponentTitle({ fe_id: selectedId, title: newTitle }))
  }

  /** 切换显示/隐藏 */
  const toggleHidden = (fe_id: string, isHidden: boolean) => {
    dispatch(changeComponentHidden({ fe_id, isHidden }))
  }

  /** 切换锁定/解锁 */
  const toggleLocked = (fe_id: string) => {
    dispatch(toggleComponentLocked({ fe_id }))
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
      {componentList.map((c) => {
        const { fe_id, title, isHidden, isLocked } = c
        const titleDefaultClassName = 'flex-auto line-height-loose'
        const selectedClassName = 'color-blue'
        const titleClassName = classNames({
          [titleDefaultClassName]: true,
          [selectedClassName]: fe_id === selectedId,
        })
        const isShowName = 'opacity-20'
        const hiddenButtonClassName = classNames({
          [isShowName]: isHidden,
        })
        const clockButtonClassName = classNames({
          [isShowName]: isHidden,
        })

        return (
          <SortableItem key={fe_id} id={fe_id}>
            <div className="flex border-b border-b-green-200 border-b-solid py-2">
              <div
                className={titleClassName}
                onClick={() => handleTitleClick(fe_id)}
              >
                {fe_id === changingTitleId && (
                  <Input
                    value={title}
                    onChange={changeTitle}
                    onPressEnter={() => setChangingTitleId('')}
                    onBlur={() => setChangingTitleId('')}
                  />
                )}
                {fe_id !== changingTitleId && title}
              </div>
              <div className="w-12 text-end">
                <Space>
                  <Button
                    size="small"
                    shape="circle"
                    className={hiddenButtonClassName}
                    icon={<EyeInvisibleOutlined />}
                    type={isHidden ? 'primary' : 'text'}
                    onClick={() => toggleHidden(fe_id, !isHidden)}
                  />
                  <Button
                    size="small"
                    shape="circle"
                    className={clockButtonClassName}
                    icon={<LockOutlined />}
                    type={isLocked ? 'primary' : 'text'}
                    onClick={() => toggleLocked(fe_id)}
                  />
                </Space>
              </div>
            </div>
          </SortableItem>
        )
      })}
    </SortableContainer>
  )
}

export default LeftLayers
