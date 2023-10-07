import { useParams } from 'react-router-dom'
import { getQuestionService } from '@/api'

export function useLoadQuestionData() {
  const { id = '' } = useParams()
  const [loading, setLoading] = useState(true)
  const [questionData, setQuestionData] = useState({})

  useEffect(() => {
    async function fn() {
      const data = await getQuestionService(id)
      setQuestionData(data)
      setLoading(false)
      console.log('edit page data', data)
    }
    fn()
  }, [id])

  return { loading, questionData }
}
