import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashboardScreen = () => {
  const [user, setUser] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const token = ''; // Retrieve token from async storage
    if (!token) {
      navigation.navigate('Login');
    } else {
      fetch('http://localhost:3000/api/users/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [navigation]);

  if (!user) return <Text>Loading...</Text>;

  return <View>
    <Text>Welcome, {user.name}!</Text>
  </View>;
};

export default DashboardScreen;
