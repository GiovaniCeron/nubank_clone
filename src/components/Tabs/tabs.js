import React from 'react';
import { FlatList } from 'react-native';

import styles from './styles';

import TabItem from '../TabItem/tabItem';

export default function Tabs() {

  const itensTab = [
    { id: 1, description: 'Indicar Amigos', icon: 'person-add' },
    { id: 2, description: 'Recarga de celular', icon: 'smartphone' },
    { id: 3, description: 'Cobrar', icon: 'attach-money' },
    { id: 4, description: 'Doação', icon: 'mood' },
    { id: 5, description: 'Empréstimos', icon: 'account-balance' },
    { id: 6, description: 'Depositar', icon: 'arrow-downward' },
    { id: 7, description: 'Transferir', icon: 'send' },
    { id: 8, description: 'Ajustar limite', icon: 'swap-horiz' },
    { id: 9, description: 'Me Ajuda', icon: 'help-outline' },
    { id: 10, description: 'Pagar', icon: 'account-balance-wallet' },
    { id: 11, description: 'Desbloquear cartão', icon: 'block' },
    { id: 12, description: 'Cartão Virtual', icon: 'payment' },
    { id: 13, description: 'Organizar Atalhos', icon: 'subject' },
  ]


  return (

    <FlatList
      style={styles.containerTabs}
      contentContainerStyle={{alignItems: "center"}}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={itensTab}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <TabItem item={item} />
      )}
    />
  );
}