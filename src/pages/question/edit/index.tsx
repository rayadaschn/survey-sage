import React, { FC } from 'react'
import { useLoadQuestionData } from '@/hooks'
import { useGetPageInfo } from '@/hooks/useGetPageInfo'
import EditHeader from './component/EditHeader'
import EditLeftPanel from './component/EditLeftPanel'
import EditCenterPanel from './component/EditCenterPanel'
import EditRightPanel from './component/EditRightPanel'

const Edit: FC = () => {
  const { loading, questionData } = useLoadQuestionData()

  const { title } = useGetPageInfo()
  useTitle(`问卷编辑 - ${title}`)

  return (
    <div>
      <EditHeader />
      <div>
        <div>
          <EditLeftPanel />
        </div>
        <div>
          <EditCenterPanel />
        </div>
        <div>
          <EditRightPanel />
        </div>
      </div>
    </div>
  )
}

export default Edit
