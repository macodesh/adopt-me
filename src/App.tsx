import { SearchParams } from './pages/SearchParams'
import { Routes, Route, Link } from 'react-router-dom'
import { DetailsErrorBoundary } from './pages/Details'

export function App(): JSX.Element {
  return (
    <>
      <header>
        <Link to={'/'}>Adopt Me!</Link>
      </header>
      <Routes>
        <Route
          path="/details/:id"
          element={<DetailsErrorBoundary />}
        />
        <Route
          path="/"
          element={<SearchParams />}
        />
      </Routes>
    </>
  )
}
