import { render, RenderOptions } from '@testing-library/react'

// import { TranslationProvider } from "my-i18n-lib"
// import defaultStrings from "i18n/en-x-default"

// const Providers: FC<any> = ({ children }) => {
//   return <SomeProviders>{children}</SomeProviders>
// }

const customRender = (ui, options: RenderOptions | undefined = {}) =>
  render(ui, { ...options })

// re-export everything
export * from '@testing-library/react'
// export jest-axe util
export { axe } from 'jest-axe'
// override render method
export { customRender as render }
