import { getComponentConfByType } from '@/components/QuestionComponents'
import { useGetComponentInfo } from '@/hooks'
import classNames from 'classnames'
import { FC } from 'react'

interface PropsType {
  selectedComponentId: string
  setSelectedComponentId: (id: string) => void
  setSelectedComponentType: (type: string) => void
}

const StatContainerLeft: FC<PropsType> = (props) => {
  const {
    selectedComponentId,
    setSelectedComponentId,
    setSelectedComponentType,
  } = props
  const { componentList } = useGetComponentInfo()

  return (
    <div className="min-h-full overflow-y-auto bg-white">
      {componentList
        .filter((c) => !c.isHidden) // 过滤隐藏的组件
        .map((c) => {
          const { fe_id, props, type } = c

          const componentConf = getComponentConfByType(type)
          if (componentConf == null) return null

          const { Component } = componentConf

          // 拼接 class name
          const wrapperDefaultClassName =
            'm-3 border-solid border-white px-2 py-3 b-rounded hover:border-blueGray'
          const selectedClassName = 'border-gray'
          const wrapperClassName = classNames({
            [wrapperDefaultClassName]: true,
            [selectedClassName]: fe_id === selectedComponentId, // 是否选中
          })

          return (
            <div
              className={wrapperClassName}
              key={fe_id}
              onClick={() => {
                setSelectedComponentId(fe_id)
                setSelectedComponentType(type)
              }}
            >
              <div className="pointer-events-none opacity-[0.8]">
                <Component {...props} />
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default StatContainerLeft
