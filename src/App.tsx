import { Routes, Route, Link } from 'react-router-dom'
import { lazy } from 'react'

const Details = lazy(() => import('./pages/Details'))
const SearchParams = lazy(() => import('./pages/SearchParams'))

export function App(): JSX.Element {
  return (
    <div
      className="m-0 p-0"
      style={{
        background: 'url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)'
      }}
    >
      <header className="mb-10 w-full bg-gradient-to-b from-yellow-400 via-orange-500 to-red-500 p-7 text-center">
        <Link
          className="text-6xl text-white hover:text-gray-200"
          to={'/'}
        >
          Adopt Me!
        </Link>
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
