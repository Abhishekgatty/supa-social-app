import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { ArrowLeft01Icon } from "hugeicons-react-native";
import { useRouter } from "expo-router";

export default function BackButton({ label = "Back", color = "black" }) {
  const router = useRouter();

  return (
    <Pressable style={styles.backButton} onPress={() => router.back()}>
      <ArrowLeft01Icon size={28} color={color} />
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
