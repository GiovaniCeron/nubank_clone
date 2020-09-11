import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

export default function TabItem({ item }) {
  return (
    <View style={styles.conteinerTabItem}>
      <MaterialIcons name={item.icon} size={24} color="#fff" />
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}