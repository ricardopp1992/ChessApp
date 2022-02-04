import React, { FC, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

import { StartWatchScreenProps } from '@interfaces/ScreenInterfaces'
import PreviousTimes from '@components/PreviousTimes'
import Footer from '@components/Footer/index'
import NewTimeModal from '@components/PreviousTimes/NewTimeModal'

const StartWatchScreen: FC<StartWatchScreenProps> = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false)

  const openNewModal = () => {
    setShowModal(true)
  }

  const closeModal = () => setShowModal(false)

  return (
    <View style={styles.startWatchContainer}>
      <PreviousTimes handleOpenModal={openNewModal} />
      {showModal && <NewTimeModal closeModal={closeModal} />}
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  startWatchContainer: {
    height: Dimensions.get('window').height
  }
})

export default StartWatchScreen
