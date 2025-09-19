import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // ✅ Expo icon
import { useRouter } from "expo-router";

export default function BackButton({ label = "Back", color = "black" }) {
  const router = useRouter();

  return (
    <Pressable style={styles.backButton} onPress={() => router.back()}>
      <Ionicons name="arrow-back" size={28} color={color} />
      <Text style={[styles.backText, { color }]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 50,
    left: 20,
  },
  backText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500",
  },
});
