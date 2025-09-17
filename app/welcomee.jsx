import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Pressable } from 'react-native'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar' // ✅ use expo-status-bar instead of react-native-web
import { wp, hp } from '../helpers/Common'
import { theme } from '../constants/theme'
import Button from '../components/Button'
import { useRouter } from 'expo-router'

const Welcomee = () => {

  const router = useRouter();

    return (
      <ScreenWrapper bg="white">
        <StatusBar style="dark" />
        
        <View style={styles.container}>
          {/* Welcome Image */}
          <Image 
            style={styles.welcomeImage} 
            resizeMode='contain' 
            source={require('../assets/images/welcome.jpg')}
          />

          {/* Text Section */}
          <View style={styles.textContainer}>
            <Text style={styles.title}>Linkup!</Text>
            <Text style={styles.punchline}>
              Where thought finds a home and every image tells a story
            </Text>
          </View>
          <View style={styles.footer}>
            <Button
            title='Getting Started'
            buttonStyle={{marginHorizontal:wp(3)}}
            onPress={()=>router.push('signUp')}
            />
            <View style={styles.buttonContainer}>
              <Text style={styles.loginText}>
                Already have an account?
              </Text>
              <Pressable onPress={()=>router.push('login')}>
                <Text style={[styles.loginText]}>Login
                </Text>
              </Pressable>
              </View>
          </View>
        </View>
      </ScreenWrapper>
    )
  }

export default Welcomee

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: wp(6),
  },
  welcomeImage: {
    width: wp(80),
    height: hp(40),
    marginBottom: hp(4),
  },
  textContainer: {
    alignItems: 'center',
    marginTop: hp(2),
  },
  title: {
    color: "#494949",  // ✅ nice blue shade
    fontSize: hp(4),   // responsive large text
    fontWeight: 'bold',
   fontWeight:"600"
  },
  punchline: {
    color: '#555',
    fontSize: wp(4.5),
    textAlign: 'center',
    lineHeight: hp(3),
    paddingHorizontal: wp(10),
  },
    footer: {
    marginTop: hp(5),
    width: "100%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: hp(2),
    alignItems: "center",
  },
  loginText: {
    color: "#2E86C1",          // blue for action links
    fontSize: wp(4),
    fontWeight: "500",
    textDecorationLine: "underline", // makes it feel clickable
    marginLeft: wp(1),
  },
})
