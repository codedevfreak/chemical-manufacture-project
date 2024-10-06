import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';  // Pastikan ini merujuk ke file yang benar

// Definisikan tipe props untuk HomeScreen
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const goToLogin = () => {
    navigation.navigate('Login'); // Navigasi ke layar Login
  };

  return (
    <View>
      <Text>Welcome to the Home Screen</Text>
      <Button title="Go to Login" onPress={goToLogin} />
    </View>
  );
};

export default HomeScreen;
