import {
  ComponentConfType,
  componentConfGroup,
} from '@/components/QuestionComponents'
import { addComponent } from '@/store/modules/componentsReducer'
import { nanoid } from '@reduxjs/toolkit'
import { Typography } from 'antd'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

const { Title } = Typography

const genComponent = (c: ComponentConfType) => {
  const { title, type, Component, defaultProps } = c
  const dispatch = useDispatch()

  const handleClick = useCallback(() => {
    dispatch(
      addComponent({
        fe_id: nanoid(),
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
      className="mb-3 cursor-pointer rounded border-solid bg-white p-3 hover:border-cyan"
    >
      <div className="pointer-events-none">
        <Component />
      </div>
    </div>
  )
}

const ComponentLib: FC = () => {
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

            <div>{components.map((c) => genComponent(c))}</div>
          </div>
        )
      })}
    </>
  )
}

export default ComponentLib
