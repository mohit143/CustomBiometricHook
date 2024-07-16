import { useCallback, useMemo } from 'react'
import { Platform } from 'react-native'
import {
  biometricLoginRequest,
  useRequestLoading,
} from '../store/action/request'

import {
  selectIsBiometricEnabled,
  selectIsPublicRSASaved,
  selectBiometricSensor,
  selectIsSavedUserEmailExist,
} from '../store/selectors/biometrics'
import { useSelector, useDispatch } from 'react-redux'

export const useBiometric = () => {
  const dispatch = useDispatch()
  const isBiometricEnabled = useSelector(selectIsBiometricEnabled)
  const isPublicRSASaved = useSelector(selectIsPublicRSASaved)
  const biometricSensor = useSelector(selectBiometricSensor)
  const isUserEmailExist: boolean = useSelector(selectIsSavedUserEmailExist)
  const { loading: biometricLoading } = useRequestLoading(biometricLoginRequest)

  const biometricText = useMemo(() => {
    if (Platform.OS === 'ios') {
      return 'FaceID'
    }
    return 'FingerPrint'
  }, [])

  const isBiometricButtonVisible: boolean =
    isBiometricEnabled &&
    isPublicRSASaved &&
    biometricSensor &&
    isUserEmailExist

  const onBiometricPress = useCallback(() => {
    dispatch(biometricLoginRequest())
  }, [dispatch])

  return {
    onBiometricPress,
    isBiometricButtonVisible,
    biometricLoading,
    biometricText,
  }
} 