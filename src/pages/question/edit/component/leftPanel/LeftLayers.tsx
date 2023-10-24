import { useGetComponentInfo } from '@/hooks'
import {
  changeComponentTitle,
  changeSelectedId,
} from '@/store/modules/componentsReducer'
import { Input, message } from 'antd'
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

  return (
    <>
      {componentList.map((c) => {
        const { fe_id, title, isHidden, isLocked } = c
        const titleDefaultClassName = 'flex-auto line-height-loose'
        const selectedClassName = 'color-blue'
        const titleClassName = classNames({
          [titleDefaultClassName]: true,
          [selectedClassName]: fe_id === selectedId,
        })

        return (
          <div
            key={fe_id}
            className="flex border-b border-b-green-200 border-b-solid py-2"
          >
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
            <div className="w-12 text-end">按钮</div>
          </div>
        )
      })}
    </>
  )
}

export default LeftLayers
