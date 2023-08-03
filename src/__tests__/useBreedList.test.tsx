import { afterEach, describe, expect, it, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import createFetchMock from 'vitest-fetch-mock'
import { useBreedList } from '../utils/useBreedList'
import { Animal } from '../utils/interfaces'

// Testes para o hook useBreedList.
describe.skip('useBreedList hook', () => {
  // Configuração do QueryClient.
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
        retry: false
      }
    }
  })

  // Lista de raças de cachorros.
  const breeds = {
    dogs: [
      'Havanese',
      'Bichon Frise',
      'Poodle',
      'Maltese',
      'Golden Retriever',
      'Labrador',
      'Husky'
    ]
  }

  // Configuração do fetchMock.
  const fetchMock = createFetchMock(vi)
  fetchMock.enableMocks()

  // Função executada após cada teste para redefinir o mock de fetch.
  afterEach(() => {
    fetchMock.resetMocks()
  })

  // Teste para verificar retorno de lista vazia sem fornecer um animal.
  it('should return empty list with no animal provided', () => {
    // Renderiza o hook useBreedList com animal vazio.
    const { result } = renderHook(() => useBreedList('' as Animal), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      )
    })

    // Obtém os valores retornados pelo hook.
    const [breedList, status] = result.current

    // Verifica se a lista de raças está vazia e o status é 'loading'.
    expect(breedList).toHaveLength(0)
    expect(status).toBe('loading')
  })

  // Teste para verificar retorno de lista com animal fornecido.
  it('should return list with animal provided', async () => {
    // Configura a resposta mockada do fetch.
    fetchMock.mockResponseOnce(
      JSON.stringify({
        breeds: breeds.dogs,
        animal: 'dog'
      })
    )

    // Renderiza o hook useBreedList com animal 'dog'.
    const { result } = renderHook(() => useBreedList('dog'), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      )
    })

    // Aguarda até que o status seja 'success' (dados carregados).
    await waitFor(() => {
      expect(result.current[1]).toBe('success')
    })

    // Obtém a lista de raças retornada pelo hook.
    const [breedList] = result.current

    // Verifica se a lista de raças é igual à lista mockada.
    expect(breedList).toEqual(breeds.dogs)
  })
})
