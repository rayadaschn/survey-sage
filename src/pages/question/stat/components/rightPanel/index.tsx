import { FC } from 'react'
import { Typography } from 'antd'
import { getComponentStatService } from '@/api'
import { getComponentConfByType } from '@/components/QuestionComponents'

const { Title } = Typography

interface PropsType {
  selectedComponentId: string
  selectedComponentType: string
}

const StatContainerRight: FC<PropsType> = (props: PropsType) => {
  const { selectedComponentId, selectedComponentType } = props
  const { id = '' } = useParams()

  const [stat, setStat] = useState([])
  const { run } = useRequest(
    async (questionId, componentId) =>
      await getComponentStatService(questionId, componentId),
    {
      manual: true,
      onSuccess(res) {
        setStat(res.stat)
      },
    },
  )

  useEffect(() => {
    if (selectedComponentId) run(id, selectedComponentId)
  }, [id, selectedComponentId])

  // 生成统计图表
  const genStatElem = () => {
    if (!selectedComponentId) return <div>暂未选中组件</div>

    const { StatComponent } =
      getComponentConfByType(selectedComponentType) || {}
    if (StatComponent == null) return <div>该组件暂无统计图表</div>

    return <StatComponent stat={stat} />
  }

  return (
    <>
      <Title level={3}>图表统计</Title>
      <div>{genStatElem()}</div>
    </>
  )
}

export default StatContainerRight
