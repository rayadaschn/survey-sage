import React, { FC } from 'react'
import { useLoadQuestionData, useGetPageInfo } from '@/hooks'
import EditHeader from './components/header'
import EditLeftPanel from './components/leftPanel'
import EditCenterPanel from './components/centerPanel'
import EditRightPanel from './components/rightPanel'
import { useDispatch } from 'react-redux'
import { changeSelectedId } from '@/store/modules/componentsReducer'

const Edit: FC = () => {
  const dispatch = useDispatch()
  const { loading } = useLoadQuestionData()

  const { title } = useGetPageInfo()
  const pageTitle = title ? `问卷编辑 - ${title}` : '问卷调查'
  useTitle(pageTitle)

  /** 清空选择 */
  const clearSelectedId = () => {
    dispatch(changeSelectedId(''))
  }

  return (
    <div className="h-screen flex flex-col bg-[#f0f2f5]">
      <EditHeader />
      <div className="flex-1 py-3">
        <div className="mx-6 h-100% flex">
          <div className="w-75 bg-white px-3">
            <EditLeftPanel />
          </div>

          <div
            className="relative flex-1 overflow-hidden"
            onClick={clearSelectedId}
          >
            <div className="absolute left-1/2 top-1/2 h-178 w-150 transform items-center justify-center overflow-auto shadow-2xl -translate-x-1/2 -translate-y-1/2">
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
