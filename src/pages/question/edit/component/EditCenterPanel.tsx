import QuestionTitle from '@/components/QuestionComponents/QuestionTitle/Component'
import PropComponent from '@/components/QuestionComponents/QuestionTitle/PropComponent'
import { useGetComponentInfo } from '@/hooks'
import { Spin } from 'antd'
import React, { FC } from 'react'

interface PropsType {
  loading: boolean
}

const EditCenterPanel: FC<PropsType> = ({ loading }) => {
  // 检测是否正在加载
  if (loading) {
    return (
      <div className="mt-6 text-center">
        <Spin />
      </div>
    )
  }

  // const { componentList } = useGetComponentInfo()

  return (
    <>
      <div>
        <div>
          <div>
            <QuestionTitle />
          </div>
        </div>
        <div>
          <div>
            <PropComponent />
          </div>
        </div>
      </div>
    </>
  )
}

export default EditCenterPanel
