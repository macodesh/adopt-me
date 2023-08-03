// Importando os módulos necessários do React e de outras bibliotecas.
import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App.tsx'
import AdoptedPetProvider from './context/AdoptedPetProvider'
import './index.css'

// Criando uma instância do QueryClient com configurações padrão.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})

// Renderizando a aplicação na raiz do elemento com o id 'root'.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Configurando o roteamento usando BrowserRouter. */}
    <BrowserRouter>
      {/* Provedor global do QueryClient para gerenciar estado e dados. */}
      <QueryClientProvider client={queryClient}>
        {/* Provedor personalizado para dados de adoção de animais. */}
        <AdoptedPetProvider>
          {/* Exibindo um fallback enquanto os dados são carregados em Suspense. */}
          <Suspense
            fallback={
              <div className="loading-pane">
                <h2 className="loader">🐶</h2>
              </div>
            }
          >
            {/* Renderizando o componente principal da aplicação. */}
            <App />
          </Suspense>
        </AdoptedPetProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
)
