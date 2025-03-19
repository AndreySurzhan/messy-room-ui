import { Checkbox } from 'expo-checkbox';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChecklistItem({ item }: { item: string }) {
  const [isChecked, setChecked] = useState(false);

  return <View style={styles.container} >
    <Checkbox
      style={styles.checkbox}
      value={isChecked}
      onValueChange={setChecked}
      color={isChecked ? '#4630EB' : undefined}
    />
    <Text style={styles.paragraph}>{item}</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
  },
  paragraph: {
    fontSize: 16,
    color: "white",
  },
});
