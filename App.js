import { StyleSheet, Text, View, Button, Pressable } from 'react-native'
import React from 'react'
import Inscription from './components/Inscription'


export default function App() {
  return (
    <View style={styles.button}>
      <Text>App</Text>
      <Pressable style={styles.btn}>
        <Text>b</Text>
      </Pressable>
      <Inscription/>
    </View>
  )
}

const styles = StyleSheet.create({
  button : {
    width : "100%",
    justifyContent : "center",
    alignItems : "center",
    marginTop: "50%",
    color : "red"
  },
  btn : {
    backgroundColor : "blue",
    width : 60,

  }
})