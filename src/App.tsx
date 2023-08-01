import { Routes, Route, Link } from 'react-router-dom'
import { lazy } from 'react'

const Details = lazy(() => import('./pages/Details'))
const SearchParams = lazy(() => import('./pages/SearchParams'))

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
