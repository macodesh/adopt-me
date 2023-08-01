import { Link, Route, Routes } from 'react-router-dom'
import './index.css'
import { lazy, Suspense } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AdoptedPetProvider from './context/AdoptedPetProvider'

const Details = lazy(() => import('./pages/Details'))
const SearchParams = lazy(() => import('./pages/SearchParams'))

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
      // suspense: true
    }
  }
})

export default function App(): JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <AdoptedPetProvider>
        <Suspense
          fallback={
            <div className="loading-pane">
              <h2 className="loader">🐶</h2>
            </div>
          }
        >
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
        </Suspense>
      </AdoptedPetProvider>
    </QueryClientProvider>
  )
}
