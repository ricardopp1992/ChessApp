import React from 'react'
import { ImageBackground, View } from 'react-native'

import styles from './footer.styles'
const backAndWhiteQueensImg = require('../../assets/blackAndWhiteQueens.png')

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <ImageBackground
        source={backAndWhiteQueensImg}
        style={styles.queensImage}
        resizeMode="contain"
      />
    </View>
  )
}

export default Footer
