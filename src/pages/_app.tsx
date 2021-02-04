import { AppProps, NextWebVitalsMetric } from 'next/app'
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

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  // Use `window.gtag` if you initialized Google Analytics as this example:
  // https://github.com/vercel/next.js/blob/canary/examples/with-google-analytics/pages/_document.js
  window.gtag('event', name, {
    event_category:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value),
    event_label: id,
    non_interaction: true,
  })
}

export default MyApp
