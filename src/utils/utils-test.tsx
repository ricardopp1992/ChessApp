import React, { FC, ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react-native'
import { Provider } from 'react-redux'

import store from '@store/store'

const ReduxProvider: FC = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

const reduxRender = (ui: ReactElement, options: RenderOptions = {}) =>
  render(ui, { wrapper: ReduxProvider, ...options })

export * from '@testing-library/react-native'

export { reduxRender as render }