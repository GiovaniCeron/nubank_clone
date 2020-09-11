import React from 'react';
import { View, Text, Image } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'

import styles from './styles';

export default function Header() {
  return (
    <View style={styles.containerHeader}>
      <View style={styles.contentTop}>
        <Image source={require('../../assets/Nubank_Logo.png')} />
        <Text style={styles.titleTop}>Giovani</Text>
      </View>
      <MaterialIcons name="keyboard-arrow-down" size={20} color="rgba(255,255,255,0.6)" />
    </View>
  );
}