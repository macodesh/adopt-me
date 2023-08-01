import {
  PipeableStream,
  renderToPipeableStream,
  RenderToPipeableStreamOptions
} from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'

export default function render(
  url: string,
  options?: RenderToPipeableStreamOptions
): PipeableStream {
  return renderToPipeableStream(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>,
    options
  )
}
