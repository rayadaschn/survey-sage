import { RouterProvider } from 'react-router-dom'
import router from './router'

import { ConfigProvider, theme } from 'antd'

const App = () => {
  return (
    <ConfigProvider
      theme={{
        // algorithm: theme.darkAlgorithm,
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  )
}

export default App
