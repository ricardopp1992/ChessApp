import React, { FC } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native'
import { useFormik } from 'formik'
import Icon from 'react-native-vector-icons/Ionicons'

import { INewWatch, NewTimeModalProps } from '@interfaces/components/StartWatch.interface'
import { buttonPrimaryStyle, themes } from '@assets/Themes'
import Modal from '@components/Shared/Modal'

const NewTimeModal: FC<NewTimeModalProps> = ({ onHandleSubmit, time, closeModal }) => {
  const initialValues: INewWatch = time || { whiteName: '', blackName: '', hours: 0, minutes: 0, seconds: 0 }
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    onSubmit: onHandleSubmit
  })

  return (
    <Modal>
      <View>
        <TouchableOpacity onPress={() => closeModal()}>
          <Icon name="close-outline" style={styles.closeButton} />
        </TouchableOpacity>
        <Text style={styles.modalText}>White Names: </Text>
        <TextInput
          onChangeText={handleChange('whiteName')}
          onBlur={handleBlur('whiteName')}
          value={values.whiteName}
          placeholder='white name' />
        <Text style={styles.modalText}>Blacks Names: </Text>
        <TextInput
          onChangeText={handleChange('blackName')}
          onBlur={handleBlur('blackName')}
          value={values.blackName}
          placeholder='black name' />
        <View style={styles.timeFormContainer}>
          <Text style={styles.newTimeText}>Add new time: </Text>
          <View style={styles.inputs}>
            <TextInput
              keyboardType="numeric"
              onChangeText={handleChange('hours')}
              onBlur={handleBlur('hours')}
              value={`${values.hours || ''}`}
              style={styles.textInput} placeholder="00h" />

            <Text style={{ marginHorizontal: '1%' }}>:</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={handleChange('minutes')}
              onBlur={handleBlur('minutes')}
              value={`${values.minutes || ''}`}
              style={styles.textInput} placeholder="00m" />

            <Text style={{ marginHorizontal: '1%' }}>:</Text>

            <TextInput
              keyboardType="numeric"
              onChangeText={handleChange('seconds')}
              onBlur={handleBlur('seconds')}
              value={`${values.seconds || ''}`}
              style={styles.textInput} placeholder="00s" />
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        style={{ ...buttonPrimaryStyle.button, ...styles.startTimerButton }}
      >
        <Text style={buttonPrimaryStyle.text}>Start Watch</Text>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  closeButton: {
    fontSize: 20,
    borderColor: themes.grayColor,
    borderRadius: 5,
    borderWidth: 1,
    right: -20,
    alignSelf: 'flex-end',
  },
  modalText: {
    color: themes.secondaryColorText,
    fontWeight: '800',
  },
  startTimerButton: {
    alignSelf: 'center',
    width: '90%'
  },
  timeFormContainer: {
    marginTop: '10%',
    alignSelf: 'center'
  },
  newTimeText: {
    textAlign: 'center',
    color: themes.secondaryColorText,
    fontWeight: '800',
  },
  inputs: {
    marginTop: '2%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    paddingVertical: 0,
    width: '30%',
    backgroundColor: themes.backgroundInput
  }
})

export default NewTimeModal
