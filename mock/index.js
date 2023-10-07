const Koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors') // 引入 koa2-cors 中间件
const mockList = require('./services/index')

const app = new Koa()
const router = new Router()

async function getRes(fn, ctx) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = fn(ctx)
      resolve(res)
    }, 1000)
  })
}

// 使用 CORS 中间件来允许跨域请求
app.use(cors())

// 注册 mock 路由
mockList.forEach((item) => {
  const { url, method, response } = item
  router[method](url, async (ctx) => {
    // const res = response()
    const res = await getRes(response, ctx) // 模拟网络请求的加载状态，1s
    ctx.body = res // 输入结果
  })
})

app.use(router.routes())
app.listen(3001) // port 端口
