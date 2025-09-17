import React from 'react'
import { View, Text } from 'react-native'
import { useRouter } from 'expo-router'
import { Button } from 'react-native-web';
import ScreenWrapper from '../components/ScreenWrapper';


const index = () => {

  const router=useRouter();

  return (
   <ScreenWrapper>
    <Text>index</Text>
    <Button title='Go to Welcome' onPress={()=>router.push('welcomee')}/>
   </ScreenWrapper>
  )
}

export default index
