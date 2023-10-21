import { getComponentConfByType } from '@/components/QuestionComponents'
import { useGetComponentInfo } from '@/hooks'
import { ComponentInfoType } from '@/store/modules/componentsReducer'
import { Spin } from 'antd'
import classNames from 'classnames'
import React, { FC } from 'react'

interface PropsType {
  loading: boolean
}

const EditCenterPanel: FC<PropsType> = ({ loading }) => {
  const { componentList } = useGetComponentInfo()

  // 检测是否正在加载
  if (loading) {
    return (
      <div className="mt-6 text-center">
        <Spin />
      </div>
    )
  }

  const genComponent = (componentInfo: ComponentInfoType) => {
    const { type, props } = componentInfo
    const componentConf = getComponentConfByType(type)
    if (componentConf == null) return null

    const { Component } = componentConf
    return <Component {...props} />
  }

  return (
    <div className="min-h-[100%] overflow-hidden bg-white">
      {componentList.map((item) => {
        const { fe_id } = item

        const wrapperdefaultClassName =
          'm-3 border border-white rounded-sm border-solid p-3 hover:border-gray-200'
        const wrapperName = classNames({ [wrapperdefaultClassName]: true })

        return (
          <div key={fe_id} className={wrapperName}>
            <div className="pointer-events-none">{genComponent(item)}</div>
          </div>
        )
      })}
    </div>
  )
}

export default EditCenterPanel
