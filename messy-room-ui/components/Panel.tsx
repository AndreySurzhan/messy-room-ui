  import { View, StyleSheet, Text } from 'react-native';
import { useOrientation } from '@/hooks/orientation';
import * as ScreenOrientation from "expo-screen-orientation";

export default function Panel({ children }: { children: React.ReactNode }) {
  const orientation = useOrientation();
  const portraitOrientations = [ScreenOrientation.Orientation.PORTRAIT_UP, ScreenOrientation.Orientation.PORTRAIT_DOWN];

  return (
    <View style={[styles.panel, portraitOrientations.includes(orientation) ? styles.portrait : styles.landscape]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  panel: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  portrait: {
    flexDirection: "row",
    height: 100,
    width: "100%",
    bottom: 0,
    paddingInline: 20,
  },
  landscape: {
    flexDirection: "column",
    height: "100%",
    width: 100,
    right: 0,
    paddingBlock: 20,
  },
});
