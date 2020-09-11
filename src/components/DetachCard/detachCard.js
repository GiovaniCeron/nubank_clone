import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

export default function DetachCard() {
  return (
    <TouchableOpacity 
      style={styles.containerDetach}
      activeOpacity={0.2}
    >
      <MaterialIcons name="airplanemode-active" size={25} color="rgb(190,190,190)" />
      <View>
        <Text style={styles.textDetach}>Compra mais recente em</Text>
        <Text style={styles.textDetach}>Vôo para Banff - Emirates Primei...</Text>
      </View>
      <MaterialIcons name="navigate-next" size={25} color="rgb(190,190,190)" />
    </TouchableOpacity>

  );
}