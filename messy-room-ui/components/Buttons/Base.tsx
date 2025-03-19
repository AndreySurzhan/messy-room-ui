import { Pressable, StyleSheet, View } from 'react-native';

export default function BaseButton({ onPress, color }: { onPress: () => void, color: string }) {
  return <Pressable onPress={onPress} style={[styles.button, { borderColor: color }]}>
    {({ pressed }) => <View style={[styles.inner, { opacity: pressed ? 0.5 : 1, backgroundColor: color }]} />}
  </Pressable>;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    borderWidth: 5,
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    borderRadius: "50%",
    width: 30,
    height: 30,
  },
});
