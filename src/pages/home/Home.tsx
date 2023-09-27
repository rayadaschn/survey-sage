import React, { FC } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Home: FC = () => {
  const nav = useNavigate()

  function clickHandle() {
    nav({
      pathname: '/login',
      search: 'b=100',
    })
  }
  return (
    <div>
      <p>Home</p>
      <div>
        <button onClick={clickHandle}>登录</button>
        <Link to="/register">注册</Link>
      </div>
    </div>
  )
}

export default Home
