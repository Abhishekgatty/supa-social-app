import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ScreenWrapper from '../../components/ScreenWrapper'
import { Button } from 'react-native-web'
import { useAuth } from '../../constants/context/AuthContext'

const Home = () => {

  const {setAuth}=useAuth() 

   const onLogout = async () => {
    const { error } = await supabase.auth.signOut(); // ✅ sign out from supabase
    if (error) {
      console.log("Error logging out:", error.message);
    } else {
      console.log("User logged out");
      setAuth(null); // ✅ clear auth state in context
      // If using Expo Router:
      // router.replace("/login")
    }
  };

  return (
   <ScreenWrapper>
      <Text>HomeScreen</Text>
      <Button title='Logout' onPress={onLogout}/>
   </ScreenWrapper>
    
   
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
