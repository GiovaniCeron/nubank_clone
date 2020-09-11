import React from 'react';
import {TouchableOpacity} from 'react-native';

import styles from './styles';

export default function Card(props){
  return(
    <TouchableOpacity style={styles.containerCard}>
      {props.children}
    </TouchableOpacity>
  );
}