import { useGetPageInfo } from '@/hooks'
import { CopyOutlined, LeftOutlined, QrcodeOutlined } from '@ant-design/icons'
import { Button, Input, InputRef, Popover, QRCode, Space, Tooltip } from 'antd'
import { FC } from 'react'

const StatHeader: FC = () => {
  const nav = useNavigate()
  const { title } = useGetPageInfo()
  const { id } = useParams()
  const urlInputRef = useRef<InputRef>(null) // copy url

  const handleBack = () => {
    nav(-1)
  }
  const handleEdit = () => {
    nav(`/question/edit/${id}`)
  }

  /** Header main */
  const LinkAndQRCodeElem = useMemo(() => {
    // if (!isPublished) return null
    const url = `http://localhost:5173/survey-sage/question/${id}`

    const handleCopy = () => {
      const inputElem = urlInputRef.current
      if (inputElem == null) return

      inputElem.select() // select input text
      try {
        navigator.clipboard.writeText(url) // Copies text to the clipboard
        console.log('The text has been copied to the clipboard')
      } catch (err) {
        console.error('Unable to copy text to the clipboard', err)
      }
    }

    // define QRCode
    const QRCodeElem = (
      <div className="text-center">
        <QRCode value={url || '-'} />
      </div>
    )

    return (
      <Space>
        <Input value={url} style={{ width: '300px' }} ref={urlInputRef} />
        <Tooltip title="拷贝链接">
          <Button icon={<CopyOutlined />} onClick={handleCopy} />
        </Tooltip>
        <Popover content={QRCodeElem}>
          <Button icon={<QrcodeOutlined />} />
        </Popover>
      </Space>
    )
  }, [id])

  return (
    <div className="border-coolGray border-b-solid bg-white py-3">
      <div className="mx-6 flex">
        <div className="flex-1">
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={handleBack}>
              返回
            </Button>
            <span className="text-5 line-height-none">{title}</span>
          </Space>
        </div>
        <div className="flex-1 text-center">{LinkAndQRCodeElem}</div>
        <div className="flex-1 text-right">
          <Button type="primary" onClick={handleEdit}>
            编辑问卷
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StatHeader
