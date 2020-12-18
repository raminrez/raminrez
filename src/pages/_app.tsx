import { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Box bg="blue.900" h="full">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
