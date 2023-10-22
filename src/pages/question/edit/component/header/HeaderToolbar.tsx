import { useGetComponentInfo } from '@/hooks'
import {
  changeComponentHidden,
  copySelectedComponent,
  moveComponent,
  pasteCopiedComponent,
  removeSelectedComponent,
  toggleComponentLocked,
} from '@/store/modules/componentsReducer'
import {
  BlockOutlined,
  CopyOutlined,
  DeleteOutlined,
  DownOutlined,
  EyeInvisibleOutlined,
  LockOutlined,
  RedoOutlined,
  UndoOutlined,
  UpOutlined,
} from '@ant-design/icons'
import { Button, Space, Tooltip } from 'antd'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { ActionCreators as UndoActionCreators } from 'redux-undo'

enum Type {
  default = 'default',
  primary = 'primary',
  link = 'link',
  text = 'text',
  dashed = 'dashed',
  undefined = 'undefined',
}

enum Shape {
  default = 'default',
  circle = 'circle',
  round = 'round',
}

const HeaderToolbar: FC = () => {
  const dispatch = useDispatch()
  const { selectedId, componentList, selectedComponent, copiedComponent } =
    useGetComponentInfo()
  const selectedIndex = componentList.findIndex((c) => c.fe_id === selectedId)
  const isFirst = selectedIndex <= 0
  const isLast = selectedIndex + 1 >= componentList.length
  const lockType: Type = selectedComponent?.isLocked
    ? Type.primary
    : Type.default

  const buttonList = [
    {
      title: '删除',
      shape: Shape.circle,
      icon: <DeleteOutlined />,
      onClick: () => {
        dispatch(removeSelectedComponent()) // 删除组件
      },
    },
    {
      title: '隐藏',
      shape: Shape.circle,
      icon: <EyeInvisibleOutlined />,
      onClick: () => {
        dispatch(changeComponentHidden({ fe_id: selectedId, isHidden: true })) // 隐藏组件
      },
    },
    {
      title: '锁定',
      type: lockType,
      shape: Shape.circle,
      icon: <LockOutlined />,
      onClick: () => {
        dispatch(toggleComponentLocked({ fe_id: selectedId }))
      },
    },
    {
      title: '复制',
      shape: Shape.circle,
      icon: <CopyOutlined />,
      onClick: () => {
        dispatch(copySelectedComponent())
      },
    },
    {
      title: '粘贴',
      shape: Shape.circle,
      icon: <BlockOutlined />,
      onClick: () => {
        dispatch(pasteCopiedComponent())
      },
      disabled: copiedComponent == null,
    },
    {
      title: '上移',
      shape: Shape.circle,
      icon: <UpOutlined />,
      onClick: () => {
        if (isFirst) return
        dispatch(
          moveComponent({
            oldIndex: selectedIndex,
            newIndex: selectedIndex - 1,
          }),
        )
      },
      disabled: isFirst,
    },
    {
      title: '下移',
      shape: Shape.circle,
      icon: <DownOutlined />,
      onClick: () => {
        if (isLast) return
        dispatch(
          moveComponent({
            oldIndex: selectedIndex,
            newIndex: selectedIndex + 1,
          }),
        )
      },
      disabled: isLast,
    },
    {
      title: '撤销',
      shape: Shape.circle,
      icon: <UndoOutlined />,
      onClick: () => {
        dispatch(UndoActionCreators.undo())
      },
    },
    {
      title: '重做',
      shape: Shape.circle,
      icon: <RedoOutlined />,
      onClick: () => {
        dispatch(UndoActionCreators.redo())
      },
    },
  ]
  return (
    <Space>
      {buttonList.map((c) => {
        const { title, type, shape, icon, onClick, disabled } = c
        return (
          <Tooltip key={title} title={title}>
            <Button
              type={type}
              shape={shape}
              icon={icon}
              onClick={onClick}
              disabled={disabled}
            />
          </Tooltip>
        )
      })}
    </Space>
  )
}

export default HeaderToolbar
