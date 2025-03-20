import { Checkbox } from "expo-checkbox";
import { useState } from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function ChecklistItem({ item }: { item: string }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <Pressable style={styles.container} onPress={() => setChecked(!isChecked)}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
        color={isChecked ? "#4630EB" : undefined}
      />
      <Text style={styles.paragraph}>{item}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  checkbox: {
    width: 32,
    height: 32,
  },
  paragraph: {
    fontSize: 28,
    color: "white",
  },
});
