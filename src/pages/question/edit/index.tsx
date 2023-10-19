import React, { FC } from 'react'
import { useLoadQuestionData, useGetPageInfo } from '@/hooks'
import EditHeader from './component/EditHeader'
import EditLeftPanel from './component/EditLeftPanel'
import EditCenterPanel from './component/EditCenterPanel'
import EditRightPanel from './component/EditRightPanel'

const Edit: FC = () => {
  const { loading } = useLoadQuestionData()

  const { title } = useGetPageInfo()
  useTitle(`问卷编辑 - ${title}`)

  return (
    <div className="h-screen flex flex-col bg-[#f0f2f5]">
      <EditHeader />
      <div className="flex-1 py-3">
        <div className="mx-6 h-100% flex">
          <div className="w-75 bg-white px-3">
            <EditLeftPanel />
          </div>

          <div className="relative flex-1 overflow-hidden">
            <div className="absolute left-1/2 top-1/2 h-178 w-100 flex transform items-center justify-center overflow-auto shadow-2xl -translate-x-1/2 -translate-y-1/2">
              <EditCenterPanel loading={loading} />
            </div>
          </div>

          <div className="w-75 bg-white px-3">
            <EditRightPanel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
