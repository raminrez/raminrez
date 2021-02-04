import { render, RenderOptions } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { FC } from 'react'

// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

const Providers: FC<any> = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>
}

const customRender = (ui, options: RenderOptions | undefined = {}) =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'
// export jest-axe util
export { axe } from 'jest-axe'
// override render method
export { customRender as render }
