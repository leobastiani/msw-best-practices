// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch'

// Extend Jest "expect" functionality with Testing Library assertions.
import '@testing-library/jest-dom'

import { server } from './src/mocks/server'

beforeAll(() => {
  server.listen({onUnhandledRequest: 'error'})
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})

import failOnConsole from 'jest-fail-on-console'

failOnConsole()
