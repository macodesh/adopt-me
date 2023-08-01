import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import renderApp from './ServerApp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const html = fs.readFileSync(
  path.resolve(__dirname, `../client/index.html`),
  'utf-8'
)
const parts = html.split('<!-- Split point -->')

const app = express()

app.use(
  '/assets',
  // eslint-disable-next-line import/no-named-as-default-member
  express.static(path.resolve(__dirname, `../client/assets`))
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

const port = process.env.PORT ?? 5173
app.listen(port, () => {
  console.log(`Server listening on http:/localhost:${port}`)
})
