import { Link, Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import SearchParams from './pages/SearchParams'

// Importando o componente 'Details' de forma preguiçosa (lazy loading).
const Details = lazy(() => import('./pages/Details'))

// Componente principal da aplicação.
export default function App(): JSX.Element {
  return (
    <div>
      {/* Cabeçalho contendo um link para a página inicial. */}
      <header>
        <Link to={'/'}>Adopt Me!</Link>
      </header>

      {/* Definindo as rotas da aplicação usando o componente 'Routes'. */}
      <Routes>
        {/* Rota para exibir detalhes de um pet, usando o componente 'Details'. */}
        <Route
          path="/details/:id" // Rota dinâmica com um parâmetro ':id'.
          element={<Details />} // Componente a ser renderizado quando a rota é correspondida.
        />

        {/* Rota padrão para a página de pesquisa de animais para adoção. */}
        <Route
          path="/" // Rota raiz (página inicial).
          element={<SearchParams />}
        />
      </Routes>
    </div>
  )
}
