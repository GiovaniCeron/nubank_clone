import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

import Header from '../../components/Header/header';
import Tabs from '../../components/Tabs/tabs';
import Card from '../../components/Card/card';
import DetachCard from '../../components/DetachCard/detachCard';

export default function Main() {
  return (
    <View style={styles.containerMain}>
      <Header />
      <ScrollView>
        {/**Card do Cartão de Credito */}
        <Card>
          <View style={styles.titleCard}>
            <MaterialIcons name="payment" size={20} color="#000" />
            <Text>Cartão de crédito</Text>
          </View>
          <View>
            <Text style={styles.titleFature}>Fatura Atual</Text>
            <Text style={styles.valueFature}>
              R$
              <Text style={styles.valueFatureDestaque}>232</Text>
              ,05
            </Text>
            <View style={styles.limitCash}>
              <Text style={styles.descLimit}>Limite disponível</Text>
              <Text style={styles.valueLimit}>R$ 5.924,16</Text>
            </View>
          </View>
        </Card>
        <DetachCard />

        <Card />
        <DetachCard />
        <Card />
        <DetachCard />
      </ScrollView>
      <Tabs />
    </View>
  );
}