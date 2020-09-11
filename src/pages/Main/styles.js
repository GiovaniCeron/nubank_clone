import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: "#8B10AE",
  },
  textTeste: {
    marginTop: Constants.statusBarHeight + 10,
  },
  titleCard: {
    flexDirection: "row",
    marginBottom: 50
  },
  titleFature:{
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 12,
    letterSpacing: 1
  },
  valueFature: {
    fontSize: 32,
    letterSpacing: 2
  },
  valueFatureDestaque:{
    fontWeight: "bold",
  },
  limitCash:{
    flexDirection: "row",
    width: 215,
    justifyContent: "space-between"
  },
  descLimit:{
    letterSpacing: 1
  },
  valueLimit:{
    letterSpacing: 1,
    fontWeight: "bold"
  }




});