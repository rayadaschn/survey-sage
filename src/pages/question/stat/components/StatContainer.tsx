import { FC } from 'react'
import StatContainerLeft from './leftPanel'
import StatContainerCenter from './centerPanel'
import StatContainerRight from './rightPanel'

const StatContainer: FC = () => {
  // 状态提升 selectedId type
  const [selectedComponentId, setSelectedComponentId] = useState('')
  const [selectedComponentType, setSelectedComponentType] = useState('')

  return (
    <div className="mx-6 h-full flex">
      <div className="w-73 bg-white px-3">
        <StatContainerLeft
          selectedComponentId={selectedComponentId}
          setSelectedComponentId={setSelectedComponentId}
          setSelectedComponentType={setSelectedComponentType}
        />
      </div>
      <div className="relative mx-3 flex-1 overflow-hidden">
        <StatContainerCenter
          selectedComponentId={selectedComponentId}
          setSelectedComponentId={setSelectedComponentId}
          setSelectedComponentType={setSelectedComponentType}
        />
      </div>
      <div className="w-75 bg-white px-3">
        <StatContainerRight
          selectedComponentId={selectedComponentId}
          selectedComponentType={selectedComponentType}
        />
      </div>
    </div>
  )
}

export default StatContainer
