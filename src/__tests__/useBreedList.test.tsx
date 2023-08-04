import { afterEach, describe, expect, it, vi } from 'vitest'
import { renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import createFetchMock from 'vitest-fetch-mock'
import { useBreedList } from '../utils/useBreedList'
import { Animal } from '../utils/interfaces'

describe.skip('useBreedList hook', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity,
        retry: false
      }
    }
  })

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

  const fetchMock = createFetchMock(vi)
  fetchMock.enableMocks()

  afterEach(() => {
    fetchMock.resetMocks()
  })

  it('should return empty list with no animal provided', () => {
    const { result } = renderHook(() => useBreedList('' as Animal), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      )
    })

    const [breedList, status] = result.current
    expect(breedList).toHaveLength(0)
    expect(status).toBe('loading')
  })

  it('should return list with animal provided', async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        breeds: breeds.dogs,
        animal: 'dog'
      })
    )

    const { result } = renderHook(() => useBreedList('dog'), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      )
    })

    await waitFor(() => {
      expect(result.current[1]).toBe('success')
    })

    const [breedList] = result.current
    expect(breedList).toEqual(breeds.dogs)
  })
})
