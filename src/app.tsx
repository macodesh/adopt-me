import { Link, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import SearchParams from './pages/searchParams'

const Details = lazy(() => import('./pages/details'))

export default function App(): JSX.Element {
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
