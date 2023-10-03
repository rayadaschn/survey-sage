import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import { getQuestionService } from '@/services'

const Edit: FC = () => {
  const { id = '' } = useParams()

  useEffect(() => {
    async function fn() {
      const data = await getQuestionService(id)
      console.log('edit page data', data)
    }
    fn()
  }, [id])

  return <div>Edit {id}</div>
}

export default Edit
