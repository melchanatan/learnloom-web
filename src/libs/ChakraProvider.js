'use client'

import { ChakraProvider } from '@chakra-ui/react'

export function ChakraStyleProvider({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>
}