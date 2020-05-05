import sirv from 'sirv'
import polka from 'polka'
import compression from 'compression'
import * as sapper from '@sapper/server'
import { api_url, sitemap_url } from './config'
const dotenv = require('dotenv')
dotenv.config({ path: '.env' })
const { PORT, NODE_ENV } = process.env
const { createProxyMiddleware } = require('http-proxy-middleware')
const apiProxy = createProxyMiddleware('/api', {
  changeOrigin: true,
  target: api_url,
})
const sitemapProxy = createProxyMiddleware('/sitemap-lessons.xml', {
  target: sitemap_url,
  changeOrigin: true,
})

const dev = NODE_ENV === 'development'
const app = polka().use(
  apiProxy,
  sitemapProxy,
  compression({ threshold: 0 }),
  sirv('static', { dev }),
  sapper.middleware()
)
app.listen(PORT, (err) => {
  if (err) console.log('error', err)
})

export default app.handler
