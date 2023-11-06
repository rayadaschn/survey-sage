import { FC } from 'react'
import StatContainerLeft from './StatContainerLeft'
import StatContainerCenter from './StatContainerCenter'
import StatContainerRight from './StatContainerRight'

const StatContainer: FC = () => {
  return (
    <div className="mx-6 h-full flex">
      <div className="w-73 bg-white px-3">
        <StatContainerLeft />
      </div>
      <div className="relative flex-1 overflow-hidden">
        <StatContainerCenter />
      </div>
      <div className="w-75 bg-white px-3">
        <StatContainerRight />
      </div>
    </div>
  )
}

export default StatContainer
