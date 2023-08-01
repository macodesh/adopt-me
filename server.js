import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import renderApp from './dist/server/ServerApp.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// eslint-disable-next-line no-undef
const port = process.env.PORT ?? 3001
const html = await fs.readFile(
  path.resolve(__dirname, 'dist/client/index.html'),
  'utf-8'
)
const parts = html.split('<!-- Split point -->')
const app = express()

app.use(
  '/assets',
  // eslint-disable-next-line import/no-named-as-default-member
  express.static(path.resolve(__dirname, 'dist/client/assets'))
)

app.use((req, res) => {
  res.write(parts[0])

  const stream = renderApp(req.url, {
    onShellReady() {
      // Se for um crawler, não precisa de stream
      stream.pipe(res)
    },
    onShellError(e) {
      console.error('Error ocurred', e)
    },
    onAllReady() {
      // Se for um crawler
      // stream.pipe(res)
      res.write(parts[1])
      res.end()
    },
    onError(error, errorInfo) {
      console.error('Error ocurred', error, errorInfo)
    }
  })
})

app.listen(port, () => {
  console.log(`Server listening on http:/localhost:${port}`)
})
