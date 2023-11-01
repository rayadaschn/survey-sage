import {
  ComponentConfType,
  componentConfGroup,
} from '@/components/QuestionComponents'
import { Typography } from 'antd'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { addComponent } from '@/store/modules/componentsReducer'

const { Title } = Typography

/** 生成组件 */
const generateComponent = (item: ComponentConfType) => {
  const { title, type, Component, defaultProps } = item
  const dispatch = useDispatch()

  const handleClick = useCallback(() => {
    dispatch(
      addComponent({
        fe_id: nanoid(), // 前端生成的 id
        title,
        type,
        props: defaultProps,
      }),
    )
  }, [])

  return (
    <div
      key={type}
      onClick={handleClick}
      className="mb-3 cursor-pointer border border-light rounded border-solid bg-light p-3 hover:border-[#d9d9d9]"
    >
      <div className="pointer-events-none">
        <Component />
      </div>
    </div>
  )
}

const LeftComponentLib: FC = () => {
  return (
    <>
      {componentConfGroup.map((group, index) => {
        const { groupId, groupName, components } = group

        return (
          <div key={groupId}>
            <Title
              level={3}
              style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0' }}
            >
              {groupName}
            </Title>
            <div>{components.map((item) => generateComponent(item))}</div>
          </div>
        )
      })}
    </>
  )
}

export default LeftComponentLib
