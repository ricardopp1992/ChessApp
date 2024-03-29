import React, { FC } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { useFormik } from 'formik'
import Icon from 'react-native-vector-icons/Ionicons'

import { INewWatch, NewTimeModalProps } from '@interfaces/components/StartWatch.interface'
import { buttonPrimaryStyle, themes } from '@assets/Themes'
import Modal from '@components/Shared/Modal'
import { newTimeValidator } from '@utils/formValidators'
import useOrientation from '@components/hooks/useOrientation'
import { OrientationEnum } from '@interfaces/Hooks.interfaces'

const NewTimeModal: FC<NewTimeModalProps> = ({ onHandleSubmit, time, closeModal }) => {
  const initialValues: INewWatch = time || { whiteName: '', blackName: '', hours: 0, minutes: 0, seconds: 0 }
  const { values, handleChange, handleBlur, handleSubmit, errors } = useFormik({
    initialValues,
    onSubmit: onHandleSubmit,
    validate: newTimeValidator
  })
  const orientation = useOrientation()
  const isLandscape = orientation === OrientationEnum.LANDSCAPE

  const disableButton = Object.keys(errors).length > 0 ||
    (values.hours == 0 && values.minutes == 0 && values.seconds == 0)

  return (
    <Modal>
      <TouchableOpacity style={styles.closeTouchable} onPress={() => closeModal()}>
        <Icon name="close-outline" style={styles.closeIcon} />
      </TouchableOpacity>
      <View>
        <View style={[isLandscape && styles.nameInputsLandscape]}>
          <View style={isLandscape && styles.nameInputLandscape}>
            <Text style={styles.modalText}>White Names: </Text>
            <TextInput
              onChangeText={handleChange('whiteName')}
              onBlur={handleBlur('whiteName')}
              value={values.whiteName}
              placeholderTextColor={themes.placeHolderColor}
              style={[styles.textInput, isLandscape && styles.textInputLandscape]} placeholder='white name' />
          </View>
          <View style={isLandscape && styles.nameInputLandscape}>
            <Text style={styles.modalText}>Blacks Names: </Text>
            <TextInput
              onChangeText={handleChange('blackName')}
              onBlur={handleBlur('blackName')}
              placeholderTextColor={themes.placeHolderColor}
              value={values.blackName}
              style={[styles.textInput, isLandscape && styles.textInputLandscape]} placeholder='black name' />
          </View>
        </View>
        {
          Object.values(errors).map((error) => <Text key={error} style={styles.errors}>{error}</Text>)
        }
        <View style={[styles.timeFormContainer, isLandscape && styles.timeFormLandscape]}>
          <Text style={styles.newTimeText}>Add new time: </Text>
          <View style={styles.inputs}>
            <TextInput
              keyboardType="numeric"
              onChangeText={handleChange('hours')}
              onBlur={handleBlur('hours')}
              value={`${values.hours || ''}`}
              placeholderTextColor={themes.placeHolderColor}
              style={[styles.textInput, styles.timeInputs, isLandscape && styles.textInputLandscape]}
              placeholder="00h"
            />

            <Text style={{ marginHorizontal: '1%' }}>:</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={handleChange('minutes')}
              onBlur={handleBlur('minutes')}
              value={`${values.minutes || ''}`}
              placeholderTextColor={themes.placeHolderColor}
              style={[styles.textInput, styles.timeInputs, isLandscape && styles.textInputLandscape]}
              placeholder="00m"
            />

            <Text style={{ marginHorizontal: '1%' }}>:</Text>
            <TextInput
              keyboardType="numeric"
              onChangeText={handleChange('seconds')}
              onBlur={handleBlur('seconds')}
              value={`${values.seconds || ''}`}
              placeholderTextColor={themes.placeHolderColor}
              style={[styles.textInput, styles.timeInputs, isLandscape && styles.textInputLandscape]}
              placeholder="00s"
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={handleSubmit}
        disabled={disableButton}
        style={[
          buttonPrimaryStyle.button,
          styles.startTimerButton,
          disableButton && styles.disableButton,
          isLandscape && { paddingVertical: 5, marginVertical: '5%' }
        ]}
      >
        <Text style={buttonPrimaryStyle.text}>Start Watch</Text>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  closeTouchable: {
    position: 'absolute',
    top: 10,
    right: 30,
  },
  closeIcon: {
    fontSize: 20,
    borderColor: themes.grayColor,
    borderRadius: 5,
    borderWidth: 1,
    right: -20,
    alignSelf: 'flex-end',
  },
  nameInputsLandscape: {
    flexDirection: 'row',
  },
  nameInputLandscape: {
    width: '40%',
    marginRight: '2%',
  },
  modalText: {
    color: themes.secondaryColorText,
    fontWeight: '800',
  },
  startTimerButton: {
    alignSelf: 'center',
    width: '90%'
  },
  disableButton: {
    backgroundColor: themes.grayColor
  },
  timeFormContainer: {
    marginTop: themes.APIgt27 ? '10%' : '5%',
    alignSelf: 'center',
  },
  timeFormLandscape: {
    marginTop: 0,
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
    color: themes.inputColorText,
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginVertical: 5,
    borderWidth: 2,
    borderColor: themes.grayColor,
    borderRadius: 10,
  },
  textInputLandscape: {
    paddingVertical: 2,
  },
  timeInputs: {
    width: '30%',
  },
  errors: {
    color: 'red',
    fontSize: 10,
    fontWeight: '700',
  }
})

export default NewTimeModal
