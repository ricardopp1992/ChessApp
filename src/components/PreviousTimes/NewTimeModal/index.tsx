import React, { FC, useEffect, useState } from 'react'
import {
  Keyboard,
  KeyboardEvent,
  StyleSheet,
  Text,
  useWindowDimensions,
  View
} from 'react-native'
import { useFormik } from 'formik'

import { INewWatch, NewTimeModalProps } from '@interfaces/components/StartWatch.interface'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { buttonPrimaryStyle, themes } from '@assets/Themes'

const NewTimeModal: FC<NewTimeModalProps> = ({ onHandleSubmit }) => {
  const initialValues: INewWatch = { whiteName: '', blackName: '', minutes: '', seconds: '' }
  const [heightWithKeyboard, setHeightWithKeyboard] = useState<{ height?: string, marginTop?: string }>()
  const { height: windowHeight } = useWindowDimensions()
  const { values, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues,
    onSubmit: onHandleSubmit
  })

  const onShowKeyboard = (event: KeyboardEvent) => {
    const keyboardHeightPlusHeader = event.endCoordinates.height + themes.headerHeight
    const keyboardHeightPercentage = (keyboardHeightPlusHeader * 100) / windowHeight
    const heightStyle = StyleSheet.create({
      keyboardHeight: {
        height: `${100 - (15 + keyboardHeightPercentage)}%`,
        marginTop: '5%'
      }
    })
    setHeightWithKeyboard(heightStyle.keyboardHeight)
  }

  const onHideKeyboard = () => {
    setHeightWithKeyboard({})
  }

  useEffect(() => {
    console.log(values);
  }, [values])

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', onShowKeyboard)
    Keyboard.addListener('keyboardDidHide', onHideKeyboard)

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow')
      Keyboard.removeAllListeners('keyboardDidHide')
    }
  }, []);

  return (
    <View style={styles.overlayModal}>
      <View style={{ ...styles.newTimeModalContainer, ...heightWithKeyboard }}>
        <View>
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
                onChangeText={handleChange('minutes')}
                onBlur={handleBlur('minutes')}
                value={values.minutes}
                style={styles.textInput} placeholder="00min" />
              <Text style={{ marginHorizontal: '1%' }}>:</Text>
              <TextInput
                keyboardType="numeric"
                onChangeText={handleChange('seconds')}
                onBlur={handleBlur('seconds')}
                value={values.seconds}
                style={styles.textInput} placeholder="00sec" />
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          style={{ ...buttonPrimaryStyle.button, ...styles.startTimerButton }}
        >
          <Text style={buttonPrimaryStyle.text}>Start Watch</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlayModal: {
    position: 'absolute',
    top: 0,
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: themes.overlayColor,
  },
  newTimeModalContainer: {
    position: 'absolute',
    paddingVertical: '5%',
    paddingHorizontal: '10%',
    alignSelf: 'center',
    marginTop: '15%',
    backgroundColor: '#F1F1F1',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: themes.grayColor,
    justifyContent: 'space-between',
    width: '80%',
    height: '50%'
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
