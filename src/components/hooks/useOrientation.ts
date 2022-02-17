import { useWindowDimensions } from 'react-native'

import { OrientationEnum } from '@interfaces/Hooks.interfaces'

const useOrientation = (): OrientationEnum => {
  const { height, width } = useWindowDimensions()

  return height < width ? OrientationEnum.LANDSCAPE : OrientationEnum.PORTRAIT
}

export default useOrientation