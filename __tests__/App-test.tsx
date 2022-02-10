/**
 * @format
 */

import 'react-native'
import React from 'react'

// Note: test renderer must be required after react-native.
import { render, fireEvent } from '@testing-library/react-native'

import HomeScreen from '@screens/HomeScreen'

it('renders correctly', () => {
  const navigation = {} as any
  const routeMock = {} as any

  const { getByText } = render(<HomeScreen route={routeMock} navigation={navigation} />);
  const startButton = getByText(/Start/)

  expect(startButton).toBeTruthy()
});
