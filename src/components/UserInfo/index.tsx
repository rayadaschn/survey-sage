import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_PATHNAME } from '@/router'
import { removeToken } from '@/utils'
import { Button, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useGetUserInfo } from '@/hooks'
import { logoutReducer } from '@/store/modules/userReducer'
import { useDispatch } from 'react-redux'

const UserInfo: FC = () => {
  const nav = useNavigate()
  const dispatch = useDispatch()

  // const { data } = useRequest(getUserInfoService) // ajax
  // const { username, nickname } = data || {}
  const { username, nickname } = useGetUserInfo() // 从 redux 中获取用户信息

  function logout() {
    dispatch(logoutReducer())

    removeToken()
    message.success('退出成功')
    nav(LOGIN_PATHNAME)
  }

  const UserInfo = (
    <>
      <span className="color-light">
        <UserOutlined />
        {nickname}
      </span>
      <Button type="link" onClick={logout}>
        退出
      </Button>
    </>
  )

  const Login = <Link to={LOGIN_PATHNAME}>登录</Link>

  return <>{username ? UserInfo : Login}</>
}

export default UserInfo
