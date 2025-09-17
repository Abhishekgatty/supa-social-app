import React from 'react'
import { Text, TouchableOpacity, StyleSheet, ActivityIndicator, Pressable } from 'react-native'
import { View } from 'react-native-web'
import Loading from './Loading'

const Button = ({
  buttonStyle,
  textStyle,
  title = "",
  onPress = () => {},
  loading = false,
  hasShadow = true,
}) => {

  if(loading){
    return (
     <View style={[styles.button,  buttonStyle,{backgroundColor:'white'}]}>
      <Loading/>
      </View>

)}
  return (
    <Pressable
      style={[
        styles.button,
        hasShadow && styles.shadow,
        buttonStyle
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
        <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2E86C1',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
     marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  shadow: {
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
})
