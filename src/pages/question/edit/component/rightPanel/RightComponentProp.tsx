import {
  ComponentPropsType,
  getComponentConfByType,
} from '@/components/QuestionComponents'
import { useGetComponentInfo } from '@/hooks'
import { changeComponentProps } from '@/store/modules/componentsReducer'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

const NoProp: FC = () => {
  return <div className="text-center">未选中组件</div>
}

const RightComponentProp: FC = () => {
  const dispatch = useDispatch()

  const { selectedComponent } = useGetComponentInfo()

  if (selectedComponent == null) return <NoProp />

  const { type, props } = selectedComponent
  const componentConf = getComponentConfByType(type)
  if (componentConf == null) return <NoProp />

  const changeProps = (newProps: ComponentPropsType) => {
    const { fe_id } = selectedComponent
    dispatch(changeComponentProps({ fe_id, newProps }))
  }

  const { PropComponent } = componentConf

  return <PropComponent {...props} onChange={changeProps} />
}

export default RightComponentProp
