  import { View, StyleSheet, Text } from 'react-native';

export default function Panel({ children }: { children: React.ReactNode }) {

  return (
    <View style={styles.panel}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    position: "absolute",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: 100,
    width: "100%",
    bottom: 0,
    paddingHorizontal: 20,
  },
});
