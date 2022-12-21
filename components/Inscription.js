import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Inscription() {
  return (
    <View>
      <Text style={styles.button}>Inscription</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    n : {
        width : "100%",
        justifyContent : "center",
        alignItems : "center",
        marginTop: "50%",
        color : "red"
      }
})