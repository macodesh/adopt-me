import { Routes, Route, Link } from 'react-router-dom'
import { lazy } from 'react'
import SearchParams from './pages/SearchParams'

const Details = lazy(() => import('./pages/Details'))

export function App(): JSX.Element {
  return (
    <div>
      <header>
        <Link to={'/'}>Adopt Me!</Link>
      </header>
      <Routes>
        <Route
          path="/details/:id"
          element={<Details />}
        />
        <Route
          path="/"
          element={<SearchParams />}
        />
      </Routes>
    </div>
  )
}
