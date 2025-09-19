import React, { use } from 'react'
import { View, Text } from 'react-native'
import { AuthProvider,useAuth } from '../constants/context/AuthContext'
import { Stack } from 'expo-router'



const _layout = () => {
  return (  
    <AuthProvider>
      <MainLayout />
    </AuthProvider>
  )
}

const MainLayout = () => {
  const { user, setAuth, setUserData } = useAuth();

  // useEffect(() => {
  //   Supabase.auth.onAuthStateChange((_event, session) => {
  //     console.log('Auth state changed:', session?.user);
  //   })
  // });

  return (
 <Stack
 screenOptions={{ headerShown: false }}
 />
  )
}

export default _layout
