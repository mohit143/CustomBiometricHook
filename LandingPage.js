import React from 'react';
import { View, Text, Button } from 'react-native';
import useBiometric from './pathOfUseBiometric';

const LandingPage = () => {
const {
    onBiometricPress,
    isBiometricButtonVisible,
    biometricLoading,
    biometricText,
  } = useBiometric()

  return (
    <View>
      <Text>Landing Page</Text>
      {isBiometricButtonVisible?
<View>
<Text>{biometricText}</Text>
<Button title="Biometric" onPress={onBiometricPress} />
:null}
    </View>
  );
};

export default LandingPage;