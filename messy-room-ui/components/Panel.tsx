  import { View, StyleSheet } from 'react-native';
import { useIsPortrait } from '@/hooks/orientation';
import { SIZES } from '@/constants/layout';
export default function Panel({ children }: { children: React.ReactNode }) {
  const isPortrait = useIsPortrait();

  return (
    <View style={[styles.panel, isPortrait ? styles.portrait : styles.landscape]}>
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
    height: SIZES.PANEL.HEIGHT,
    width: "100%",
    bottom: 0,
    paddingInline: 20,
  },
  landscape: {
    flexDirection: "column",
    height: "100%",
    width: SIZES.PANEL.WIDTH,
    right: 0,
    paddingBlock: 20,
  },
});
