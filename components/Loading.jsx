import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import theme from '../constants/theme'
import { ActivityIndicator } from 'react-native-web'

const Loading = ({size="large",color=theme.colors.primary}) => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
<ActivityIndicator size={size} color={color}/>

    </View>
  )
}

export default Loading
